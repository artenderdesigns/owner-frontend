import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import Reverberations from "../../assets/project1.jpg";
import Metamorphosis from "../../assets/project2.jpg";
import Ephemeral from "../../assets/project3.jpg";
import Dreamscapes from "../../assets/project4.jpg";
import Serenity from "../../assets/project5.jpg";
import Vortex from "../../assets/project6.jpg";

function Work() {
  const slides = [
    {
      src: Reverberations,
      alt: "img1",
      name: "Reverberations",
      description:
        "A series of vibrant, geometric paintings exploring the intersection of nature and modern abstraction through bold shapes.",
    },
    {
      src: Metamorphosis,
      alt: "img2",
      name: "Metamorphosis",
      description:
        "Street art-inspired portraits capturing the raw energy and emotions of city life, blending realism with graffiti elements.",
    },
    {
      src: Ephemeral,
      alt: "img3",
      name: "Ephemeral",
      description:
        "Interactive sculptures made from reflective materials, inviting viewers to engage and reflect on the relationship between space and form.",
    },
    {
      src: Dreamscapes,
      alt: "img4",
      name: "Dreamscapes",
      description:
        "A collection of surreal paintings that blend fantasy and reality, evoking a sense of wonder and imaginative exploration.",
    },
    {
      src: Serenity,
      alt: "img5",
      name: "Serenity",
      description:
        "Textile-based art exploring cultural identity, heritage, and storytelling through intricate weavings and fabric-based installations.",
    },
    {
      src: Vortex,
      alt: "img6",
      name: "Vortex",
      description:
        "A series of dynamic installations where light manipulates shadow, creating evolving art that challenges perception and perspective.",
    },
  ];

  return (
    <>
      <div className="flex justify-center text-white mt-32 mb-10">
        <h1>Our Projects</h1>
      </div>

      {/* Slider Container */}
      <div className="projects-container mb-10 overflow-hidden w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {/* Render the projects dynamically based on currentSlide */}
        {slides.map((project, index) => (
          <div key={index} className="project p-4">
            <div className="image h-64 w-full overflow-hidden rounded-lg shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={project.src}
                alt={project.alt}
              />
            </div>
            <div className="horizontal-line w-full mt-4">
              <hr className="text-white" />
            </div>
            <div className="paragraph mt-4 text-center">
              <h2 className="text-red-600 text-xl">{project.name}</h2>
              <p className="text-white mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>  
    </>
  );
}

export default Work;
