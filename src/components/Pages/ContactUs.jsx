import { React, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function ContactUs() {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://owner-backend.onrender.com/api/user/newUser",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        toast.success(
          "Form submitted successfully, Our team will reach out to you very soon!!!"
        );
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Form submission failed. Please try again.");
    }
  };
  return (
    <>
      <div>
        <div className="text-white">
          <div className="flex justify-center items-center mt-20">
            <h1>
              Contact Us
              <hr className="border-none w-[80%] h-[3px] rounded bg-red-600" />
            </h1>
          </div>
          <div className="mb-20 mt-20 flex justify-center items-center ">
            <div className="contact form flex justify-center w-[60%]">
              <form
                onSubmit={handleSubmit}
                className="w-full lg:w-1/2 space-y-5 px-6 lg:px-0"
              >
                <div className="space-y-2">
                  <input
                    name="Name"
                    value={data.Name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-blue-500 w-full py-2 px-3 rounded-md"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    name="Email"
                    value={data.Email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-blue-500 w-full py-2 px-3 rounded-md"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <textarea
                    name="Message"
                    value={data.Message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    className="bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-blue-500 w-full py-2 px-3 rounded-md"
                    rows="4"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="  text-white mr-20 ">
              <h1 className="text-3xl font-semibold mb-6">Contact Info</h1>

              <div className="space-y-4">
                <div className="flex flex-col space-y-1">
                  <h2 className="text-lg font-medium">Email:</h2>
                  <h3 className="text-xl font-light">dharya@theartender.com</h3>
                </div>

                <div className="flex flex-col space-y-1">
                  <h2 className="text-lg font-medium">Phone:</h2>
                  <h3 className="text-xl font-light">+91 9999195139</h3>
                </div>

                <div className="flex flex-col space-y-1">
                  <h2 className="text-lg font-medium">Address:</h2>
                  <p className="text-xl font-light">
                    The Artender Building No. 252, <br />
                    Second Floor, Near Metro Pillar 119, <br />
                    Ghitorni, New Delhi, Delhi 110030.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//  <p className="text-sm">
//    dharya@theartender.com <br />
//    +91 9999195139 <br />
//    The Artender Building No. 252 , Second Floor ,Near Metro Pillar 119, Ghitorni
//    New Delhi, Delhi 110030.
//  </p>;

export default ContactUs;
