import React from 'react';
import { Heart, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Logo size="lg" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] bg-clip-text text-transparent">
                WishFlick
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Превращаем мечты в реальность через силу сообщества. 
              Создавайте вишлисты, собирайте средства и делитесь радостью с близкими.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-[#B48DFE] hover:to-[#98E2D5] transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-[#B48DFE] hover:to-[#98E2D5] transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-[#B48DFE] hover:to-[#98E2D5] transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-[#B48DFE] hover:to-[#98E2D5] transition-all duration-300 group">
                <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Платформа</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#B48DFE] transition-colors">Как это работает</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#B48DFE] transition-colors">Популярные вишлисты</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#B48DFE] transition-colors">Для блогеров</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#B48DFE] transition-colors">API для разработчиков</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#B48DFE] transition-colors">Мобильное приложение</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Поддержка</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#B48DFE] transition-colors">Центр помощи</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#B48DFE] transition-colors">Связаться с нами</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#B48DFE] transition-colors">Сообщество</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#B48DFE] transition-colors">Условия использования</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#B48DFE] transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 WishFlick. Все права защищены.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Сделано с</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-gray-400 text-sm">для мечтателей</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;