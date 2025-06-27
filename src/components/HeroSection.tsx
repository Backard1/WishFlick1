import React from 'react';
import { ArrowRight, Play, Heart, Gift, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#B48DFE]/10 via-white to-[#98E2D5]/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#B48DFE]/20 to-[#98E2D5]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#98E2D5]/20 to-[#B48DFE]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#B48DFE]/20 to-[#98E2D5]/20 rounded-full text-[#6A49C8] font-medium mb-8 animate-bounce">
              <Heart className="w-4 h-4 mr-2" />
              Дарите мечты, а не просто подарки
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] bg-clip-text text-transparent">
                WishFlick
              </span>
              <br />
              <span className="text-gray-800">меняет мир</span>
              <br />
              <span className="text-gray-800">подарков</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Создавайте вишлисты, собирайте средства с друзьями и делитесь самыми сокровенными желаниями. 
              Превратите каждый подарок в особенный момент.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] text-white rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center justify-center group">
                Начать бесплатно
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-[#B48DFE] text-[#6A49C8] rounded-2xl hover:bg-[#B48DFE]/5 transition-all duration-300 font-semibold text-lg flex items-center justify-center group">
                <Play className="mr-2 w-5 h-5" />
                Как это работает?
              </button>
            </div>

            <div className="flex items-center space-x-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#6A49C8]" />
                <span className="font-medium">50K+ активных пользователей</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gift className="w-5 h-5 text-[#6A49C8]" />
                <span className="font-medium">1M+ подарков собрано</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
                    alt="User"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Анна Петрова</h3>
                    <p className="text-gray-500">Собирает на мечту</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-xl mb-2">🎸 Моя первая гитара</h4>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div className="bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] h-3 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">37,500 ₽ из 50,000 ₽</span>
                    <span className="text-[#6A49C8] font-semibold">75%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <img
                        key={i}
                        src={`https://images.pexels.com/photos/${[415829, 428364, 1040880, 343717][i]}/pexels-photo-${[415829, 428364, 1040880, 343717][i]}.jpeg?auto=compress&cs=tinysrgb&w=150`}
                        alt={`Supporter ${i + 1}`}
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    <div className="w-8 h-8 rounded-full bg-[#B48DFE] border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      +12
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
                    Поддержать
                  </button>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 -left-10 w-20 h-20 bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] rounded-2xl rotate-45 animate-float"></div>
            <div className="absolute bottom-10 -right-10 w-16 h-16 bg-gradient-to-r from-[#98E2D5] to-[#B48DFE] rounded-full animate-float delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;