import githubDark from "../assets/github-dark.svg";
import githubLight from "../assets/github-light.svg";
import linkedinDark from "../assets/linkedin-dark.svg";
import linkedinLight from "../assets/linkedin-light.svg";

const SocialSide = () => {
  return (
    // Left side bar: Email
    <div className="fixed bottom-0 left-3 origin-bottom-left flex flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-4">
        {/* GitHub icon dark and light mode */}
        <a
          href="https://github.com/yo-resistor"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <img
            src={githubDark}
            alt="GitHub"
            className="hidden dark:block w-6 h-6"
          />
          <img
            src={githubLight}
            alt="GitHub"
            className="block dark:hidden w-6 h-6"
          />
        </a>
        {/* LinkedIn icon dark and light mode */}
        <a
          href="https://www.linkedin.com/in/yohm/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <img
            src={linkedinDark}
            alt="LinkedIn"
            className="hidden dark:block w-6 h-6"
          />
          <img
            src={linkedinLight}
            alt="LinkedIn"
            className="block dark:hidden w-6 h-6"
          />
        </a>
        {/* Google scholar icon dark and light mode */}
        {/* Instagram icon dark and light mode */}
        {/* Twitter icon dark and light mode */}
        <a
          href="https://www.linkedin.com/in/yohm/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <img
            src={linkedinDark}
            alt="LinkedIn"
            className="hidden dark:block w-6 h-6"
          />
          <img
            src={linkedinLight}
            alt="LinkedIn"
            className="block dark:hidden w-6 h-6"
          />
        </a>
      </div>
      {/* Virtical line */}
      <div className="w-0.5 h-24 bg-gray-600 dark:bg-gray-300 text-sm font-medium tracking-widest hover:text-blue-500 transition rounded-md"></div>
    </div>
  );
};

export default SocialSide;

// TODO: google scholar dark mode svg
// TODO: instagram light mode svg
// TODO: instagram dark mode svg
// TODO: Maybe I need to learn how to create he dark mode svg based on the light mode
// TODO: twitter or thread?
// TODO: how the browser makes icon dark/light: https://stackoverflow.com/questions/67187091/creating-svg-that-appears-black-in-light-mode-and-light-in-dark-mode
