import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen px-8 md:px-19 sm:px-15 bg-white dark:bg-dark-bg-3">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-gray-900 dark:text-white"
      >
        This is <span className="text-blue-500">Contact</span> page.
      </motion.h1>
    </section>
  );
};

export default Contact;
