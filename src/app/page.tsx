import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import QuoteModal from "@/components/QuoteModal";
import { QuoteSection } from "@/components/QuoteSection";
import Quote from "@/components/Quote";
export default function Home() {

  return (

    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <QuoteSection />
        {/* <Quote /> */}
      </main>
      <Footer />
    </div>
  );
}
