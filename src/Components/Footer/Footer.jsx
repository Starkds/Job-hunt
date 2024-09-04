import React from 'react';
import CareerHub from '../../assets/All Images/CareerHub.png'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer aria-label="Site Footer" className=" bg-slate-200 font-medium rounded-t-3xl">
                <div
                    className="max-w-screen-xl px-4 py-8 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:p-12 ">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
                        <div> 
                            <p className='text-5xl custom-text'>Job Hunt</p>
                            {/* <img src={CareerHub} alt="" srcset="" /> */}
                            <p className="max-w-xs mt-4 text-gray-500 text-start">
                                There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                            </p>

                            <ul className="flex gap-6 mt-8 justify-center md:justify-start">
                                <li>
                                    <a
                                        href="/https://github.com/Starkds"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-80"
                                    >
                                        <span className="sr-only">Github</span>

                                       < FaGithubSquare/>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/https://www.instagram.com/patidarpawan110/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span className="sr-only">Instagram</span>

                                      <FaInstagram/>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/https://www.linkedin.com/in/pawanpatidar110/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700  transition hover:opacity-75"
                                    >
                                        <span className="sr-only ">LinkedIn</span>

                                       <FaLinkedin />
                                    </a>
                                </li>

                               
                            </ul>
                        </div>

                        <div
                            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
                        >
                            <div>
                                <p className="font-medium text-gray-900">Services</p>
                                <nav aria-label="Footer Navigation - Services" className="mt-6 ">
                                    <ul className="space-y-4 text-sm ">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Company Review
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Accounts Review
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                HR Consulting
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                SEO Optimisation
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">Company</p>

                                <nav aria-label="Footer Navigation - Company" className="mt-6">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                About
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Meet the Team
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Accounts Review
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">Helpful Links</p>

                                <nav aria-label="Footer Navigation - Company" className="mt-6">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Contact
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                FAQs
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Live Chat
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">Legal</p>

                                <nav aria-label="Footer Navigation - Legal" className="mt-6">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Accessibility
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Returns Policy
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Refund Policy
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-gray-700 transition hover:opacity-75">
                                                Hiring Statistics
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <p className="font-bold text-gray-500 text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent italic">
                        &copy; 2024. Job Hunt. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;