"use client"

import * as React from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import favicon from "../assets/paydios_logo_white.png"
import '../index.css'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu"
import { BorderBeam } from "./magicui/border-beam"
import { Button } from "./ui/button"
import { LogIn, LogInIcon, MenuIcon } from "lucide-react"
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { ShimmerButton } from "./magicui/shimmer-button"

export function NavigationMenuDemo() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="relative ">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-600/40 via-sky-500/30 to-cyan-400/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-600/30 via-purple-600/20 to-sky-500/20 blur-3xl"></div>
      </div>
      {/* navigation */}
      <header className="  fixed   container mx-auto fade-in top-2 left-0 right-0 z-50 bg-transparent backdrop-blur-md ">
        <div className="mx-auto">
          <div className="h-14 flex items-center justify-between pr-3 pl-3 glass-effect border border-white/20 rounded-full">
            {/* logo */}
            <NavLink to={"/"}>
              <div className="flex-1 ">
                <img src={favicon} alt="Paydios" className="w-40 z-10" />
              </div>
            </NavLink>

            {/* center navigation */}
            <NavigationMenu className="hidden md:inline-flex">
              <NavigationMenuList className="flex items-center gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <NavLink
                      to="/"
                      className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${isActive("/") && 'text-primary'} `}
                    >
                      Home
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild >
                    <NavLink
                      to="/features"
                      className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${isActive("/features") && 'text-primary'} `}
                    >
                      Features
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild >
                    <NavLink
                      to="/pricing"
                      className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${isActive("/pricing") && 'text-primary'} `}
                    >
                      Pricing
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild >
                    <NavLink
                      to="/contact"
                      className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${isActive("/contact") && 'text-primary'} `}
                    >
                      Contact
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* right actions */}


            <div className="flex  gap-3">
              <ShimmerButton className="shadow-2xl">
                <button className="whitespace-pre-wrap flex text-center text-sm leading-none tracking-tight text-white lg:text-lg">
                <LogIn size={20}></LogIn> Login
                </button>
              </ShimmerButton>

              {/* mobile menu button */}
              <DropdownMenu>
                <DropdownMenuTrigger className="md:hidden cursor-pointer"><HiOutlineMenuAlt3 className="text-2xl"></HiOutlineMenuAlt3></DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[250px] mr-5">
                  <DropdownMenuItem><NavLink className={'w-full'} to={'/'}>Home</NavLink></DropdownMenuItem>
                  <DropdownMenuItem><NavLink className={'w-full'} to={'/features'}>Features</NavLink></DropdownMenuItem>
                  <DropdownMenuItem><NavLink className={'w-full'} to={'/pricing'}>Pricing</NavLink></DropdownMenuItem>
                  <DropdownMenuItem><NavLink className={'w-full'} to={'/contact'}>Contact</NavLink></DropdownMenuItem>

                </DropdownMenuContent>
              </DropdownMenu>

            </div>
          </div>
        </div>
      </header>
    </div>


  )
}

export default NavigationMenuDemo;
