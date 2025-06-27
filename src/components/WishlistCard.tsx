import React from 'react';
import { Heart, Share2, Eye, Users } from 'lucide-react';
import { Wishlist } from '../types';

interface WishlistCardProps {
  wishlist: Wishlist;
  showProgress?: boolean;
}

const WishlistCard: React.FC<WishlistCardProps> = ({ wishlist, showProgress = true }) => {
  const progressPercentage = (wishlist.currentAmount / wishlist.totalGoal) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={wishlist.coverImage}
          alt={wishlist.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
          {wishlist.tags[0]}
        </div>
        <button className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={wishlist.owner.avatar}
            alt={wishlist.owner.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-900 text-sm">{wishlist.owner.name}</p>
            <p className="text-gray-500 text-xs">Уровень {wishlist.owner.level}</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {wishlist.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {wishlist.description}
        </p>

        {showProgress && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold text-gray-900">
                {wishlist.currentAmount.toLocaleString()} ₽
              </span>
              <span className="text-sm text-gray-500">
                из {wishlist.totalGoal.toLocaleString()} ₽
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className="bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{Math.round(progressPercentage)}% собрано</span>
              <span className="flex items-center">
                <Users className="w-3 h-3 mr-1" />
                {wishlist.contributors} чел.
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <button className="p-2 text-gray-400 hover:text-[#6A49C8] transition-colors">
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-[#6A49C8] transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
            Поддержать
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;