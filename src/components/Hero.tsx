import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-center px-6 bg-white dark:bg-dark-bg-3">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-gray-900 dark:text-white"
      >
        Hi, I’m <span className="text-blue-500">Yunsik Ohm</span>.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-lg text-gray-700 dark:text-gray-300"
      >
        I build modern web applications.
      </motion.p>
      <div className="mt-4 flex items-center justify-center gap-x-6">
        <motion.a
          href="/projects"
          className="text-sm font-semibold rounded-md bg-blue-500 px-4 py-2 text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          View Projects
        </motion.a>
        <motion.a
          href="/contact"
          className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          Contact Me →
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
