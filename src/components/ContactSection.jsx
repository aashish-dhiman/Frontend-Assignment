import join from "../assets/join.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import ApplyNowButton from "./ApplyNowButton";

const socialLinks = [
    {
        link: "https://www.instagram.com/beauty.airblack",
        icon: instagram,
    },
    {
        link: "https://www.facebook.com/beauty.airblack/",
        icon: facebook,
    },
    {
        link: "https://www.linkedin.com/company/airblack/",
        icon: linkedin,
    },
    {
        link: "https://twitter.com/clubairblack?lang=en",
        icon: twitter,
    },
];

const ContactSection = () => {
    return (
        <section>
            <div className="relative w-full">
                <img src={join} alt="beauty background" className=" w-full" />
                <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-full">
                    <h2 className="text-center text-2xl font-medium font-roco">
                        Join Our Growing <br /> community of <br /> 35000+
                        alumni
                    </h2>

                    {/* Apply Now button */}
                    <div className="px-10 mt-3">
                        <ApplyNowButton />
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-5 mt-5">
                        {socialLinks.map((social, index) => (
                            <a
                                href={social.link}
                                target="_blank"
                                key={index}
                                className="hover:scale-110 transition-transform duration-300 ease-in-out"
                            >
                                <img
                                    src={social.icon}
                                    alt=""
                                    className="size-8"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
