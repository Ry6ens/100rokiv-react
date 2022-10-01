import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import Loader from "../Loader/Loader";

export default function UserRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/100rokiv-react" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}
