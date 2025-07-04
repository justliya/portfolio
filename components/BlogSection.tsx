"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "mcp-job-search-server",
    title: "Building a Real-Time Job Search MCP Server: From API to Agent with HTTP Streaming and Google ADK",
    excerpt: "How I built and deployed a production-ready Model Context Protocol server that transforms any AI agent into a powerful job search assistant using FastMCP, JSearch API, and Google's Agent Development Kit.",
    date: "2025-01-27",
    readTime: "12 min read",
    tags: ["MCP", "AI", "Agents", "GoogleADK", "Python", "Streaming", "JobSearch", "VertexAI"],
    slug: "mcp-job-search-server"
  }
];

export default function BlogSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Thoughts on AI, development, and building the future of intelligent applications
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                  {/* Post Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Post Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h2>

                  {/* Post Excerpt */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-400 rounded-full">
                        +{post.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                    <span>Read full article</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">More articles coming soon...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}