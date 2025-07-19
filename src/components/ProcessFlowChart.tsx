import { CreditCard, FileText, Dumbbell, ArrowRight } from "lucide-react";

const ProcessFlowChart = () => {
  const steps = [
    {
      icon: <CreditCard className="w-16 h-16" />,
      title: "1. PAGAMENTO",
      description: "Realize o pagamento seguro e receba confirmação instantânea",
      color: "bg-warrior-orange"
    },
    {
      icon: <FileText className="w-16 h-16" />,
      title: "2. AVALIAÇÃO",
      description: "Acesse o link personalizado e preencha seus dados: peso, altura, objetivos e histórico",
      color: "bg-warrior-orange"
    },
    {
      icon: <Dumbbell className="w-16 h-16" />,
      title: "3. SEU TREINO",
      description: "Receba seu treino 100% personalizado em até 24h, pronto para começar sua transformação",
      color: "bg-warrior-orange"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-warrior-black mb-6">
            COMO <span className="text-warrior-orange">FUNCIONA</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Processo simples e rápido para você começar sua jornada warrior hoje mesmo
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center">
                {/* Step Card */}
                <div className="bg-warrior-white p-8 rounded-3xl shadow-warrior hover:shadow-glow transition-all duration-300 hover:-translate-y-2 max-w-xs text-center border-2 border-warrior-orange/20">
                  <div className={`${step.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow`}>
                    <div className="text-warrior-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-warrior-black mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block mx-6">
                    <ArrowRight className="w-8 h-8 text-warrior-orange" />
                  </div>
                )}
                
                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden my-6 rotate-90">
                    <ArrowRight className="w-8 h-8 text-warrior-orange" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-warrior-black p-8 rounded-3xl shadow-warrior max-w-3xl mx-auto border-2 border-warrior-orange">
            <h3 className="text-3xl font-bold text-warrior-white mb-4">
              ⚡ RÁPIDO E EFICIENTE
            </h3>
            <p className="text-xl text-warrior-white/90">
              Em menos de <span className="text-warrior-orange font-bold">48 horas</span> você estará treinando 
              com um plano feito especificamente para você!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlowChart;