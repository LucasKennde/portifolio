import { WalkingCharacter } from "./components/character/WalkingCharacter";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { SectionCarousel } from "./components/layout/SectionCarousel";
import { NavigationProvider } from "./context/NavigationProvider";

function App() {
  return (
    <NavigationProvider>
      <div className="flex min-h-screen w-full animate-gradient flex-col items-center justify-between bg-[length:800%_800%] [background-image:linear-gradient(45deg,var(--color-surface-1),var(--color-surface-2),var(--color-surface-3),var(--color-surface-4))]">
        <Header />
        <WalkingCharacter />
        <SectionCarousel />
        <Footer />
      </div>
    </NavigationProvider>
  );
}

export default App;
