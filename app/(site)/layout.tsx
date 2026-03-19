import { CartProvider } from "@/components/cart/CartContext";
import CartSidebar from "@/components/cart/CartSidebar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <Header />
      <CartSidebar />
      <main>{children}</main>
      <Footer />
    </CartProvider>
  );
}
