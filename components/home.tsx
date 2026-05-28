"use client";
import HomeBackground from "@/components/main-background";
import NavBar from "@/components/navbar";


export default function Home() {
    return (
        <header className="relative w-full h-screen">
            <HomeBackground/>
            <div className="grid">
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center max-w-xl md:max-w-7xl mx-auto">
                    <NavBar/>
                    <h1 className="text-3xl md:text-7xl">
                        <span className="text-primary">L</span>ight <span className="text-primary">C</span>hidiebere <span className="text-primary">O</span>suji
                    </h1> 
                    <small className="text-text mt-2 font-subheading md:text-xl italic">Creative Computing student · Building things for the web</small>
                </div>
                
            </div>
        </header>
    );
}