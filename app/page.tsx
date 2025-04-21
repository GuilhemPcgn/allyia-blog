"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, Heart, Moon, Users, Sparkles } from 'lucide-react';
import LatestArticles from '@/components/home/LatestArticles';

export default function Home() {
  // Animation for sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="slide-section bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="max-w-xl space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary-dark">
              Prendre soin de <span className="relative">
                sa santé mentale
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary-light"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Découvrez les ressources et conseils d&apos;Allyia pour cultiver votre bien-être mental et vivre pleinement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary-dark text-white"
              >
                <Link href="/categories">
                  Explorer les articles
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full border-primary text-primary hover:bg-primary/10"
              >
                <Link href="/financement">
                  Soutenir Allyia
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative w-full max-w-md"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Image 
              src="https://images.pexels.com/photos/3768763/pexels-photo-3768763.jpeg" 
              alt="Santé mentale"
              width={600}
              height={600}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="slide-section py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="animate-on-scroll mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-dark mb-6">Notre mission</h2>
            <p className="text-lg text-muted-foreground">
              Allyia a pour mission de démocratiser l&apos;accès aux ressources en santé mentale. 
              Notre blog est une extension de cette mission, offrant du contenu pédagogique 
              et bienveillant pour tous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="animate-on-scroll hover:shadow-md transition-all duration-300 bg-white border-primary/10">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BrainCircuit size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-medium">Comprendre</h3>
                  <p className="text-muted-foreground">
                    Des articles pédagogiques pour mieux comprendre les enjeux de la santé mentale.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll hover:shadow-md transition-all duration-300 bg-white border-primary/10" style={{ transitionDelay: '100ms' }}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Heart size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-medium">Prendre soin</h3>
                  <p className="text-muted-foreground">
                    Des conseils pratiques pour prendre soin de sa santé mentale au quotidien.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll hover:shadow-md transition-all duration-300 bg-white border-primary/10" style={{ transitionDelay: '200ms' }}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-medium">Partager</h3>
                  <p className="text-muted-foreground">
                    Des témoignages inspirants pour se sentir moins seul face aux difficultés.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll hover:shadow-md transition-all duration-300 bg-white border-primary/10" style={{ transitionDelay: '300ms' }}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-medium">Progresser</h3>
                  <p className="text-muted-foreground">
                    Des méthodes éprouvées pour avancer positivement sur son chemin de bien-être.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="slide-section py-20 md:py-32 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image 
                src="https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg" 
                alt="Application Allyia"
                width={600}
                height={800}
                className="rounded-2xl shadow-xl mx-auto"
              />
            </motion.div>
            
            <div className="w-full md:w-1/2 animate-on-scroll">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-dark mb-6">
                L&apos;application Allyia
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Notre blog accompagne l&apos;application Allyia, votre compagnon au quotidien pour gérer votre santé mentale. 
                Prenez soin de vous de manière personnalisée avec des outils développés par des professionnels.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary text-sm font-medium">✓</span>
                  </div>
                  <p className="text-muted-foreground">Suivi d&apos;humeur et symptômes personnalisé</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary text-sm font-medium">✓</span>
                  </div>
                  <p className="text-muted-foreground">Exercices de méditation et de respiration</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary text-sm font-medium">✓</span>
                  </div>
                  <p className="text-muted-foreground">Journal thérapeutique guidé</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary text-sm font-medium">✓</span>
                  </div>
                  <p className="text-muted-foreground">Accès à des ressources professionnelles</p>
                </li>
              </ul>
              
              <Button 
                asChild 
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary-dark text-white"
              >
                <Link href="/financement">
                  Participer au financement
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="slide-section py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-dark mb-4">
              Derniers articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos publications récentes pour enrichir vos connaissances et votre pratique du bien-être mental.
            </p>
          </div>
          
          <LatestArticles />
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full border-primary text-primary hover:bg-primary/10"
            >
              <Link href="/categories">
                Voir tous les articles
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}