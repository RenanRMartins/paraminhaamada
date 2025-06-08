
import { Calendar } from 'lucide-react';

interface HeroSectionProps {
  coupleImage: string;
  relationshipStart: string;
}

const HeroSection = ({ coupleImage, relationshipStart }: HeroSectionProps) => {
  return (
    <section className="text-center mb-8 md:mb-16 px-4">
      <div className="relative max-w-xs sm:max-w-sm md:max-w-lg mx-auto">
        <div className="relative">
          <img
            src={coupleImage}
            alt="Foto do casal"
            className="w-full h-auto max-h-80 sm:max-h-96 md:max-h-none object-contain rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border-2 md:border-4 border-romantic-rose/20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-romantic-rose/10 to-transparent rounded-2xl md:rounded-3xl"></div>
        </div>
      </div>
      
      <div className="mt-4 md:mt-6">
        <div className="flex justify-center items-center gap-2">
          <Calendar className="text-romantic-rose" size={16} />
          <p className="font-playfair text-base md:text-lg text-romantic-text">
            Nosso amor desde {new Date(relationshipStart).toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
