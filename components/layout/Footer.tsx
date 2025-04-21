import Link from 'next/link';
import { BrainCircuit, Instagram, Linkedin, Send, MessageCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const categories = [
  { name: 'Au travail', href: '/categories/travail' },
  { name: 'Astuces', href: '/categories/astuces' },
  { name: 'Actualités', href: '/categories/actualites' },
  { name: 'Santé mentale', href: '/categories/santementale' },
  { name: 'Tech & IA', href: '/categories/tech' },
  { name: 'Thérapies', href: '/categories/therapies' },
  { name: 'Témoignages', href: '/categories/temoignages' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Short Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <BrainCircuit className="h-8 w-8 text-primary-dark" />
              <span className="font-serif text-2xl font-semibold text-primary-dark">Allyia</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Allyia est votre application de gestion de santé mentale, proposant des ressources et un accompagnement personnalisé.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="https://instagram.com/allyia" className="text-muted-foreground hover:text-primary transition duration-200">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com/company/allyia" className="text-muted-foreground hover:text-primary transition duration-200">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://discord.gg/allyia" className="text-muted-foreground hover:text-primary transition duration-200">
                <MessageCircle size={20} />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-primary-dark">Catégories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    href={category.href} 
                    className="text-muted-foreground hover:text-primary transition duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-primary-dark">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/communaute" 
                  className="text-muted-foreground hover:text-primary transition duration-200"
                >
                  Notre communauté
                </Link>
              </li>
              <li>
                <Link 
                  href="/financement" 
                  className="text-muted-foreground hover:text-primary transition duration-200"
                >
                  Participer au financement
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:contact@allyia.fr" 
                  className="text-muted-foreground hover:text-primary transition duration-200 flex items-center space-x-2"
                >
                  <Send size={16} />
                  <span>contact@allyia.fr</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Allyia. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="/mentions-legales" className="hover:text-primary transition duration-200">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-primary transition duration-200">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}