import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Work() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 50 },
    enter: { opacity: 1, x: 0, y: 0 }
  }

  return (
    <>
      <Header />
      <div>
        test
      </div>
      <Footer />
    </>
  );
}