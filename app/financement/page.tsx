"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Award, Shield, Star, Zap, CalendarClock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function FundingPage() {
  // Mock data for crowdfunding progress
  const target = 50000;
  const current = 32450;
  const backers = 217;
  const daysLeft = 24;
  const progressPercentage = (current / target) * 100;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-primary-dark mb-6">
              Participez au financement d&apos;Allyia
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Soutenez le développement d&apos;une application qui révolutionne l&apos;accès aux ressources en santé mentale
              et contribuez à un futur où le bien-être mental est accessible à tous.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild
                size="lg"
                className="rounded-full bg-primary hover:bg-primary-dark text-white"
              >
                <Link href="#contribute">
                  Participer maintenant
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-primary text-primary hover:bg-primary/10"
              >
                <Link href="#about">
                  En savoir plus
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Funding Progress Section */}
      <section id="contribute" className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image 
                src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg" 
                alt="Campagne de financement Allyia"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-dark mb-4">
                  Notre campagne de financement
                </h2>
                <p className="text-lg text-muted-foreground">
                  Nous avons besoin de votre soutien pour finaliser le développement de l&apos;application 
                  Allyia et la rendre accessible au plus grand nombre. Chaque contribution compte !
                </p>
              </div>
              
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Progression de la campagne</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-xl">{current.toLocaleString('fr-FR')} €</span>
                      <span className="text-muted-foreground">Objectif: {target.toLocaleString('fr-FR')} €</span>
                    </div>
                    <Progress value={progressPercentage} className="h-3 bg-secondary" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <p className="text-primary-dark font-medium text-2xl">{progressPercentage.toFixed(0)}%</p>
                      <p className="text-sm text-muted-foreground">Financé</p>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <p className="text-primary-dark font-medium text-2xl">{backers}</p>
                      <p className="text-sm text-muted-foreground">Contributeurs</p>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <p className="text-primary-dark font-medium text-2xl">{daysLeft}</p>
                      <p className="text-sm text-muted-foreground">Jours restants</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild
                    className="w-full rounded-full bg-primary hover:bg-primary-dark text-white"
                  >
                    <Link href="https://example.com/allyia-crowdfunding" target="_blank" rel="noopener noreferrer">
                      <Heart className="mr-2 h-4 w-4" />
                      Contribuer maintenant
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About The Project */}
      <section id="about" className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-dark mb-4">
              À propos du projet Allyia
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Allyia est née d&apos;une vision claire : démocratiser l&apos;accès aux ressources en santé mentale 
              pour tous. Découvrez notre histoire et nos objectifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-medium text-primary-dark">Notre mission</h3>
              <p className="text-muted-foreground">
                Allyia vise à transformer la façon dont nous abordons la santé mentale en France. 
                Notre application combine suivi personnalisé, ressources éducatives et outils thérapeutiques
                pour accompagner chacun dans son parcours de bien-être mental.
              </p>
              <p className="text-muted-foreground">
                Nous croyons fermement que prendre soin de sa santé mentale devrait être aussi normal et 
                accessible que prendre soin de sa santé physique.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-medium text-primary-dark">Notre équipe</h3>
              <p className="text-muted-foreground">
                Derrière Allyia se trouve une équipe pluridisciplinaire passionnée, composée de développeurs, 
                psychologues, designers et experts en santé mentale. Nous avons tous un point commun : 
                la conviction que la technologie peut être mise au service du bien-être mental.
              </p>
              <p className="text-muted-foreground">
                Notre diversité est notre force, nous permettant d&apos;aborder les défis de la santé mentale 
                sous différents angles pour créer une solution véritablement efficace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-dark mb-4">
              Fonctionnalités principales
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez ce qui rend Allyia unique et comment l&apos;application vous aidera à prendre 
              soin de votre santé mentale au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-primary/10 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Suivi personnalisé</CardTitle>
                <CardDescription>
                  Suivez votre humeur, vos symptômes et votre progression avec des outils adaptés à vos besoins.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/10 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Exercices guidés</CardTitle>
                <CardDescription>
                  Accédez à des exercices de méditation, de respiration et de relaxation conçus par des professionnels.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/10 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Confidentialité totale</CardTitle>
                <CardDescription>
                  Vos données sont sécurisées et confidentielles. Votre vie privée est notre priorité absolue.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/10 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Contenus experts</CardTitle>
                <CardDescription>
                  Accédez à des articles, vidéos et podcasts créés par des professionnels de la santé mentale.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/10 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CalendarClock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Journal thérapeutique</CardTitle>
                <CardDescription>
                  Tenez un journal guidé pour explorer vos pensées et émotions avec des prompts thérapeutiques.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/10 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Communauté bienveillante</CardTitle>
                <CardDescription>
                  Rejoignez une communauté de soutien pour partager vos expériences dans un espace sécurisé.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/20">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-dark">
              Soutenez Allyia dès aujourd&apos;hui
            </h2>
            <p className="text-lg text-muted-foreground">
              Votre contribution nous aidera à finaliser le développement et à lancer l&apos;application.
              Ensemble, nous pouvons faire une différence dans la vie de milliers de personnes.
            </p>
            <Button 
              asChild
              size="lg"
              className="rounded-full px-8 bg-primary hover:bg-primary-dark text-white"
            >
              <Link href="#contribute">
                <Heart className="mr-2 h-5 w-5" />
                Participer maintenant
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}