import Header from "./Header/Header";
import UserRoutes from "./Routes/UserRoutes";
import Footer from "./Footer/Footer";
import Container from "./Container/Container";
import TopLine from "./TopLine/TopLine";

export default function App() {
  return (
    <>
      <TopLine>
        <Container>
          <Header />
          <UserRoutes />
          <Footer />
        </Container>
      </TopLine>
    </>
  );
}
