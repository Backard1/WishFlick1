import React from 'react';
import { User, Bell, Search, Menu } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  isAuthenticated?: boolean;
  user?: { name: string; avatar: string };
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isAuthenticated = false, 
  user,
  onLoginClick,
  onRegisterClick 
}) => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Logo size="md" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] bg-clip-text text-transparent">
              WishFlick
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-[#6A49C8] transition-colors font-medium">
                Лента
              </a>
              <a href="#" className="text-gray-700 hover:text-[#6A49C8] transition-colors font-medium">
                Вишлисты
              </a>
              <a href="#" className="text-gray-700 hover:text-[#6A49C8] transition-colors font-medium">
                Популярное
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Поиск вишлистов..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B48DFE] focus:border-transparent bg-gray-50"
                  />
                </div>
                <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] rounded-full text-xs text-white flex items-center justify-center">
                    3
                  </span>
                </button>
                <div className="flex items-center space-x-3">
                  <img
                    src={user?.avatar || "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"}
                    alt={user?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-gray-700 font-medium">{user?.name || 'Пользователь'}</span>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <button 
                  onClick={onLoginClick}
                  className="text-gray-700 hover:text-[#6A49C8] font-medium transition-colors"
                >
                  Войти
                </button>
                <button 
                  onClick={onRegisterClick}
                  className="px-6 py-2 bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
                >
                  Регистрация
                </button>
              </div>
            )}
            <button className="md:hidden text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;