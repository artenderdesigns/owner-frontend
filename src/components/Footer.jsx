import React from "react";
import logo from "../assets/logo_black.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="w-full">
            <img className="w-3/4 h-2/3" src={logo} alt="" />{" "}
            <p className="text-lg w-3/4">
              Our love for art has inspired us to be more creative, innovative
              and make things that set us apart. We are The Artender.
            </p>
          </div>

          {/* Our Company Section */}
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-2">Our Company</h2>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Our Work</li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-2">Get In Touch</h2>
            <ul className="space-y-2">
              <a href="https://www.facebook.com/theart">
                {" "}
                <li>Facebook</li>
              </a>
              <a href="https://in.linkedin.com/">
                {" "}
                <li>LinkedIn</li>
              </a>
              <a href="https://www.instagram.com/theartender/">
                <li>Instagram</li>
              </a>
              <a href="https://x.com/?lang=en">
                <li>Twitter</li>
              </a>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
            <p className="text-sm">
              dharya@theartender.com <br />
              +91 9999195139 <br />
              The Artender Building No. 252 , Second Floor ,Near Metro Pillar
              119, Ghitorni New Delhi, Delhi 110030.
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm">© 2017 Artender. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
