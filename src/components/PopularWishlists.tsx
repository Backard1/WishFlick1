import React from 'react';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import WishlistCard from './WishlistCard';
import { Wishlist } from '../types';

const PopularWishlists: React.FC = () => {
  const popularWishlists: Wishlist[] = [
    {
      id: '1',
      title: 'Профессиональная камера для путешествий',
      description: 'Мечтаю запечатлеть красоту мира в высоком качестве. Хочу начать карьеру travel-фотографа.',
      coverImage: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800',
      owner: {
        id: '1',
        name: 'Елена Смирнова',
        email: 'elena@example.com',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 5,
        following: 120,
        followers: 245,
        isPublic: true
      },
      totalGoal: 85000,
      currentAmount: 67200,
      items: [],
      isPublic: true,
      tags: ['Фото', 'Путешествия'],
      createdAt: '2024-01-15',
      contributors: 23
    },
    {
      id: '2',
      title: 'Студия звукозаписи дома',
      description: 'Собираю на оборудование для домашней студии. Хочу записывать свою музыку и помогать начинающим артистам.',
      coverImage: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
      owner: {
        id: '2',
        name: 'Максим Петров',
        email: 'maxim@example.com',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 8,
        following: 89,
        followers: 312,
        isPublic: true
      },
      totalGoal: 120000,
      currentAmount: 89000,
      items: [],
      isPublic: true,
      tags: ['Музыка', 'Творчество'],
      createdAt: '2024-01-20',
      contributors: 31
    },
    {
      id: '3',
      title: 'Кулинарные курсы в Италии',
      description: 'Мечтаю изучить настоящую итальянскую кухню у лучших шефов. Это изменит мою карьеру повара навсегда.',
      coverImage: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      owner: {
        id: '3',
        name: 'Анна Козлова',
        email: 'anna@example.com',
        avatar: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 6,
        following: 156,
        followers: 189,
        isPublic: true
      },
      totalGoal: 180000,
      currentAmount: 134000,
      items: [],
      isPublic: true,
      tags: ['Обучение', 'Кулинария'],
      createdAt: '2024-01-12',
      contributors: 45
    },
    {
      id: '4',
      title: 'Экологичный транспорт',
      description: 'Хочу пересесть на электровелосипед для ежедневных поездок. За экологию и здоровый образ жизни!',
      coverImage: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      owner: {
        id: '4',
        name: 'Дмитрий Волков',
        email: 'dmitry@example.com',
        avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 4,
        following: 67,
        followers: 123,
        isPublic: true
      },
      totalGoal: 65000,
      currentAmount: 48000,
      items: [],
      isPublic: true,
      tags: ['Экология', 'Спорт'],
      createdAt: '2024-01-25',
      contributors: 18
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-8 h-8 text-[#6A49C8]" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Популярные вишлисты
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Присоединяйтесь к самым интересным проектам нашего сообщества
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularWishlists.map((wishlist, index) => (
            <div
              key={wishlist.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <WishlistCard wishlist={wishlist} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] text-white rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
            Посмотреть все вишлисты
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularWishlists;