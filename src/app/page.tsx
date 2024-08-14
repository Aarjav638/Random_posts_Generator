import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import { PostSection } from "@/components/PostSection";
import Post from "@/components/Quote";
import Head from "next/head";
export default function Home() {

  return (

    <div className="flex flex-col min-h-screen">

      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PostSection />
        <Post />
      </main>
      <Footer />
    </div>
  );
}
