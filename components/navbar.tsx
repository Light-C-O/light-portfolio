'use client';
import Link from "next/link"
import {useState} from "react"
import ModeButton from "@/components/mode-toggle";
import Menu from "./hamburger";

export default function NavBar(){

    //for hamburger menu, default false
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="absolute flex justify-between w-full items-center top-10 px-8 z-50">
            {/* Logo */}
            <h3>
                <span className="text-primary underline underline-offset-2">L</span>.<span className="text-primary underline underline-offset-2">C</span>.<span className="text-primary underline underline-offset-2">O</span>
            </h3>

            {/* Desktop mode */}
            <div className="hidden sm:flex gap-8 uppercase text-text">
                <Link href="/">Home</Link>
                <Link href="/works">Works</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>

            {/* Mode toggle */}
            <div className="text-text"><ModeButton/></div>

            {/* Mobile mode - Hamburger menu */}
            <div className="sm:hidden">
                <button onClick={()=>setMenuOpen(!menuOpen)}>
                    <Menu/>
                </button>
                {menuOpen && (
                    <div className="flex flex-col text-center rounded-md absolute right-8 top-16 border-accent bg-surface uppercase z-50">
                        <Link className="p-2" href="/home" onClick={()=>setMenuOpen(false)}>Home</Link>
                        <Link className="p-2" href="/works" onClick={()=>setMenuOpen(false)}>Works</Link>
                        <Link className="p-2" href="/about" onClick={()=>setMenuOpen(false)}>About</Link>
                        <Link className="p-2" href="/contact" onClick={()=>setMenuOpen(false)}>Contact</Link>
                    </div>
                )}
            </div>

        </nav>
    );
}