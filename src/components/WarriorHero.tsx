import { Button } from "@/components/ui/button";

const WarriorHero = () => {
  return (
    <section className="min-h-screen w-screen overflow-hidden bg-gradient-hero flex items-center justify-center relative px-4">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 border-2 border-warrior-orange rotate-45"></div>
        <div className="absolute bottom-20 right-4 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 border-2 border-warrior-orange rotate-12"></div>
        <div className="absolute top-1/2 left-2 sm:left-10 w-12 sm:w-16 h-12 sm:h-16 border-2 border-warrior-orange rotate-45"></div>
      </div>

      <div className="w-full max-w-5xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="/warriorfit_logo.png"
            alt="Warriorfit Brasil Logo"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto"
          />
        </div>

        {/* Título */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-warrior-white mb-4 leading-tight">
          WARRIOR<span className="text-warrior-orange">FIT</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl text-warrior-orange font-semibold mb-6">
          BRASIL3
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-warrior-white/90 max-w-3xl mx-auto leading-relaxed mb-8 px-2">
          Transforme seu corpo e mente com treinos <span className="text-warrior-orange font-bold">100% personalizados</span>. 
          Cada guerreiro é único, cada treino é especial. Desperte o guerreiro que existe em você.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full px-2">
          <Button
            variant="warrior"
            size="lg"
            className="text-base sm:text-lg md:text-xl px-6 sm:px-10 py-4 h-auto w-full sm:w-auto"
            onClick={() =>
              window.open(
                "https://buy.stripe.com/3cI3cv4zaaKO4VY6PHffy01",
                "_blank"
              )
            }
          >
            INICIAR JORNADA WARRIOR
          </Button>

          <Button
            variant="warrior-outline"
            size="lg"
            className="text-base sm:text-lg md:text-xl px-6 sm:px-10 py-4 h-auto w-full sm:w-auto"
            onClick={() => {
              const importanceSection = document.querySelector(
                "#importance-section"
              );
              if (importanceSection) {
                importanceSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            SAIBA MAIS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WarriorHero;
