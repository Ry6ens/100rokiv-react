import { useMediaQuery } from "react-responsive";

import Menu from "../../components/Menu/Menu";
import Navigation from "../../components/Navigation/Navigation";

export default function MenuPage() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      <Menu />
      {isDesktop && <Navigation navClass="footer-navigation_desktop" />}
    </>
  );
}
