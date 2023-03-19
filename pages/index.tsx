import CategoryNews from "@/components/CategoryNews";
import TopStory from "@/components/TopStory";

export default function Home() {
  return (
    <div className="container">
      <main className="main__wrapper">
        <TopStory />
        <CategoryNews hasTitle={true} />
      </main>
    </div>
  );
}
