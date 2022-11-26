import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// MUI
import { ThemeProvider } from "@mui/material";
import { theme } from "./frontEnd/mui/theme";
// Components
import { Products } from "./frontEnd/components/Products";
import ProductDetail from "./frontEnd/components/Product/ProductDetail";

function AppContainer() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Navigate to="products" />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
      <ToastContainer position="top-left" autoClose={3000} theme="dark" />
    </ThemeProvider>
  );
}

export default AppContainer;
