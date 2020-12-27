import Header from "./components/header/Header";
import HeaderRealtors from "./components/realtors/HeaderRealtors.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import FeaturesSection from "./components/features-section/FeaturesSection";
import StoryPictures from "./components/story-pictures/StoryPictures";
import StoryContent from "./components/story-content/StoryContent";
import HomesSection from "./components/homes/HomesSection";
import GallerySection from "./components/gallery/GallerySection.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./App.scss";
//!==========================================================

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Header />
        <HeaderRealtors />
        <FeaturesSection />
        <StoryPictures />
        <StoryContent />
        <HomesSection />
        <GallerySection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
