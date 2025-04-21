"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, MessageCircle, Send, Rss } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function CommunityPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-primary-dark mb-6">
              Rejoignez la communauté Allyia
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Connectez-vous avec nous et avec d&apos;autres personnes qui partagent votre intérêt pour la santé mentale. 
              Ensemble, nous sommes plus forts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild 
                className="rounded-full bg-primary hover:bg-primary-dark text-white"
              >
                <Link href="#social-media">
                  Réseaux sociaux
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="rounded-full border-primary text-primary hover:bg-primary/10"
              >
                <Link href="#newsletter">
                  S&apos;abonner à la newsletter
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social-media" className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-dark mb-4">
              Suivez-nous sur les réseaux sociaux
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Restez connecté avec Allyia sur vos plateformes sociales préférées pour des conseils quotidiens, 
              des actualités et des inspirations sur la santé mentale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border-primary/10">
              <div className="h-48 bg-[#C13584] flex items-center justify-center">
                <Instagram className="h-20 w-20 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="font-serif">Instagram</CardTitle>
                <CardDescription>
                  Photos, conseils quotidiens et infographies sur la santé mentale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Suivez notre compte Instagram pour des visuels inspirants et des contenus courts mais pertinents sur le bien-être mental.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full rounded-full border-[#C13584] text-[#C13584] hover:bg-[#C13584]/10"
                >
                  <Link href="https://instagram.com/allyia" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" />
                    @allyia
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border-primary/10">
              <div className="h-48 bg-[#0A66C2] flex items-center justify-center">
                <Linkedin className="h-20 w-20 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="font-serif">LinkedIn</CardTitle>
                <CardDescription>
                  Actualités professionnelles et articles approfondis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Suivez-nous sur LinkedIn pour des articles de fond, des études et des discussions sur la santé mentale en milieu professionnel.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full rounded-full border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2]/10"
                >
                  <Link href="https://linkedin.com/company/allyia" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Allyia
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border-primary/10">
              <div className="h-48 bg-[#5865F2] flex items-center justify-center">
                <MessageCircle className="h-20 w-20 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="font-serif">Discord</CardTitle>
                <CardDescription>
                  Communauté active et partage d&apos;expériences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Rejoignez notre serveur Discord pour échanger avec notre équipe et d&apos;autres personnes intéressées par la santé mentale.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full rounded-full border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2]/10"
                >
                  <Link href="https://discord.gg/allyia" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Serveur Discord
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-dark mb-6">
                  Abonnez-vous à notre newsletter
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Recevez nos derniers articles, des conseils exclusifs et des informations sur nos événements 
                  directement dans votre boîte mail. Nous respectons votre vie privée et ne partageons jamais vos données.
                </p>
                
                <div className="space-y-4 max-w-md">
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Votre adresse email" 
                      className="rounded-full border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      className="h-4 w-4 rounded border-primary/30 text-primary focus:ring-primary"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      J&apos;accepte de recevoir des emails d&apos;Allyia. Je peux me désabonner à tout moment.
                    </label>
                  </div>
                  <Button 
                    className="w-full rounded-full bg-primary hover:bg-primary-dark text-white"
                  >
                    <Rss className="mr-2 h-4 w-4" />
                    S&apos;abonner
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image 
                  src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg" 
                  alt="Newsletter Allyia"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl mx-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-dark mb-4">
              Contactez-nous
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vous avez des questions, des suggestions ou souhaitez collaborer avec nous ? 
              Nous sommes à l&apos;écoute et prêts à échanger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border-primary/10">
              <CardHeader>
                <CardTitle className="font-serif">Email</CardTitle>
                <CardDescription>
                  Pour toute demande générale, suggestion ou question
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link 
                  href="mailto:contact@allyia.fr" 
                  className="flex items-center text-primary hover:underline"
                >
                  <Send className="mr-2 h-4 w-4" />
                  contact@allyia.fr
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border-primary/10">
              <CardHeader>
                <CardTitle className="font-serif">Partenariats</CardTitle>
                <CardDescription>
                  Pour les opportunités de collaboration et partenariat
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link 
                  href="mailto:partenariats@allyia.fr" 
                  className="flex items-center text-primary hover:underline"
                >
                  <Send className="mr-2 h-4 w-4" />
                  partenariats@allyia.fr
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}