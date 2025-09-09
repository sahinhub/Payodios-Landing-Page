"use client"

import * as React from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import favicon from "../assets/paydios_logo_white.png"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu"
import { BorderBeam } from "./magicui/border-beam"
import { Button } from "./ui/button"
import { LogInIcon, MenuIcon } from "lucide-react"
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"

export function NavigationMenuDemo() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="fixed top-4 left-4 right-4 z-50 fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="h-14 flex items-center justify-between pr-3 pl-3 glass-effect border border-white/10 rounded-full">
          {/* logo */}
          <NavLink to={"/"}>
            <div className="flex-1 ">
              <img src={favicon} alt="Paydios" className="w-40" />
            </div>
          </NavLink>

          {/* center navigation */}
          <NavigationMenu className="hidden md:inline-flex">
            <NavigationMenuList className="flex items-center gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink >
                  <Link
                    to="/"
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:bg-primary focus:ring-primary/50 shadow-sm border border-transparent text-black hover:border-gray-700 ${isActive("/") ? "bg-primary text-black" : "text-white"}`}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink >
                  <Link
                    to="/features"
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:bg-primary focus:ring-primary/50 shadow-sm border border-transparent text-black hover:border-gray-700 ${isActive("/features") ? "bg-primary text-black" : "text-white"}`}
                  >
                    Features
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink >
                  <Link
                    to="/pricing"
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:bg-primary focus:ring-primary/50 shadow-sm border border-transparent text-black hover:border-gray-700 ${isActive("/pricing") ? "bg-primary text-black" : "text-white"}`}
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink >
                  <Link
                    to="/contact"
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:bg-primary focus:ring-primary/50 shadow-sm border border-transparent text-black hover:border-gray-700 ${isActive("/contact") ? "bg-primary text-black" : "text-white"}`}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* right actions */}


          <div className="flex justify-end gap-2">
            <Button style={{
              borderRadius: '50px'
            }} className="relative overflow-hidden border-gray-700 bg-gray-800 text-lg cursor-pointer" variant="outline" >
              <LogInIcon></LogInIcon>
              Login
              <BorderBeam
                size={60}
                initialOffset={20}
                className="from-transparent via-primary to-transparent"
                transition={{
                  type: "tween",
                  stiffness: 10,
                  damping: 20,
                }}
              />
            </Button>

            {/* mobile menu button */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="md:hidden" size="default"><HiOutlineMenuAlt3 className="text-xl"></HiOutlineMenuAlt3></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-50 mt-2 mr-4" align="start">
                <DropdownMenuItem asChild>
                  <Link
                    to="/"
                    className={`w-full px-2 py-1.5 rounded-md ${isActive("/") ? "bg-primary text-white" : "text-black"
                      }`}
                  >
                    <DropdownMenuLabel>Home</DropdownMenuLabel>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/features"
                    className={`w-full px-2 py-1.5 rounded-md ${isActive("/features") ? "bg-primary text-white" : "text-black"
                      }`}
                  >
                    <DropdownMenuLabel>Features</DropdownMenuLabel>

                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/pricing"
                    className={`w-full px-2 py-1.5 rounded-md ${isActive("/pricing") ? "bg-primary text-white" : "text-black"
                      }`}
                  >
                    <DropdownMenuLabel>Pricing</DropdownMenuLabel>

                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/contact"
                    className={`w-full px-2 py-1.5 rounded-md ${isActive("/contact") ? "bg-primary text-white" : "text-black"
                      }`}
                  >
                    <DropdownMenuLabel>Contact</DropdownMenuLabel>

                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavigationMenuDemo;
