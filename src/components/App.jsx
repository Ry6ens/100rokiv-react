import Header from "./Header/Header";
import UserRoutes from "./Routes/UserRoutes";
import Footer from "./Footer/Footer";
import Container from "./Container/Container";

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <UserRoutes />
      </Container>
      <Footer />
    </>
  );
}
