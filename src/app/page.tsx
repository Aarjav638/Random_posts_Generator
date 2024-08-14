import HeroSection from "@/components/HeroSection";
import { PostSection } from "@/components/PostSection";
import Post from "@/components/Quote";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <PostSection />
        <Post />
      </main>
    </div>
  );
}
