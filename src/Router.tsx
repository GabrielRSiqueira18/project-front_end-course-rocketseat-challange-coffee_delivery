import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { CheckoutFilled } from "./pages/CheckoutFilled";
import { useEffect } from "react";

export function Router() {
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate("/");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-filled" element={<CheckoutFilled />} />
      </Route>
    </Routes>
  )
}