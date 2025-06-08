
import { Calendar } from 'lucide-react';

interface HeroSectionProps {
  coupleImage: string;
  relationshipStart: string;
}

const HeroSection = ({ coupleImage, relationshipStart }: HeroSectionProps) => {
  return (
    <section className="text-center mb-16">
      <div className="relative max-w-lg mx-auto">
        <div className="relative">
          <img
            src={coupleImage}
            alt="Foto do casal"
            className="w-full h-auto object-contain rounded-3xl shadow-2xl border-4 border-romantic-rose/20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-romantic-rose/10 to-transparent rounded-3xl"></div>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex justify-center items-center gap-2">
          <Calendar className="text-romantic-rose" size={18} />
          <p className="font-playfair text-lg text-romantic-text">
            Nosso amor desde {new Date(relationshipStart).toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
