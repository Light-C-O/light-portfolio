"use client";
import ModeButton from "@/components/mode-toggle";


export default function Home() {
  
  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-background">
      <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between bg-background text-text">
        <header>
          
          <h1 className="text-">Light Chidiebere Osuji</h1> 
        <div className="absolute sm:top-20 sm:right-20 text-text"><ModeButton/></div>
        </header>

        <section>

        </section>

        <footer>
        
        </footer>
        

      </div>
    </main>
  );
}
