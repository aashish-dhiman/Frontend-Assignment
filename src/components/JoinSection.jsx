import join from "../assets/join.png";
import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import { BiVideoRecording } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import ApplyNowButton from "./ApplyNowButton";

const JoinSection = () => {
    return (
        <section>
            <div className="relative w-full">
                <img src={join} alt="beauty background" className=" w-full" />
                <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-full">
                    <div className="relative">
                        <h2 className="text-center text-2xl font-medium font-roco ">
                            Why Should You <br /> Join Airblack?
                        </h2>
                        <div className="absolute top-7 left-3">
                            <img src={arrowLeft} alt="" />
                        </div>
                        <div className="absolute top-7 right-3">
                            <img src={arrowRight} alt="" />
                        </div>
                    </div>

                    {/* Key Points */}
                    <div className="flex items-center justify-between text-center px-6 mt-8 font-medium">
                        <div className="flex flex-col items-center gap-2 flex-1">
                            <span className="p-2 rounded-full bg-pink-600">
                                <BiVideoRecording className="size-6" />
                            </span>
                            <span>
                                Do-it-together, <br /> live in zoom
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 flex-1">
                            <span className="p-2 rounded-full bg-pink-600">
                                <BsStarFill className="size-6" />
                            </span>
                            <span>
                                4.8/5 <br />
                                Rated Classes
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 flex-1">
                            <span className="p-2 rounded-full bg-pink-600">
                                <GrGroup className="size-6" />
                            </span>
                            <span>
                                35000+ <br /> Members
                            </span>
                        </div>
                    </div>

                    {/* Apply Now button */}
                    <div className="px-5 mt-4">
                        <ApplyNowButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinSection;
