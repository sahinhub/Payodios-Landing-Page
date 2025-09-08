"use client"

import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import favicon from "../assets/paydios favicon.png"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu"

export function NavigationMenuDemo() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="fixed top-4 left-4 right-4 z-50 fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="h-14 flex items-center justify-between pr-3 pl-3 glass-effect border border-white/10 rounded-full">
          {/* logo */}
          <div className="flex items-center gap-3">
            <div className=" rounded-full flex items-center">
              <img src={favicon} alt="Paydios" className="w-5 h-5 object-cover" />
            </div>
            <span className="text-lg font-medium sf-pro-display">Paydios</span>
          </div>

          {/* center navigation */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:bg-primary focus:ring-primary/50 shadow-sm border border-transparent text-gray-900 dark:text-white hover:border-gray-700 ${isActive("/") ? "bg-primary text-white dark:bg-primary" : "text-white/70 hover:text-white"}`}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/features"
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:bg-primary focus:ring-primary/50 shadow-sm border border-transparent text-gray-900 dark:text-white hover:border-gray-700 ${isActive("/features") ? "bg-primary text-white dark:bg-primary" : "text-white/70 hover:text-white"}`}
                  >
                    Features
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/pricing"
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:bg-primary focus:ring-primary/50 shadow-sm border border-transparent text-gray-900 dark:text-white hover:border-gray-700 ${isActive("/pricing") ? "bg-primary text-white dark:bg-primary" : "text-white/70 hover:text-white"}`}
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/contact"
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:bg-primary focus:ring-primary/50 shadow-sm border border-transparent text-gray-900 dark:text-white hover:border-gray-700 ${isActive("/contact") ? "bg-primary text-white dark:bg-primary" : "text-white/70 hover:text-white"}`}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* right actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">Sign In</button>
            <button className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* mobile menu button */}
          <button className="md:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-5 w-5">
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
