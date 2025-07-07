import { notFound } from 'next/navigation';
import BlogPost from '@/components/BlogPost';

// This would typically come from a CMS or markdown files
const blogPosts = {
  'mcp-job-search-server': {
    title: "Building a Real-Time Job Search MCP Server: From API to Agent with HTTP Streaming and Google ADK",
    date: "2025-06-27",
    readTime: "5 min read",
    tags: ["MCP", "AI", "Agents", "GoogleADK", "Python", "Streaming", "JobSearch", "VertexAI"],
    content: `# Building a Real-Time Job Search MCP Server: From API to Agent with HTTP Streaming and Google ADK

*How I built and deployed a production-ready Model Context Protocol server that transforms any AI agent into a powerful job search assistant*

## The Vision: AI Agents That Actually Know About Jobs

Imagine asking an AI agent "Find me remote Python developer jobs posted this week" and getting real-time, comprehensive results including salaries, company details, and direct application links. That's exactly what I built using the Model Context Protocol (MCP) - a game-changing standard that lets AI agents securely access external tools and data sources.

In this post, I'll walk you through building a production MCP server from scratch, deploying it with HTTP streaming capabilities, and integrating it seamlessly with Google's Agent Development Kit (ADK).

## Why MCP? The Power of Extensible AI Agents

Traditional AI agents are limited to their training data, which becomes stale quickly in fast-moving domains like job markets. MCP solves this by providing a standardized way for agents to:

- **Access real-time data** through secure API connections
- **Execute actions** in external systems 
- **Maintain context** across complex multi-step workflows
- **Stream responses** for better user experience

For job search, this means agents can pull live listings, calculate current salary ranges, and even help with applications - all while maintaining the conversational interface users love.

## The Tech Stack: Modern, Scalable, Production-Ready

Here's what I chose and why:

### **FastMCP** - The Server Framework
\`\`\`python
from fastmcp import FastMCP
mcp = FastMCP(name="Job-Search")
\`\`\`

FastMCP provides a Python-native way to build MCP servers with automatic schema generation and built-in HTTP streaming support. It's perfect for rapid development while maintaining production reliability.

### **JSearch API** - The Data Source
For job data, I integrated with JSearch's comprehensive API that provides:
- Real-time job listings from major job boards
- Salary estimates and company insights
- Geographic and skills-based filtering
- Direct application links

### **Render** - Cloud Deployment
Render offers seamless deployment with automatic HTTPS, environment variable management, and scaling - perfect for MCP servers that need reliable uptime.

### **Google ADK** - Agent Framework
Google's Agent Development Kit provides the perfect counterpart to MCP servers, with native support for streaming protocols and Vertex AI integration.

## Building the MCP Server: Tools That Actually Work

The core of any MCP server is its tools. Here's how I structured the job search capabilities:

### 1. **Smart Job Search with Real-Time Filtering**
\`\`\`python
@mcp.tool()
async def search_jobs(
    query: str,
    location: str = "",
    page: int = 1,
    num_pages: int = 1,
    date_posted: str = "all",
    country: str = "us",
    employment_types: str = "",
    job_requirements: str = "",
    remote_jobs_only: bool = False
) -> Dict[str, Any]:
    """
    Search for job listings with comprehensive filtering options.
    Returns detailed job information including salaries, benefits, and requirements.
    """
\`\`\`

The key insight here was making parameters flexible but not overwhelming. Instead of complex nested objects, I used simple strings that agents can easily construct.

### 2. **Comprehensive Data Formatting**
\`\`\`python
def format_job_listing(job: Dict[str, Any]) -> Dict[str, Any]:
    """Transform raw API data into agent-friendly structured information."""
    
    # Extract salary information
    salary = None
    if any([job.get("job_min_salary"), job.get("job_max_salary")]):
        salary = {
            "min": job.get("job_min_salary"),
            "max": job.get("job_max_salary"),
            "currency": job.get("job_salary_currency"),
            "period": job.get("job_salary_period")
        }

    # Structure highlights for easy agent consumption
    highlights = job.get("job_highlights", {})
    
    return {
        "job_id": job.get("job_id"),
        "job_title": job.get("job_title"),
        "company_name": job.get("employer_name"),
        "location": job.get("job_location"),
        "employment_type": job.get("job_employment_type"),
        "remote": job.get("job_is_remote", False),
        "salary": salary,
        "qualifications": highlights.get("Qualifications", []),
        "responsibilities": highlights.get("Responsibilities", []),
        "benefits": highlights.get("Benefits", []),
        "apply_link": job.get("job_apply_link"),
        # ... more structured fields
    }
\`\`\`

This formatting layer is crucial - it transforms messy API responses into clean, consistent data that agents can reliably work with.

### 3. **Multiple Search Strategies**
I implemented five complementary tools:
- \`search_jobs\` - General job search with filters
- \`get_job_details\` - Deep dive into specific positions
- \`search_jobs_by_company\` - Company-focused searches
- \`get_salary_estimate\` - Market rate analysis
- \`get_company_salary\` - Company-specific compensation data

## Deployment: HTTP Streaming in Production

### The Render Configuration
\`\`\`python
if __name__ == "__main__":
    mcp.run(
        transport="streamable-http",
        host="0.0.0.0", 
        port=int(os.environ.get("PORT", 8000)), 
        path="/jobsearch-mcp",
        log_level="debug"
    )
\`\`\`

The magic is in that \`transport="streamable-http"\` parameter. This enables:
- **Real-time streaming** of responses as they're generated
- **Connection persistence** for better performance
- **Error resilience** with automatic reconnection
- **Scalable architecture** that handles multiple concurrent agents

### Environment Setup
\`\`\`bash
# .env file
RAPIDAPI_KEY=your_jsearch_api_key
PORT=8000
\`\`\`

Render automatically injects the PORT variable and handles SSL termination, making deployment surprisingly simple.

## Google ADK Integration: Where the Magic Happens

### The Agent Configuration
\`\`\`python
from google.adk.agents.llm_agent import LlmAgent
from google.adk.tools.mcp_tool.mcp_toolset import MCPToolset
from google.adk.tools.mcp_tool.mcp_session_manager import StreamableHTTPServerParams

root_agent = LlmAgent(
    model='gemini-2.0-flash-001',
    name='job_search_assistant',
    instruction='''You are a helpful job search assistant with access to real-time job data.
    
    Available tools:
    - search_jobs: Find current job listings with detailed filters
    - get_job_details: Get comprehensive information about specific positions
    - search_jobs_by_company: Explore opportunities at specific companies
    - get_salary_estimate: Research market rates for positions
    - get_company_salary: Get company-specific compensation data
    
    Always provide helpful, detailed responses with specific job information.''',
    tools=[
        MCPToolset(
            connection_params=StreamableHTTPServerParams(
                url='https://gethired-mcp.onrender.com/jobsearch-mcp',
            ),
        )
    ],
)
\`\`\`

### The Streaming Experience
\`\`\`python
# The ADK automatically handles streaming responses
async for event in runner.run_async(session_id=session.id, user_id=user_id, new_message=content):
    if hasattr(event, 'message') and event.message:
        print(event.message)  # Real-time updates as agent processes
\`\`\`

What makes this powerful is the seamless integration. The agent automatically:
- Discovers available tools from the MCP server
- Validates function schemas against Vertex AI requirements
- Streams tool execution results back to users in real-time
- Maintains conversation context across multiple tool calls

## The Challenge: Schema Compatibility

### The Problem
During integration, I hit a wall with Vertex AI's function calling requirements:

\`\`\`
400 INVALID_ARGUMENT: Unable to submit request because \`search_jobs\` 
functionDeclaration \`parameters.employment_types\` schema specified 
other fields alongside any_of. When using any_of, it must be the only field set.
\`\`\`

### The Solution
FastMCP was generating schemas with conflicting \`any_of\` and \`type\` fields for optional parameters:

\`\`\`python
# ❌ This caused schema conflicts:
employment_types: Optional[str] = None

# ✅ This works perfectly:
employment_types: str = ""
\`\`\`

The fix was simple but crucial - use empty strings instead of None for optional parameters, then handle them in the logic:

\`\`\`python
if employment_types.strip():
    api_params["employment_types"] = employment_types
\`\`\`

## Results: A Production-Ready Job Search Agent

The final system delivers:

### **Real-Time Job Discovery**
\`\`\`
User: "Find remote Python developer jobs posted this week"
Agent: *Uses search_jobs with filters*
       "I found 47 remote Python developer positions posted in the last 7 days..."
\`\`\`

### **Intelligent Salary Research**
\`\`\`
User: "What do data scientists make at Google?"
Agent: *Uses get_company_salary*
       "Based on current market data, Data Scientists at Google earn..."
\`\`\`

### **Multi-Step Job Analysis**
\`\`\`
User: "Compare software engineer roles at startups vs big tech"
Agent: *Uses multiple tools to gather comprehensive data*
       "Here's a detailed comparison based on current listings..."
\`\`\`

## Performance and Scalability

The HTTP streaming architecture delivers:
- **Sub-second response times** for initial tool calls
- **Progressive result streaming** for large datasets
- **Reliable error handling** with automatic retries
- **Horizontal scalability** on Render's infrastructure

## Lessons Learned and Best Practices

### 1. **Design for Agent Consumption**
Structure your tool responses with agents in mind. Clear, consistent schemas beat flexibility for AI consumption.

### 2. **Embrace HTTP Streaming**
The streaming transport makes a huge difference in perceived performance, especially for data-heavy operations.

### 3. **Schema Validation is Critical**
Test your function schemas thoroughly against your target LLM providers. Small incompatibilities can break entire integrations.

### 4. **Error Handling Wins**
Robust error handling and fallback responses keep agents functional even when external APIs have issues.

### 5. **Environment Management**
Use proper environment variable management from day one. It makes deployment and scaling much smoother.

## What's Next: The Future of MCP

This job search server is just the beginning. The MCP ecosystem is rapidly evolving with:

- **Multi-modal capabilities** for processing resumes and job descriptions
- **Integration with ATS systems** for direct applications
- **Personal career tracking** with persistent state management
- **Company research tools** with real-time market data

The combination of MCP servers, HTTP streaming, and modern agent frameworks like Google ADK is creating a new category of AI applications that are both powerful and reliable.

## Get Started Today

Want to build your own MCP server? Here's your starting checklist:

1. **Choose your domain** - What external data/APIs would make your agents more useful?
2. **Set up FastMCP** - Get the development environment running locally
3. **Design your tools** - Think from the agent's perspective, not the user's
4. **Test the schemas** - Validate against your target LLM early and often
5. **Deploy with streaming** - Use the streamable-http transport for production
6. **Integrate with ADK** - Connect to Google's agent framework for the full experience

The future of AI is agents that can act in the real world. MCP servers are the bridge that makes it possible.

---

*Ready to build your own MCP server? Check out what you can accomplish [Here](https://github.com/justliya/gethired_agents.git) and join the growing community of developers building the next generation of AI agents.*

**Tags:** #MCP #AI #Agents #GoogleADK #Python #Streaming #JobSearch #VertexAI`
  }
};

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}