import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import certificate from "../assets/certificate.png";

const Certification = () => {
    return (
        <section className="my-7">
            <div className="w-full">
                <div className="relative">
                    <h2 className="text-center text-2xl font-medium font-roco ">
                        Get Certified From <br /> India&apos;s Biggest <br />{" "}
                        Beauty Platform
                    </h2>
                    <div className="absolute top-12 left-3">
                        <img src={arrowLeft} alt="" />
                    </div>
                    <div className="absolute top-12 right-3">
                        <img src={arrowRight} alt="" />
                    </div>
                </div>

                <img
                    src={certificate}
                    alt="certificate"
                    className=" w-full mt-4"
                />
            </div>
        </section>
    );
};

export default Certification;
