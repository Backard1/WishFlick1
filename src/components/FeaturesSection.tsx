import React from 'react';
import { Gift, DollarSign, Heart, Camera, Sparkles, Users } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Gift,
      title: 'Вишлисты с AR-сканированием',
      description: 'Добавляйте товары простым сканированием через камеру. ИИ распознает предметы и найдет лучшие предложения.',
      gradient: 'from-[#B48DFE] to-[#6A49C8]',
      delay: '0'
    },
    {
      icon: DollarSign,
      title: 'Краудфандинг с частичными взносами',
      description: 'Друзья и семья могут скидываться на дорогие подарки. Безопасные платежи и возврат средств при отмене.',
      gradient: 'from-[#6A49C8] to-[#98E2D5]',
      delay: '200'
    },
    {
      icon: Heart,
      title: 'Социальная лента с историями',
      description: 'Делитесь вишлистами, получайте лайки и комментарии. Превратите мечты в социальный опыт.',
      gradient: 'from-[#98E2D5] to-[#B48DFE]',
      delay: '400'
    }
  ];

  const additionalFeatures = [
    {
      icon: Camera,
      title: 'AI-рекомендации',
      description: 'Персонализированные предложения на основе ваших интересов и истории покупок.',
      color: 'text-[#B48DFE]'
    },
    {
      icon: Sparkles,
      title: 'Геймификация',
      description: 'Зарабатывайте очки за активность, открывайте достижения и повышайте уровень.',
      color: 'text-[#6A49C8]'
    },
    {
      icon: Users,
      title: 'Виджет для блогеров',
      description: 'Встраивайте вишлисты на сайты и в социальные сети одним кликом.',
      color: 'text-[#98E2D5]'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Почему <span className="bg-gradient-to-r from-[#B48DFE] to-[#98E2D5] bg-clip-text text-transparent">WishFlick</span> лучше?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы объединили лучшее из социальных сетей, краудфандинга и технологий ИИ, 
            чтобы сделать процесс подарков незабываемым.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#6A49C8] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className={`w-12 h-12 ${feature.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;