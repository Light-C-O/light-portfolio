'use client'
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function HomeBackground() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => { setMounted(true) }, [])

    const img = !mounted || theme === "light" ? "/circle-background-lightmode_homesection_v1.svg" : "/polygon-background-darkmode_homesection_v1.svg"

    return (
        <Image
            src={img}
            alt="main background image"
            fill
            className="w-full h-full object-cover"
            priority
        />
    )
}