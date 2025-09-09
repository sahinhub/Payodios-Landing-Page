import * as React from "react";
"use client";

import { Link } from "react-router-dom";
import { cn } from "../lib/utils"; // shadcn utility
import { Separator } from "../components/ui/separator";
import logo from '../assets/paydios_logo_white.png';
import appStore from '../assets/app_store.webp';
import playStore from '../assets/google_play.webp'

export default function Footer() {

  return (
   <footer className="sm:px-6 mx-auto px-4">
  <div className=" container  mx-auto relative sm:mt-12 overflow-hidden rounded-t-[20px] bg-primary/10 border-primary/30 border border-b-0 backdrop-blur">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
    </div>
    <div className="relative sm:p-8 pr-6 pb-6 pl-6">
      <div className="grid lg:grid-cols-5 gap-6">
        {/* <!-- Brand / intro --> */}
        <div className="space-y-4 col-span-2">
          <div className="flex flex-col gap-2">  
            <img className="w-40" src={logo} alt="Payodios" />
            <p className="text-base leading-relaxed text-neutral-400">
            Available in any kind of ready version Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, cupiditate itaque.
            <br></br>
            <b className="text-primary">Download App</b>
          </p>
          </div> 
         <div className=" flex flex-wrap gap-2">
           <img className="w-40" src={appStore} alt="Apple Store" />
          <img className="w-40" src={playStore} alt="Play Store" />
         </div>
        </div>

        {/* <!-- Column: Company --> */}
        <div className="">
          <h4 className="text-base tracking-wider text-primary uppercase font-geist">Company</h4>
          <ul className="mt-3 space-y-2">
            <li className=""><a href="#" className="text-sm text-neutral-300 hover:text-white font-geist">About Us</a></li>
            <li className=""><a href="#" className="text-sm text-neutral-300 hover:text-white font-geist">Careers</a></li>
            <li><a href="#" className="text-sm text-neutral-300 hover:text-white font-geist">Terms of Use</a></li>
            <li><a href="#" className="text-sm text-neutral-300 hover:text-white font-geist">Contact Us</a></li>
          </ul>
        </div>

        {/* <!-- Column: Apps/Tools --> */}
        <div className="">
          <h4 className="text-base tracking-wider text-primary uppercase font-geist">Accept Payments</h4>
          <ul className="mt-3 space-y-2">
            <li className=""><a href="#" className="text-sm text-neutral-300 hover:text-white font-geist">Paydios POS</a></li>
            <li className=""><a href="#" className="text-sm text-neutral-300 hover:text-white font-geist">Payment Pages</a></li>
            <li><a href="#" className="text-sm text-neutral-300 hover:text-white font-geist">Payment Links</a></li>
            <li><a href="#" className="text-sm text-neutral-300 hover:text-white font-geist">Payment Gateway</a></li>
          </ul>
        </div>

        {/* <!-- Column: Services --> */}
        <div className="">
          <h4 className="text-base tracking-wider text-primary uppercase font-geist">Banking Plus</h4>
          <ul className="mt-3 space-y-2">
            <li className=""><a href="#" className="text-sm text-neutral-300 hover:text-white font-geist">Smart Collect</a></li>
            <li><a href="#" className="text-sm text-neutral-300 hover:text-white font-geist">Source to pay</a></li>
            <li className=""><a href="#" className="text-sm text-neutral-300 hover:text-white font-geist">Current Accounts</a></li>
            <li className=""><a href="#" className="text-sm text-neutral-300 hover:text-white font-geist">Credit Card</a></li>
          </ul>
        </div>
      </div>

      {/* <!-- Meta / social --> */}
      

      

      {/* <!-- Bottom bar --> */}
      <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-3 md:justify-between">
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-neutral-400 font-geist">
          <a href="#" className="hover:text-neutral-200">Privacy Policy</a>
          <span className="text-neutral-700">|</span>
          <a href="#" className="hover:text-neutral-200">Terms of Use</a>
          <span className="text-neutral-700">|</span>
          <a href="#" className="hover:text-neutral-200">Accessibility</a>
          <span className="text-neutral-700">|</span>
          <a href="#" className="hover:text-neutral-200">DMCA</a>
        </nav>
        <div className="text-sm text-neutral-500 font-geist">© 2025  <a href="/" className="text-primary">Payodios</a>, Inc. All rights reserved.</div>
      </div>
    </div>
  </div>
</footer>
  );
}
