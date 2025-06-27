import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Clock } from 'lucide-react';
import { Post } from '../types';

const SocialFeed: React.FC = () => {
  const posts: Post[] = [
    {
      id: '1',
      user: {
        id: '1',
        name: 'Елена Смирнова',
        email: 'elena@example.com',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 5,
        following: 120,
        followers: 245,
        isPublic: true
      },
      wishlist: {
        id: '1',
        title: 'Профессиональная камера для путешествий',
        description: '',
        coverImage: '',
        owner: {} as any,
        totalGoal: 85000,
        currentAmount: 67200,
        items: [],
        isPublic: true,
        tags: [],
        createdAt: '',
        contributors: 0
      },
      content: 'Ура! Моя мечта о профессиональной камере становится реальностью! Благодарю всех, кто поддерживает меня 📸✨ Уже 79% собрано!',
      image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 42,
      comments: 8,
      createdAt: '2 часа назад',
      isLiked: false
    },
    {
      id: '2',
      user: {
        id: '2',
        name: 'Максим Петров',
        email: 'maxim@example.com',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 8,
        following: 89,
        followers: 312,
        isPublic: true
      },
      wishlist: {
        id: '2',
        title: 'Студия звукозаписи дома',
        description: '',
        coverImage: '',
        owner: {} as any,
        totalGoal: 120000,
        currentAmount: 89000,
        items: [],
        isPublic: true,
        tags: [],
        createdAt: '',
        contributors: 0
      },
      content: 'Записал демо на новом микрофоне, который купил благодаря вашей поддержке! Звук невероятный 🎵 Студия почти готова!',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 67,
      comments: 15,
      createdAt: '5 часов назад',
      isLiked: true
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Лента <span className="bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] bg-clip-text text-transparent">историй</span>
          </h2>
          <p className="text-xl text-gray-600">
            Следите за успехами друзей и вдохновляйтесь их достижениями
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.user.avatar}
                    alt={post.user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{post.createdAt}</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {post.content}
              </p>

              {post.image && (
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img
                    src={post.image}
                    alt="Post image"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button className={`flex items-center space-x-2 ${post.isLiked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 transition-colors`}>
                      <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
                      <span className="font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-[#6A49C8] transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-medium">{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-[#6A49C8] transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span className="font-medium">Поделиться</span>
                    </button>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
                    Поддержать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-[#B48DFE] text-[#6A49C8] rounded-xl hover:bg-[#B48DFE]/5 transition-colors font-semibold">
            Загрузить еще
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;