import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "../Loader/Loader";

// import HomePage from "../../pages/HomePage";
// import BookPage from "../../pages/BookPage";
// import MenuPage from "../../pages/MenuPage";
// import DeliveryPage from "../../pages/DeliveryPage";
// import GiftVouchersPage from "../../pages/GiftVouchersPage";
// import WhatsOnPage from "../../pages/WhatsOnPage";
// import FoundersPage from "../../pages/FoundersPage";
// import ContactUsPage from "../../pages/ContactUsPage";
// import PrivacyPolicyPage from "../../pages/PrivacyPolicyPage";
// import PublicOfferPage from "../../pages/PublicOfferPage";
// import NotFoundPage from "../../pages/NotFoundPage";

const HomePage = lazy(() => import("../../pages/HomePage"));
const BookPage = lazy(() => import("../../pages/BookPage"));
const MenuPage = lazy(() => import("../../pages/MenuPage"));
const DeliveryPage = lazy(() => import("../../pages/DeliveryPage"));
const GiftVouchersPage = lazy(() => import("../../pages/GiftVouchersPage"));
const WhatsOnPage = lazy(() => import("../../pages/WhatsOnPage"));
const FoundersPage = lazy(() => import("../../pages/FoundersPage"));
const ContactUsPage = lazy(() => import("../../pages/ContactUsPage"));
const PrivacyPolicyPage = lazy(() => import("../../pages/PrivacyPolicyPage"));
const PublicOfferPage = lazy(() => import("../../pages/PublicOfferPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const GroundPage = lazy(() => import("../../pages/GroundPage"));
const AbovePage = lazy(() => import("../../pages/AbovePage"));
const RedRoomPage = lazy(() => import("../../pages/RedRoomPage"));

export default function UserRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/gift-vouchers" element={<GiftVouchersPage />} />
        <Route path="/whats-on" element={<WhatsOnPage />} />
        <Route path="/founders" element={<FoundersPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/public-offer" element={<PublicOfferPage />} />
        <Route path="/ground" element={<GroundPage />} />
        <Route path="/above" element={<AbovePage />} />
        <Route path="/redroom" element={<RedRoomPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
