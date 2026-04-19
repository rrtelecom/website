
import IOB from "../assets/IOB.jpeg";
import WHP from "../assets/WAMANHARIPETHEJWLS.png";
import MP from "../assets/MumbaiPolice.png";

function Clients() {

    return (
        <div id="about" className="w-screen h-fit text-center mt-10 md:px-20 px-10">
            <h1 className="font-bold text-3xl text-center mt-5">Our Clients</h1>
            <p className="mt-5">Our Regular Clients Who Trusted Us</p>
            <div className="flex flex-col">
                <div className="flex flex-col lg:flex-row justify-evenly">
                    <div className="flex mt-10 justify-center">
                        <img src={IOB} alt="IOB" className="w-52 h-52 rounded-full" />
                    </div>

                    <div className="flex lg:ml-10 mt-10 justify-center">
                        <img src={MP} alt="IOB" className="w-52 h-52 bg-white rounded-xl" />
                    </div>

                    <div className="flex lg:ml-10 mt-10 justify-center">
                        <img src={WHP} alt="IOB" className="w-80 h-52 bg-white rounded-lg" />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Clients;

