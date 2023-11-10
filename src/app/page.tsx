/* eslint-disable @next/next/no-img-element */
import LandingPage from "./home/LandingPage";
import Navbar from "./partials/page"
import Services from "./home/Services";
import Team from "./home/Team";
import Footer from "./home/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="mt-10">
          <LandingPage />
          <Services/>
          <Team/>
          <Footer/>
        </div>
      </div>
    </main>
  );
}
