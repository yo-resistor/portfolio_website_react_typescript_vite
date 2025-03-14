import { motion } from "framer-motion";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import GoogleScholarIcon from "./icons/GoogleScholarIcon";
import InstagramIcon from "./icons/InstagramIcon";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen px-10 md:px-40 sm:px-20 bg-white dark:bg-dark-bg-3">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 font-mono text-base text-gray-700 dark:text-gray-300"
      >
        Hi, my name is
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-4 text-5xl font-bold text-gray-900 dark:text-white"
      >
        <span className="text-blue-500">Yunsik Ohm</span>
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-mono mb-6 text-4xl font-bold text-gray-900 dark:text-white"
      >
        <div>Programmer</div>
        <div>Engineer</div>
        <div>Writer</div>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-[300px]:hidden mb-6 text-base text-gray-700 dark:text-gray-300 w-8/9 sm:w-7/9 md:w-6/9 lg:w-5/9"
      >
        I’m passionate about applying machine learning to real-world problems.
        Currently, I’m developing a framework to optimize material composition
        for wearable technologies.
      </motion.p>
      {/* <div className="mt-4 flex items-center justify-center gap-x-6">
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
      </div> */}
      <div className="flex items-center gap-x-6 max-[500px]:gap-x-4 sm:hidden">
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
