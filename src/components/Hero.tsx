import { motion } from "framer-motion";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import GoogleScholarIcon from "./icons/GoogleScholarIcon";
import InstagramIcon from "./icons/InstagramIcon";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen px-8 md:px-19 sm:px-15 bg-white dark:bg-dark-bg-3">
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
        <div className="flex items-center">
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
        </div>
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
      <div className="mt-4 flex items-center justify-center gap-x-6 sm:hidden">
        {/* GitHub icon dark and light mode */}
        <motion.a
          href="https://github.com/yo-resistor"
          target="_blank"
          rel="noopener noreferrer"
          className="fill-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <GitHubIcon />
        </motion.a>
        {/* LinkedIn icon dark and light mode */}
        <motion.a
          href="https://www.linkedin.com/in/yohm/"
          target="_blank"
          rel="noopener noreferrer"
          className="fill-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <LinkedInIcon />
        </motion.a>
        {/* Google scholar icon dark and light mode */}
        <motion.a
          href="https://scholar.google.com/citations?user=MdnAj8IAAAAJ&hl=en&oi=ao"
          target="_blank"
          rel="noopener noreferrer"
          className="fill-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <GoogleScholarIcon />
        </motion.a>
        {/* Instagram icon dark and light mode */}
        <motion.a
          href="https://www.instagram.com/yunsik_ohm/"
          target="_blank"
          rel="noopener noreferrer"
          className="fill-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <InstagramIcon />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
