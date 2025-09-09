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

export function NavigationMenuDemo() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path

  return (
   <div>
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -top-16 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-600/40 via-sky-500/30 to-cyan-400/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-600/30 via-purple-600/20 to-sky-500/20 blur-3xl"></div>
    </div>
    {/* navigation */}
      <header className=" pt-4 container mx-auto z-50 fade-in ">
      <div className="mx-auto">
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
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${isActive("/") && 'text-primary'} focus:outline-none focus:ring-primary/50 shadow-sm `}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink >
                  <Link
                    to="/features"
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${isActive("/features") && 'text-primary'} focus:outline-none focus:ring-primary/50 shadow-sm `}
                  >
                    Features
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink >
                  <Link
                    to="/pricing"
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${isActive("/pricing") && 'text-primary'} focus:outline-none focus:ring-primary/50 shadow-sm `}
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink >
                  <Link
                    to="/contact"
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${isActive("/contact") && 'text-primary'} focus:outline-none focus:ring-primary/50 shadow-sm `}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* right actions */}


          <div className="flex justify-end gap-3">
            <Button className="relative overflow-hidden cursor-pointer text-black" variant="default" size="lg">
              <LogIn></LogIn>
              Login
              <BorderBeam
                size={40}
                initialOffset={20}
                className="from-transparent via-yellow-500 to-transparent"
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                }}
              />
            </Button>

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
