import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomePage() {
  const [data, setData] = useState({
    Project_Name: "",
    Project_Location: "",
    Project_Images: [],
    Project_Description: "",
    Category: "",  // Changed to string for easier input handling
    Services: "",
    OnHomePage: false
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    if (type === "file") {
      setData((prevData) => ({
        ...prevData,
        Project_Images: Array.from(files),
      }));
    } else if (type === "checkbox") {
      setData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("Project_Name", data.Project_Name);
      formData.append("Project_Location", data.Project_Location);
      formData.append("Project_Description", data.Project_Description);
      formData.append("Services", data.Services);
      formData.append("OnHomePage", data.OnHomePage ? "true" : "false");

      // Process categories from comma-separated string to array before sending
      if (data.Category) {
        // Split the category string by commas and trim each category
        const categoryArray = data.Category.split(',').map(cat => cat.trim()).filter(cat => cat);

        // Add each category to the formData
        categoryArray.forEach(cat => {
          formData.append("Category", cat);
        });
      }

      // Handle multiple images
      if (data.Project_Images.length > 0) {
        data.Project_Images.forEach((image) => {
          formData.append("Project_Images", image);
        });
      }

      console.log("Submitting form data:", Object.fromEntries(formData));

      const response = await axios.post(
        "https://owner-backend.onrender.com/api/user/newProject",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        toast.success("Project submitted successfully!");
        // Reset form after successful submission
        setData({
          Project_Name: "",
          Project_Location: "",
          Project_Images: [],
          Project_Description: "",
          Category: "",
          Services: "",
          OnHomePage: false
        });
      }
    } catch (error) {
      console.error("Error during project submission:", error);
      toast.error(`Project submission failed: ${error.message || "Please try again"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 p-10">
      <ToastContainer />
      <div className="text-white w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Add Project</h1>
        </div>

        <div className="project-form text-white w-full max-w-lg mx-auto mt-6 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="Project_Name"
                  className="block text-lg font-semibold"
                >
                  Project Name
                </label>
                <input
                  id="Project_Name"
                  name="Project_Name"
                  className="w-full p-3 mt-2 border-2 border-white bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={data.Project_Name}
                  onChange={handleInputChange}
                  type="text"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="Project_Location"
                  className="block text-lg font-semibold"
                >
                  Project Location
                </label>
                <input
                  id="Project_Location"
                  name="Project_Location"
                  className="w-full p-3 mt-2 border-2 border-white bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={data.Project_Location}
                  onChange={handleInputChange}
                  type="text"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="Project_Images"
                  className="block text-lg font-semibold"
                >
                  Project Image
                </label>
                <input
                  id="Project_Images"
                  name="Project_Images"
                  className="w-full p-3 mt-2 border-2 border-white bg-transparent text-white rounded-md file:border-2 file:border-white file:bg-transparent file:text-white file:rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleInputChange}
                  type="file"
                  accept="image/*"
                  multiple
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="Project_Description"
                  className="block text-lg font-semibold"
                >
                  Description
                </label>
                <textarea
                  id="Project_Description"
                  name="Project_Description"
                  className="w-full p-3 mt-2 border-2 border-white bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={data.Project_Description}
                  onChange={handleInputChange}
                  rows="4"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="Category"
                  className="block text-lg font-semibold"
                >
                  Category (separate multiple categories with commas)
                </label>
                <input
                  id="Category"
                  name="Category"
                  className="w-full p-3 mt-2 border-2 border-white bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={data.Category}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="E.g. Print, Install, Space, Murals"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="Services"
                  className="block text-lg font-semibold"
                >
                  Services
                </label>
                <input
                  id="Services"
                  name="Services"
                  className="w-full p-3 mt-2 border-2 border-white bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={data.Services}
                  onChange={handleInputChange}
                  type="text"
                  required
                />
              </div>

              <div className="flex flex-row items-center justify-center">
                <input
                  id="OnHomePage"
                  name="OnHomePage"
                  className="mr-2 w-5 h-5"
                  checked={data.OnHomePage}
                  onChange={handleInputChange}
                  type="checkbox"
                />
                <label
                  htmlFor="OnHomePage"
                  className="text-lg font-semibold text-center"
                >
                  Required On Home Page
                </label>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`w-1/2 py-3 mt-4 font-semibold rounded-md transition duration-200 ${loading
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-inherit border border-white text-white hover:bg-blue-700"
                    }`}
                  disabled={loading}
                >
                  {loading ? "Uploading..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;