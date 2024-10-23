import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/About";
import Portfolio from "./components/portfolio";

export default function Home() {
  return (
    <>
      <Header></Header>
      <About></About>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </>
  );
}
