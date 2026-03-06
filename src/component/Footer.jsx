import React from "react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-14 pb-6 px-6 md:px-0">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Section */}
        <div className="">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
            {/* Left Info (2 columns) */}
            <div className="lg:col-span-2">
              <h2 className="text-white text-xl font-semibold mb-4">
                CS — Ticket System
              </h2>

              <p className="text-sm leading-relaxed">
                CS — Ticket System is a modern customer support platform
                designed to help teams manage, track, and resolve customer
                issues efficiently. Our system allows support agents to organize
                tickets, monitor task progress, and ensure every customer
                request is handled quickly and professionally.
              </p>
            </div>

            {/* Right Section (4 columns) */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Company */}
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li className="hover:text-white cursor-pointer">About Us</li>
                  <li className="hover:text-white cursor-pointer">
                    Our Mission
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Contact Sales
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li className="hover:text-white cursor-pointer">
                    Products & Services
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Customer Stories
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Download Apps
                  </li>
                </ul>
              </div>

              {/* Information */}
              <div>
                <h3 className="text-white font-semibold mb-4">Information</h3>
                <ul className="space-y-2 text-sm">
                  <li className="hover:text-white cursor-pointer">
                    Privacy Policy
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    Terms & Conditions
                  </li>
                  <li className="hover:text-white cursor-pointer">Join Us</li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-white font-semibold mb-4">Social Links</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">Twitter</li>
                  <li className="flex items-center gap-3">LinkedIn</li>
                  <li className="flex items-center gap-3">Facebook</li>
                  <li className="flex items-center gap-3">support@cst.com</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
            © 2025 CS — Ticket System. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
