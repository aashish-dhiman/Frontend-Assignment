import bgHero from "../assets/bg-hero.png";
import logo from "../assets/logo.png";

const HeroSection = () => {
    return (
        <section>
            <div className="relative">
                <img src={bgHero} alt="beauty background" />
                <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                    <img src={logo} alt="logo" />
                    <span className="uppercase text-[10px] font-medium tracking-[2px] flex items-center justify-center mt-2">
                        presents
                    </span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
