import Header from "../app/components/common/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-20"> {/* padding to avoid overlap */}
        Home Content
      </div>
    </>
  );
}
