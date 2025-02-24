const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Welcome to My Portfolio
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          I’m a software engineer passionate about building modern web
          applications.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#projects"
            className="rounded-md bg-blue-600 px-4 py-2 text-white"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Contact Me →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
