import './App.css';
import './i18n';
import 'swiper/css';
import 'swiper/css/scrollbar';
import {
  Advantages,
  FAQ,
  Feedback,
  Footer,
  Hero,
  Introduce,
  MyServices,
  Packages,
  ReadyToGrow,
  TikTokIs,
} from '@/sections';

function App() {
  return (
    <>
      <Hero />
      <Introduce />
      <TikTokIs />
      <Packages />
      <MyServices />
      <Advantages />
      <Feedback />
      <FAQ />
      <ReadyToGrow />
      <Footer />
    </>
  );
}

export default App;
