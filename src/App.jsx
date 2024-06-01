import Certification from "./components/Certification";
import ContactSection from "./components/ContactSection";
import FormSection from "./components/FormSection";
import HeroSection from "./components/HeroSection";
import JoinSection from "./components/JoinSection";

function App() {
    return (
        <main className="bg-white sm:py-10">
            <div className="bg-black text-white/80 text-xs max-w-[375px] mx-auto border border-yellow-500">
                {/* hero section */}
                <HeroSection />

                {/* content section */}
                <FormSection />

                {/* join section */}
                <JoinSection />

                {/* Certification */}
                <Certification />

                {/* Contact */}
                <ContactSection />
            </div>
        </main>
    );
}

export default App;
