import { GiReceiveMoney } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBuilding, FaBalanceScale } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { CiMemoPad } from "react-icons/ci";

function About() {
    var itemSize = 200;
    if (window.screen.width < 768) {
        itemSize = 100;
    }
    return (
        <div id="about" className="w-screen h-fit text-center mt-10 md:px-20 px-10">
            <h1 className="font-bold text-3xl text-center mt-5">About Us</h1>
            <p className="mt-5">Established In Year 2012, We R.R.Telecommunication Is The Leading Wholesale Trader and Service Provider Of Landline Phone,<br /> Cordless Phone, CCTV Camera And Many More.</p>
            <div className="flex flex-col">
                <div className="flex flex-col lg:flex-row justify-evenly">
                    <div className="flex mt-10 justify-between">
                        <div className="w-60 h-52 lg:h-60 rounded-full p-10 bg-slate-300 flex items-center justify-center">
                            <GiReceiveMoney size={itemSize} />
                        </div>
                        <div className=" flex flex-col items-start justify-center ml-5">
                            <p className="mt-5 lg:text-xl text-lg font-bold">Nature of Business</p>
                            <p className="mt-5 lg:text-xl text-lg">Wholesale Trader</p>
                        </div>
                    </div>

                    <div className="flex lg:ml-10 mt-10 justify-between">
                        <div className="w-60 h-52 lg:h-60 rounded-full p-10 bg-slate-300 flex items-center justify-center">
                            <BsFillPeopleFill size={itemSize} />
                        </div>
                        <div className=" flex flex-col items-start justify-center ml-5">
                            <p className="mt-5 lg:text-xl text-lg font-bold">Total Number of Employees</p>
                            <p className="mt-5 lg:text-xl text-lg">Upto 10 People</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-evenly">
                    <div className="flex mt-10 justify-between">
                        <div className="w-60 h-52 lg:h-60 rounded-full p-10 bg-slate-300 flex items-center justify-center">
                            <FaBuilding size={itemSize} />
                        </div>
                        <div className=" flex flex-col items-start justify-center ml-5">
                            <p className="mt-5 lg:text-xl text-lg font-bold">Year of Establishment</p>
                            <p className="mt-5 lg:text-xl text-lg">2012</p>
                        </div>
                    </div>

                    <div className="flex lg:ml-10 mt-10 justify-between">
                        <div className="w-60 h-52 lg:h-60 rounded-full p-10 bg-slate-300 flex items-center justify-center">
                            <FaBalanceScale size={itemSize} />
                        </div>
                        <div className=" flex flex-col items-start justify-center ml-5">
                            <p className="mt-5 lg:text-xl text-lg font-bold">Legal Status of Firm</p>
                            <p className="mt-5 lg:text-xl text-lg">Individual - Proprietor</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-evenly">
                    <div className="flex mt-10 justify-between">
                        <div className="w-60 h-52 lg:h-60 rounded-full p-10 bg-slate-300 flex items-center justify-center">
                            <AiOutlineStock size={itemSize} />
                        </div>
                        <div className=" flex flex-col items-start justify-center ml-5">
                            <p className="mt-5 lg:text-xl text-lg font-bold">Annual Turnover</p>
                            <p className="mt-5 lg:text-xl text-lg">Rs. 1 Crore 50 Lakh</p>
                        </div>
                    </div>

                    <div className="flex lg:ml-10 mt-10 justify-between">
                        <div className="w-60 h-52 lg:h-60 rounded-full p-10 bg-slate-300 flex items-center justify-center">
                            <CiMemoPad size={itemSize} />
                        </div>
                        <div className=" flex flex-col items-start justify-center ml-5">
                            <p className="mt-5 lg:text-xl text-lg font-bold">GST Number</p>
                            <p className="mt-5 lg:text-xl text-sm">27AGXPD6985C1ZV</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

