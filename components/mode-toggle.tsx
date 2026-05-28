'use client'
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Image from "next/image"

type ModeProps ={
    onClick?: ()=> void;
}

export default function ModeButton({onClick} : ModeProps) {

    const { theme, setTheme } = useTheme()
    console.log(theme)

    //tracks whether the componenet has finished loading on the client
    //false by default
    const [mounted, setMounted] = useState(false)

    //becomes true after the component as been loaded
    //it prevents hydration mismatch between server and client components
    useEffect(() => { setMounted(true) }, [])

    //if it does
    if(!mounted) return null;

    return(
        <div onClick={() =>{onClick?.(); setTheme(theme === "dark" ? "light" : "dark")}}
            className="cursor-pointer flex items-center justify-center">
                {theme === "dark"? <SunIcon/> : <MoonIcon/> }
        </div>
        
    )
}

// Enabled-filled
function SunIcon() {
	return (
        <Image src="/toggle_light.svg" alt="sun img" width={29} height={29} />
    );
}

// Disabled-unfilled
function MoonIcon() {
	return (
    <Image src="/toggle_dark.svg" alt="moon img" width={29} height={29}/>
    );
}