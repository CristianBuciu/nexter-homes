import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import FeaturesSection from "./components/features-section/FeaturesSection";
import StorySection from "./components/story/StorySection";
import HomesSection from "./components/homes/HomesSection";
import GallerySection from "./components/gallery/GallerySection.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./App.scss";
//!==========================================================

function App() {
  return (
    <>
      <Sidebar />
      <div className="container">
        <Header />
        <FeaturesSection />
        <StorySection />
        <HomesSection />
        <GallerySection />
        <Footer />
      </div>
    </>
  );
}

export default App;
