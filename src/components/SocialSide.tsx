import GitHubIcon from "./icons/GitHubIcon";
import GoogleScholarIcon from "./icons/GoogleScholarIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const SocialSide = () => {
  return (
    // Left side bar: Email
    <div className="fixed bottom-0 left-3 origin-bottom-left flex flex-col items-center gap-5 max-sm:hidden">
      <div className="flex flex-col items-center gap-4">
        {/* GitHub icon dark and light mode */}
        <a
          href="https://github.com/yo-resistor"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <GitHubIcon />
        </a>
        {/* LinkedIn icon dark and light mode */}
        <a
          href="https://www.linkedin.com/in/yohm/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <LinkedInIcon />
        </a>
        {/* Google scholar icon dark and light mode */}
        <a
          href="https://scholar.google.com/citations?user=MdnAj8IAAAAJ&hl=en&oi=ao"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <GoogleScholarIcon />
        </a>
        {/* Instagram icon dark and light mode */}
        <a
          href="https://www.instagram.com/yunsik_ohm/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <InstagramIcon />
        </a>
        {/* Twitter icon dark and light mode */}
      </div>
      {/* Virtical line */}
      <div className="w-0.5 h-24 bg-gray-600 dark:bg-gray-300 text-sm font-medium tracking-widest hover:text-blue-500 transition rounded-md"></div>
    </div>
  );
};

export default SocialSide;

// TODO: twitter or thread?
// TODO: how the browser makes icon dark/light: https://stackoverflow.com/questions/67187091/creating-svg-that-appears-black-in-light-mode-and-light-in-dark-mode
// TODO: fix hover effect on each icon
