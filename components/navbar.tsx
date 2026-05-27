'use client';
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import {useState} from "react"
import ModeButton from "@/components/mode-toggle";

export default function NavBar(){
    const router = useRouter();
    const pathname = usePathname();

    //for hamburger menu, default false
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="">
            

        </nav>
    );
}