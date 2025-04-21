'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const categories = [
  { name: 'Au travail', href: '/categories/travail' },
  { name: 'Astuces', href: '/categories/astuces' },
  { name: 'Actualités', href: '/categories/actualites' },
  { name: 'Santé mentale', href: '/categories/santementale' },
  { name: 'Tech & IA', href: '/categories/tech' },
  { name: 'Thérapies', href: '/categories/therapies' },
  { name: 'Témoignages', href: '/categories/temoignages' },
];

export default function AdminArticlesPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    coverImage: '',
    author: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    toast("Article créé avec succès !", {
      description: "L'article a été publié sur le blog",
    });

    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      coverImage: '',
      author: '',
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className='pt-20'>
      <div className='max-w-4xl mx-auto px-4 py-12'>
        <h1 className='font-serif text-3xl font-medium text-primary-dark mb-8'>
          Créer un nouvel article
        </h1>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='space-y-2'>
            <Input
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Titre de l'article"
              required
            />
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium'>Extrait</label>
            <Textarea
              value={formData.excerpt}
              onChange={(e) => handleChange('excerpt', e.target.value)}
              placeholder="Brief résumé de l'article"
              required
            />
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium'>Contenu</label>
            <Textarea
              value={formData.content}
              onChange={(e) => handleChange('content', e.target.value)}
              placeholder="Contenu de l'article"
              className='min-h-[200px]'
              required
            />
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium'>Catégorie</label>
            <Select
              value={formData.category}
              onValueChange={(value) => handleChange('category', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder='Sélectionner une catégorie' />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.href} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium'>Image de couverture</label>
            <Input
              value={formData.coverImage}
              onChange={(e) => handleChange('coverImage', e.target.value)}
              placeholder="URL de l'image"
              type='url'
              required
            />
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-medium'>Auteur</label>
            <Input
              value={formData.author}
              onChange={(e) => handleChange('author', e.target.value)}
              placeholder="Nom de l'auteur"
              required
            />
          </div>

          <div className='flex gap-4'>
            <Button type='submit' size='lg'>
              Publier un article
            </Button>
            <Button type='button' variant='outline' size='lg' onClick={() => router.back()}>
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}