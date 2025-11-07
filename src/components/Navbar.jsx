import { cn } from "@/lib/utils";
import { Key, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

const navItens = [
    { name: "Home", to: "/"},
    { name: "Sobre", to: "/sobre" },
    { name: "Skills", to: "/skills" },
    { name: "Projetos", to: "/projetos" },
    { name: "Contato", to: "/contato" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState (false);
    const [isMenuOpen, setIsMenuOpen] = useState (false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
        >
            <div className="container flex items-center justify-between">
                <Link 
                    className="text-xl font-bold text-primary flex items-center"
                    to="/"                
                >
                    <span className="relative z-10">                        
                        <span className="text-glow text-foreground"> Jéssica </span> Domingues
                    </span>
                </Link>

                <div className="hidden md:flex space-x-8">
                    {navItens.map((item, Key) => (
                        <Link 
                        key={Key} 
                        to={item.to} 
                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}                            
                        </Link>
                    ))}
                </div>

            <button 
                onClick={() => setIsMenuOpen ((prev) => !prev)}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                > 
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />} 
            </button>

            <div className={cn(
                "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen 
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}>
                 <div className="flex flex-col space-y-8 text-xl">
                    {navItens.map((item, Key) => (
                        <Link 
                            key={Key} 
                            to={item.to} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}                        
                        >
                            {item.name}                            
                        </Link>
                    ))}
                </div>
            </div>      
              
           </div>
        </nav>
    );
};