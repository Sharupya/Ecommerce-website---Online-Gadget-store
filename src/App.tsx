
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Desktops from "./pages/Desktops";
import Components from "./pages/Components";
import Accessories from "./pages/Accessories";
import Gaming from "./pages/Gaming";
import HotDeals from "./pages/HotDeals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import Returns from "./pages/Returns";
import Warranty from "./pages/Warranty";
import Shipping from "./pages/Shipping";
import Login from "./pages/Login";
import Register from "./pages/Register";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/laptops" element={<ProductListing />} />
          <Route path="/desktops" element={<Desktops />} />
          <Route path="/components" element={<Components />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/deals" element={<HotDeals />} />
          <Route path="/categories" element={<ProductListing />} />
          <Route path="/category/:slug" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support" element={<Support />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
