"use client";

import { motion } from "framer-motion";
import { Heart, Users, Code, Lightbulb } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              My Story
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From witnessing language deprivation in the Deaf community to building AI systems that break down barriers
          </p>
        </motion.div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Origin Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Heart className="w-8 h-8 text-pink-400" />
              <h3 className="text-2xl font-bold text-white">The Spark</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Seeing language deprivation in the Deaf community showed me how systemic exclusion limits opportunity. 
              Witnessing capable individuals struggle due to poorly designed systems inspired me to rethink my approach 
              to technology and problem-solving.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I learned to view barriers as design challenges to solve, conducting user research by identifying pain points, 
              creating solutions, and measuring their impact through data and personal stories.
            </p>
          </motion.div>

          {/* Perspective */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">The Perspective</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a neurodivergent Black woman whose path to AI started with a B.A. in Deaf Studies and Arts in Health. 
              My background has deeply influenced my approach to AI—while some view machine learning as abstract math, 
              I see it as a way to empower marginalized communities.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This isn't just empathy; it's expertise. I address bias in algorithms and design inclusive interfaces 
              based on my understanding of how marginalized communities interact with technology.
            </p>
          </motion.div>
        </div>

        {/* Journey & Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <Code className="w-8 h-8 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">The Journey</h3>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm a self-taught engineer with a passion for problem-solving and impact. Without formal training, 
            I've mastered coding essentials like recursion, data structures, and machine learning through real-world projects. 
            My journey has been fueled by overcoming imposter syndrome and proving that tech success isn't about credentials but persistence.
          </p>
          <p className="text-gray-300 leading-relaxed">
            When creating GetHiredAI, I wasn't just using tech skills—I was addressing the exclusion in traditional hiring systems. 
            My experience analyzing Deaf community communication translates to evaluating AI model performance. 
            Instead of writing about social isolation, I'm building systems to reduce it.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <Lightbulb className="w-8 h-8 text-yellow-400" />
            <h3 className="text-2xl font-bold text-white">The Mission</h3>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Resilience isn't about being fearless; it's about showing up despite fear and uncertainty, and still choosing to grow. 
              I bring the perspective of transforming barriers into bridges and turning exclusion into a design challenge.
            </p>
            <p className="text-lg text-purple-300 font-medium">
              I believe AI's future should be shaped by historically silenced voices. I'm committed to using my experiences, 
              research, and technical skills to build technology that serves everyone, especially those still striving to be seen.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Inclusive Design</h4>
              <p className="text-gray-400 text-sm">Building technology that works for everyone, especially marginalized communities</p>
            </div>
            <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Empathy-Driven Engineering</h4>
              <p className="text-gray-400 text-sm">Combining technical excellence with deep understanding of human needs</p>
            </div>
            <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800">
              <h4 className="text-lg font-semibold text-pink-400 mb-2">Barrier Breaking</h4>
              <p className="text-gray-400 text-sm">Transforming systemic challenges into opportunities for innovation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}