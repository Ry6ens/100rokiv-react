import { useMediaQuery } from "react-responsive";

import Home from "../../components/Home/Home";
import Navigation from "../../components/Navigation/Navigation";

const HomePage = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main>
      <Home />
      {isDesktop && <Navigation navClass="footer-navigation_desktop" />}
    </main>
  );
};

export default HomePage;
