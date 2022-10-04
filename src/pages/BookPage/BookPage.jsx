import { useMediaQuery } from "react-responsive";

import GastraWidget from "../../components/GastraWidget/GastraWidget";
import Navigation from "../../components/Navigation/Navigation";

export default function BookPage() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main>
      <GastraWidget />
      {isDesktop && <Navigation navClass="footer-navigation_desktop" />}
    </main>
  );
}
