"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Heart, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";


// Mock data for recent articles - in production, this would come from Supabase
const recentArticles = [
  {
    id: '1',
    title: 'Comment gérer l\'anxiété sociale au quotidien',
    excerpt: 'Découvrez des techniques pratiques pour faire face à l\'anxiété sociale et retrouver confiance en soi dans les situations sociales.',
    category: 'Anxiété',
    categorySlug: 'anxiete',
    date: '15 avril 2025',
    readTime: '6 min',
    author: 'Dr. Marion Dubois',
    image: 'https://images.pexels.com/photos/6383162/pexels-photo-6383162.jpeg',
    likes: 24,
    comments: [
      { id: 1, email: 'user1@example.com', content: 'Article très utile, merci !', date: '16 avril 2025' },
      { id: 2, email: 'user2@example.com', content: 'Ces conseils m\'ont beaucoup aidé.', date: '16 avril 2025' }
    ]
  },
  {
    id: '2',
    title: 'La méditation de pleine conscience pour débutants',
    excerpt: 'Un guide pas à pas pour commencer la méditation de pleine conscience et intégrer cette pratique bénéfique dans votre routine quotidienne.',
    category: 'Méditation',
    categorySlug: 'meditation',
    date: '10 avril 2025',
    readTime: '8 min',
    author: 'Sophie Laurent',
    image: 'https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg',
    likes: 18,
    comments: [
      { id: 1, email: 'user3@example.com', content: 'Parfait pour débuter !', date: '11 avril 2025' }
    ]
  },
  {
    id: '3',
    title: 'Améliorer son sommeil naturellement',
    excerpt: 'Conseils et méthodes naturelles pour retrouver un sommeil réparateur et lutter contre l\'insomnie sans médicaments.',
    category: 'Sommeil',
    categorySlug: 'sommeil',
    date: '5 avril 2025',
    readTime: '7 min',
    author: 'Dr. Thomas Martin',
    image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg',
    likes: 32,
    comments: []
  },
];

export default function LatestArticles() {
  const { toast } = useToast();
  const [articles, setArticles] = useState(recentArticles);
  const [commentForms, setCommentForms] = useState<{ [key: string]: { email: string; content: string } }>({});

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleLike = (articleId: string) => {
    setArticles(articles.map(article => {
      if (article.id === articleId) {
        return { ...article, likes: article.likes + 1 };
      }
      return article;
    }));
    toast({
      title: "Merci pour votre like !",
      description: "Votre appréciation a été prise en compte.",
    });
  };

  const handleCommentSubmit = (articleId: string, e: React.FormEvent) => {
    e.preventDefault();
    const form = commentForms[articleId];
    if (!form?.email || !form?.content) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive"
      });
      return;
    }

    setArticles(articles.map(article => {
      if (article.id === articleId) {
        return {
          ...article,
          comments: [...article.comments, {
            id: article.comments.length + 1,
            email: form.email,
            content: form.content,
            date: new Date().toLocaleDateString('fr-FR')
          }]
        };
      }
      return article;
    }));

    // Reset form
    setCommentForms({
      ...commentForms,
      [articleId]: { email: '', content: '' }
    });

    toast({
      title: "Commentaire ajouté",
      description: "Votre commentaire a été publié avec succès.",
    });
  };

  const handleCommentChange = (articleId: string, field: 'email' | 'content', value: string) => {
    setCommentForms({
      ...commentForms,
      [articleId]: {
        ...commentForms[articleId],
        [field]: value
      }
    });
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {articles.map((article) => (
        <motion.div key={article.id} variants={item}>
          <Card className="h-full overflow-hidden hover:shadow-md transition-all duration-300 border-primary/10">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader className="p-4 pb-2">
              <div className="flex justify-between items-center mb-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  <Link href={`/categories/${article.categorySlug}`}>
                    {article.category}
                  </Link>
                </Badge>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>
              <CardTitle className="font-serif text-xl">
                <Link href={`/articles/${article.id}`} className="hover:text-primary transition-colors">
                  {article.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <CardDescription className="text-muted-foreground">
                {article.excerpt}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-4 flex flex-col gap-4">
              <div className="flex justify-between items-center w-full">
                <span className="text-sm text-muted-foreground">Par {article.author}</span>
                <span className="text-xs text-muted-foreground">{article.readTime} de lecture</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-primary hover:text-primary-dark"
                  onClick={() => handleLike(article.id)}
                >
                  <Heart size={18} />
                  <span>{article.likes}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-primary hover:text-primary-dark"
                >
                  <MessageSquare size={18} />
                  <span>{article.comments.length}</span>
                </Button>
              </div>

              {/* Comments Section */}
              <div className="w-full space-y-4">
                {article.comments.map((comment) => (
                  <div key={comment.id} className="bg-secondary/20 p-3 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium">{comment.email}</span>
                      <span className="text-xs text-muted-foreground">{comment.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{comment.content}</p>
                  </div>
                ))}

                {/* Comment Form */}
                <form onSubmit={(e) => handleCommentSubmit(article.id, e)} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Votre email"
                    value={commentForms[article.id]?.email || ''}
                    onChange={(e) => handleCommentChange(article.id, 'email', e.target.value)}
                    className="w-full"
                  />
                  <Textarea
                    placeholder="Votre commentaire"
                    value={commentForms[article.id]?.content || ''}
                    onChange={(e) => handleCommentChange(article.id, 'content', e.target.value)}
                    className="w-full"
                  />
                  <Button type="submit" className="w-full">
                    Commenter
                  </Button>
                </form>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}