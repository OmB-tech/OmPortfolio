"use client";
import { useEffect } from "react";
import NavBar from "./NavBar";
import { animateScroll } from "./utils/scrollAnimation";
export default function Layout({ children }) {
    useEffect(() => {
        // Initialize scroll animations
        animateScroll();
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);
    return (<div className="min-h-screen bg-navy-900 text-white overflow-hidden flex flex-col">
      <NavBar />
      <main className="flex-grow">{children}</main> 
    </div>);
}
