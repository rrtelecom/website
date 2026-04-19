import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

function ContactUs() {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", import.meta.env.VITE_MAIL_API_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.currentTarget.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contact" className="py-20 flex flex-col lg:flex-row justify-between">
            <div className="w-2/3 max-w-md mx-auto">
                <h2 className="text-2xl font-semibold mb-4">For Enquiry Contact Us</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                            rows={4}
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                        Submit
                    </button>
                    {result && <span className="block mt-4 text-sm text-gray-600">{result}</span>}
                </form>
            </div>

            <div className="lg:w-1/3 lg:mr-20 lg:ml-0 flex flex-col justify-center ml-10 mr-10 mt-10">
                <h1 className="text-2xl font-bold">Reach Us At</h1>
                <h2 className="flex text-xl"> <FaLocationDot className="mr-3" size={25} />  4th Floor, 406, Raj Chamber, Manchu Bhai Road, Malad East, Mumbai Subrban, Maharashtra, Pin Code - 400097</h2>
                <span className="flex text-xl"> <IoPersonCircle className="mr-3" size={20} /> Rohidas Dalvi (CEO)</span>
                <a href="Phone: 8452855328"><span className="flex text-xl"> <FaPhone className="mr-3" size={15} />Call: 8452855328</span></a>
                <a href="Phone: 9869774328"><span className="flex text-xl"> <FaPhone className="mr-3" size={15} />Call: 9869774328</span></a>
                <a href="Email: contact@rrtelecommunications.com"><span className="flex text-xl"> <MdAlternateEmail className="mr-3" size={15} />Email:  contact@rrtelecommunications.com</span></a>
            </div>
        </div>
    );
}

export default ContactUs;
