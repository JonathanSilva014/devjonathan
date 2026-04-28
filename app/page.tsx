import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { Contact } from "@/components/ui/Contact";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CookieConsent />
      <Contact />
      <Footer />
    </>
  );
}