import { Button } from "@/components/ui/button";
import { Clock, Star, Shield } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-warrior-orange rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-warrior-orange rotate-12"></div>
        <div className="absolute top-1/2 right-20 w-20 h-20 border border-warrior-orange rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bold text-warrior-white mb-6">
            OFERTA <span className="text-warrior-orange">ESPARTA</span>
          </h2>
          
          <div className="bg-warrior-orange text-warrior-white text-2xl md:text-3xl font-bold py-4 px-8 rounded-2xl inline-block mb-8 shadow-glow">
            50% OFF POR TEMPO LIMITADO!
          </div>
          
          <p className="text-xl md:text-2xl text-warrior-white/90 max-w-3xl mx-auto mb-8">
            Transforme seu corpo com treinos personalizados criados por especialistas. 
            Comece sua jornada warrior hoje mesmo!
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center mb-12">
          <div className="flex items-center gap-4 text-warrior-white">
            <Clock className="w-8 h-8 text-warrior-orange" />
            <span className="text-lg">Entrega em 24h</span>
          </div>
          
          <div className="flex items-center gap-4 text-warrior-white">
            <Star className="w-8 h-8 text-warrior-orange" />
            <span className="text-lg">100% Personalizado</span>
          </div>
          
          <div className="flex items-center gap-4 text-warrior-white">
            <Shield className="w-8 h-8 text-warrior-orange" />
            <span className="text-lg">Garantia Total</span>
          </div>
        </div>
        
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-warrior-white/10 backdrop-blur-sm p-8 rounded-3xl border border-warrior-orange/30">
            <div className="text-center">
              <div className="text-warrior-white/70 text-lg line-through mb-2">
                De: R$ 197,00
              </div>
              <div className="text-4xl font-bold text-warrior-orange mb-4">
                Por apenas: R$ 97,00
              </div>
              <div className="text-warrior-white text-sm">
                Use o cupom: <span className="bg-warrior-orange px-3 py-1 rounded-lg font-bold">ESPARTA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            variant="warrior" 
            size="lg" 
            className="text-2xl px-16 py-8 h-auto shadow-glow hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            onClick={() => window.open('https://buy.stripe.com/3cI3cv4zaaKO4VY6PHffy01', '_blank')}
          >
            🔥 GARANTIR MINHA VAGA AGORA
          </Button>
          
          <p className="text-warrior-white/70 mt-6 max-w-lg mx-auto">
            ⏰ Oferta válida por tempo limitado. Apenas 50 vagas disponíveis esta semana!
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-warrior-white/5 backdrop-blur-sm p-6 rounded-2xl border border-warrior-orange/20 text-center">
            <div className="text-3xl font-bold text-warrior-orange mb-2">24h</div>
            <div className="text-warrior-white">Entrega Garantida</div>
          </div>
          
          <div className="bg-warrior-white/5 backdrop-blur-sm p-6 rounded-2xl border border-warrior-orange/20 text-center">
            <div className="text-3xl font-bold text-warrior-orange mb-2">100%</div>
            <div className="text-warrior-white">Personalizado</div>
          </div>
          
          <div className="bg-warrior-white/5 backdrop-blur-sm p-6 rounded-2xl border border-warrior-orange/20 text-center">
            <div className="text-3xl font-bold text-warrior-orange mb-2">10k+</div>
            <div className="text-warrior-white">Guerreiros Ativos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;