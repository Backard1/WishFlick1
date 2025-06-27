import React, { useState } from 'react';
import { X, Mail, Chrome, Facebook, UserCheck } from 'lucide-react';
import Logo from './Logo';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
  onSwitchMode: (mode: 'login' | 'register') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode, onSwitchMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the actual authentication
    console.log('Auth attempt:', { mode, email, password });
    // For demo purposes, just close the modal
    onClose();
  };

  const handleSocialAuth = (provider: string) => {
    console.log(`${mode} with ${provider}`);
    // Here you would handle social authentication
    onClose();
  };

  const handleGuestMode = () => {
    console.log('Continue as guest');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Logo size="md" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] bg-clip-text text-transparent">
                WishFlick
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {mode === 'login' ? 'Добро пожаловать!' : 'Создайте аккаунт'}
            </h2>
            <p className="text-gray-600">
              {mode === 'login' 
                ? 'Войдите, чтобы продолжить исполнять мечты' 
                : 'Присоединяйтесь к сообществу мечтателей'
              }
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <button 
              onClick={() => handleSocialAuth('Google')}
              className="w-full flex items-center justify-center space-x-3 px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-[#B48DFE] hover:bg-[#B48DFE]/5 transition-all duration-200 group"
            >
              <Chrome className="w-5 h-5 text-gray-600 group-hover:text-[#6A49C8]" />
              <span className="font-medium text-gray-700 group-hover:text-[#6A49C8]">
                Продолжить с Google
              </span>
            </button>

            <button 
              onClick={() => handleSocialAuth('Facebook')}
              className="w-full flex items-center justify-center space-x-3 px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-[#B48DFE] hover:bg-[#B48DFE]/5 transition-all duration-200 group"
            >
              <Facebook className="w-5 h-5 text-gray-600 group-hover:text-[#6A49C8]" />
              <span className="font-medium text-gray-700 group-hover:text-[#6A49C8]">
                Продолжить с Facebook
              </span>
            </button>

            <button 
              onClick={handleGuestMode}
              className="w-full flex items-center justify-center space-x-3 px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-[#B48DFE] hover:bg-[#B48DFE]/5 transition-all duration-200 group"
            >
              <UserCheck className="w-5 h-5 text-gray-600 group-hover:text-[#6A49C8]" />
              <span className="font-medium text-gray-700 group-hover:text-[#6A49C8]">
                Гостевой режим
              </span>
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">или</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B48DFE] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Пароль
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B48DFE] focus:border-transparent transition-all"
                required
              />
            </div>

            {mode === 'login' && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2 rounded" 
                  />
                  <span className="text-gray-600">Запомнить меня</span>
                </label>
                <a href="#" className="text-[#6A49C8] hover:text-[#B48DFE] transition-colors">
                  Забыли пароль?
                </a>
              </div>
            )}

            <button 
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold"
            >
              {mode === 'login' ? 'Войти' : 'Создать аккаунт'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            {mode === 'login' ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
            <button 
              onClick={() => onSwitchMode(mode === 'login' ? 'register' : 'login')}
              className="ml-1 text-[#6A49C8] hover:text-[#B48DFE] font-medium transition-colors"
            >
              {mode === 'login' ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;