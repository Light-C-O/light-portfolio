"use client";
import HomeBackground from "@/components/main-background";
import NavBar from "@/components/navbar";


export default function Home() {
    return (
        <header className="relative w-full h-screen">
            <HomeBackground/>
            <div className="mx-auto max-w-xl md:max-w-7xl">
                <NavBar/>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
                    <h1 className="text-5xl md:text-7xl tracking-wide">
                        <span className="text-primary">L</span>
                        ight 
                        <span className="text-primary">C</span>
                        hidiebere 
                        <span className="text-primary">O</span>
                        suji
                    </h1> 
                    <p className="text-text mt-4 font-subheading">Creative Computing student · Building things for the web</p>
                </div>
                
            </div>
        </header>
    );
}