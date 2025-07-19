import { Target, Zap, Award, TrendingUp } from "lucide-react";

const ImportanceSection = () => {
  const benefits = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Objetivos Específicos",
      description: "Treinos alinhados com seus objetivos únicos: emagrecimento, ganho de massa, força ou resistência."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Máxima Eficiência",
      description: "Sem perda de tempo com exercícios genéricos. Cada movimento é calculado para seu progresso."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Prevenção de Lesões",
      description: "Exercícios adaptados ao seu nível e limitações físicas, garantindo segurança total."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Resultados Garantidos",
      description: "Progressão científica baseada em dados reais do seu corpo e performance."
    }
  ];

  return (
    <section className="py-24 bg-warrior-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-warrior-black mb-6">
            POR QUE TREINO <span className="text-warrior-orange">PERSONALIZADO</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Não existe guerreiro igual a outro. Seu corpo, seus objetivos e sua jornada são únicos. 
            Por isso, seu treino também deve ser.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-2xl shadow-warrior hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-warrior-orange/10"
            >
              <div className="text-warrior-orange mb-6 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-warrior-black mb-4 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary p-8 rounded-3xl shadow-warrior max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-warrior-white mb-4">
              🔥 DESPERTE SEU POTENCIAL MÁXIMO
            </h3>
            <p className="text-xl text-warrior-white/90 leading-relaxed">
              Mais de <span className="font-bold">10.000 guerreiros</span> já transformaram suas vidas com nossos treinos personalizados. 
              <br />É hora de você se tornar o próximo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;