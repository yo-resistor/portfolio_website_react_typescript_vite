// Main app wrapper
import Hero from "./components/Hero";
import EmailSide from "./components/EmailSide";
import SocialSide from "./components/SocialSide";

const App = () => {
  return (
    <div>
      <Hero />
      <EmailSide />
      <SocialSide />
    </div>
  );
};

export default App;
