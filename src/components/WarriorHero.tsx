import { Button } from "@/components/ui/button";

const WarriorHero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-warrior-orange rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-warrior-orange rotate-12"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-warrior-orange rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/fec5bc7a-ee14-4eed-adc2-0154ca7886d6.png" 
            alt="Warriorfit Brasil Logo" 
            className="w-32 h-32 mx-auto mb-6 filter brightness-0 invert"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-warrior-white mb-6 leading-tight">
          WARRIOR<span className="text-warrior-orange">FIT</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-warrior-orange font-bold mb-8">
          BRASIL
        </h2>
        
        <p className="text-xl md:text-2xl text-warrior-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
          Transforme seu corpo e mente com treinos <span className="text-warrior-orange font-bold">100% personalizados</span>. 
          Cada guerreiro é único, cada treino é especial. Desperte o guerreiro que existe em você.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="warrior" 
            size="lg" 
            className="text-xl px-12 py-6 h-auto"
          >
            INICIAR JORNADA WARRIOR
          </Button>
          
          <Button 
            variant="warrior-outline" 
            size="lg" 
            className="text-xl px-12 py-6 h-auto"
          >
            SAIBA MAIS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WarriorHero;