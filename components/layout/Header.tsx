"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X, BrainCircuit } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';

const categories = [
  { name: 'Au travail', href: '/categories/travail' },
  { name: 'Astuces', href: '/categories/astuces' },
  { name: 'Actualités', href: '/categories/actualites' },
  { name: 'Santé mentale', href: '/categories/santementale' },
  { name: 'Tech & IA', href: '/categories/tech' },
  { name: 'Thérapies', href: '/categories/therapies' },
  { name: 'Témoignages', href: '/categories/temoignages' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-4 md:px-6",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo/Logo_Allyia.png"
            alt="Allyia Logo"
            width={70}
            height={70}
            priority
          />
          <Image
            src='/logo/Typo_Allyia.png'
            alt='Typo Allyia'
            width={150}
            height={150}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-secondary/50 font-medium">
                  Catégories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={category.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-lg font-medium leading-none">{category.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/communaute" passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Communauté
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button 
            asChild 
            variant="default" 
            className="funding-button rounded-full px-6 py-2 font-medium bg-primary hover:bg-primary-dark text-white border-2 border-primary-dark shadow-md"
          >
            <Link href="/financement">
              Participer au financement
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary-dark"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm border-b border-border shadow-lg animate-slideDownAndFade">
          <div className="px-4 py-6 space-y-6">
            <div className="space-y-3">
              <p className="font-medium text-lg text-primary-dark">Catégories</p>
              <ul className="space-y-2 ml-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link 
                      href={category.href}
                      className="block py-2 hover:text-primary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link 
              href="/communaute" 
              className="block py-2 font-medium text-lg text-primary-dark hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Communauté
            </Link>
            
            <Button 
              asChild 
              variant="default" 
              className="w-full funding-button rounded-full px-6 py-2 font-medium bg-primary hover:bg-primary-dark text-white border-2 border-primary-dark shadow-md"
              onClick={() => setMenuOpen(false)}
            >
              <Link href="/financement">
                Participer au financement
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}