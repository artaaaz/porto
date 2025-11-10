import ThreeGallery from "../components/ThreeGallery";
import HeroSection from "../components/HeroSection";
import Galaxy from "../components/Galaxy";

const Home = () => {
  return (
   <div className="bg-black text-white">
      <div className="w-full h-screen">
        <ThreeGallery />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <HeroSection />
      </div>
    </div>
  );
};

<section>
  <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Galaxy />
</div>

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Galaxy 
    mouseRepulsion={true}
    mouseInteraction={true}
    density={1.5}
    glowIntensity={0.5}
    saturation={0.8}
    hueShift={240}
  />
</div>
</section>
    

export default Home;
