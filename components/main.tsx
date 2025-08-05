"use client";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <section className="py-32 relative" id="journey">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
        </motion.div>

        {/* Journey Story */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-lg leading-relaxed text-content/90"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I've always been curious about how people think, connect, and communicate.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              While studying Deaf Studies and Arts in Health at Columbia College Chicago, I explored how creative expression supports identity, communication, and wellness.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              During my capstone I researched, <span className="text-primary font-semibold">"How can utilizing arts in health decrease language deprivation, communication barriers, and isolation experienced by the Deaf community?"</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              That research led to my final project proposal, <span className="text-secondary font-semibold">Hands On</span>, a web application offering visually expressive, arts-based resources and workshops designed to improve accessibility and connection between Deaf and hearing individuals.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              That experience sparked my interest in developing and designing my own website in order to not have to rely on templates.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-tertiary font-semibold"
            >
              That is when I developed desire to learn how to code in order to create my own programs that make an impact and improve the lives of others.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              After graduating, naturally I wanted to pursue a career in my field. However, job hunting was tough, most positions required years of experience, and I kept getting rejections.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Then I came across a job posting looking for creative experts in their fields to help train AI models. It was an AI prompt engineering role, which I had never heard of before. I figured I could do that part-time and use my skills.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              My desire to learn how to code grew even stronger, and a friend of mine who is a software engineer recommended I start with Python.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-primary font-semibold"
            >
              I later enrolled in a bootcamp and discovered that software development came naturally to me. I picked up concepts quickly and enjoyed every minute of learning and practicing. Software and AI engineering became a true passion. I completed a full-time coding bootcamp first in my cohort.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Whenever I learned something new, I would complete the assignment and then apply what I learned to my own projects.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-secondary font-semibold"
            >
              Within two months of learning to code, I joined hackathons and pair programmed with professionals in the field.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="text-tertiary"
            >
              Outside of tech, I love teaching and playing chess, art journaling, reading, and learning new things.
            </motion.p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 to-tertiary/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-content mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-content/80 mb-6 max-w-2xl mx-auto">
                I'm passionate about creating technology that makes a real difference in people's lives. 
                Whether it's improving accessibility, building AI solutions, or developing innovative applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/aaliyah-johnson-24a5762a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="https://github.com/justliya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-surface border border-white/20 text-content hover:bg-white/10 font-semibold rounded-lg transition-colors"
                >
                  View My Work
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}