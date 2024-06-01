import { BiBookmark } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { MdDone } from "react-icons/md";

const FormSection = () => {
    return (
        <section className="bg-[#0f1014] py-5 px-6">
            <div className="">
                <h1 className="text-2xl font-medium font-roco tracking-wide leading-7">
                    Professional Online <br /> Makeup Course
                </h1>
                <div className="flex items-center gap-3 mt-2">
                    <div className="rounded-md tracking-tighter bg-zinc-800 text-white/70 text-xs py-1 px-2 flex items-center gap-x-1">
                        <BiBookmark className="text-purple-400" /> Certification
                        Programme
                    </div>
                    <div className="text-yellow-400 flex items-center gap-1 justify-center leading-3">
                        <BsFillStarFill className="text-yellow-400" /> Rated
                        4.85/5
                    </div>
                </div>
                <div className="mt-2 flex flex-col items-start gap-y-2">
                    <span className="flex items-center gap-x-2">
                        <MdDone /> India&apos;s No.1 Online Makeup Course
                    </span>
                    <span className="flex items-center gap-x-2">
                        <MdDone /> Learn by LIVE Do-it-Together Classes
                    </span>
                    <span className="flex items-center gap-x-2">
                        <MdDone /> Unlimited Practice Sessions to master skills
                    </span>
                </div>

                {/* Form  */}
                <div className="mt-6 rounded-md overflow-hidden">
                    <div className="text-center py-1.5 text-[11px] bg-pink-600/90 font-bold uppercase text-white ">
                        Fill The Form Below To Enquire
                    </div>
                    <form className="flex flex-col gap-2 p-3 bg-white text-black/70 ">
                        <div className="flex flex-col gap-y-1.5">
                            <label htmlFor="name" className="font-medium">
                                *Enter your name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Eg. Aneesha Mehra"
                                className="px-2 py-1 rounded-sm border"
                            />
                        </div>
                        <div className="flex flex-col gap-y-1.5">
                            <label htmlFor="mobile" className="font-medium">
                                *Enter your WhatsApp Number
                            </label>
                            <div className="flex items-center gap-2">
                                <select
                                    name="country-code"
                                    id="country"
                                    className="px-2 py-1 rounded-sm border"
                                >
                                    <option value="+91">+91</option>
                                    <option value="+92">+92</option>
                                    <option value="+93">+93</option>
                                    <option value="+94">+94</option>
                                    <option value="+95">+95</option>
                                </select>
                                <input
                                    type="text"
                                    id="mobile"
                                    placeholder="Eg. 0000000000"
                                    className="px-2 py-1 rounded-sm border flex-1"
                                />
                            </div>
                        </div>
                        {/* Profession */}
                        <div className="flex flex-col gap-y-1.5">
                            <label htmlFor="profession" className="font-medium">
                                *Select your profession
                            </label>
                            <select
                                name="country-code"
                                id="country"
                                className="px-2 py-1 rounded-sm border text-black/40"
                            >
                                <option
                                    value="Select Profession"
                                    disabled
                                    selected
                                >
                                    Choose the most relevant option
                                </option>
                                <option value="Software Developer">
                                    Software Developer
                                </option>
                                <option value="Product Analyst">
                                    Product Analyst
                                </option>
                                <option value="Manager">Manager</option>
                                <option value="Founder">Founder</option>
                            </select>
                        </div>

                        {/* Goal */}
                        <div className="flex flex-col gap-y-1.5">
                            <label htmlFor="goals" className="font-medium">
                                *Select your goal
                            </label>
                            <select
                                name="goals"
                                id="goals"
                                className="px-2 py-1 rounded-sm border text-black/40"
                            >
                                <option value="Select goals" disabled selected>
                                    Choose the most relevant option
                                </option>
                                <option value="personal_enhancement">
                                    Personal Enhancement
                                </option>
                                <option value="professional_development">
                                    Professional Development
                                </option>
                                <option value="career_change">
                                    Career Change
                                </option>
                                <option value="start_own_business">
                                    Start Own Business
                                </option>
                                <option value="skill_upgrade">
                                    Skill Upgrade
                                </option>
                            </select>
                        </div>
                        {/* City */}
                        <div className="flex flex-col gap-y-1.5">
                            <label htmlFor="city" className="font-medium">
                                *Select your city
                            </label>
                            <select
                                name="city"
                                id="city"
                                className="px-2 py-1 rounded-sm border text-black/40"
                            >
                                <option value="Select city" disabled selected>
                                    Choose the most relevant option
                                </option>
                                <option value="mumbai">Mumbai</option>
                                <option value="delhi">Delhi</option>
                                <option value="bangalore">Bangalore</option>
                                <option value="hyderabad">Hyderabad</option>
                                <option value="chennai">Chennai</option>
                                <option value="kolkata">Kolkata</option>
                                <option value="pune">Pune</option>
                                <option value="ahmedabad">Ahmedabad</option>
                                <option value="jaipur">Jaipur</option>
                                <option value="lucknow">Lucknow</option>
                            </select>
                        </div>

                        <button className="mt-3 bg-gradient-to-r from-red-400 to-pink-600 hover:from-pink-600 hover:to-red-400  py-2 rounded-md text-sm text-white font-medium">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FormSection;
