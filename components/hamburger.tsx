'use client'
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Menu() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => { setMounted(true) }, [])

    return (
        <img
            src={!mounted ? "/hamburger_light.svg" : theme === "dark" ? "/hamburger_dark.svg" : "/hamburger_light.svg"}
            alt="main background image"
            className="w-10 h-10"
        />
    )
}