import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Calendar, Music, Play, Pause } from 'lucide-react';

interface TimeLeft {
  years: number;
  months: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Index = () => {
  // Valores fixos/estáticos - seus valores personalizados
  const coupleImage = '/lovable-uploads/41ff8a8d-db89-41f0-861f-32568c02c4af.png';
  const loveMessage = `Meu amor,

Neste Dia dos Namorados, eu só consigo pensar em como sou incrivelmente sortudo por ter você ao meu lado. Você é, sem dúvida, a pessoa mais incrível que já conheci. Desde que você entrou na minha vida, tudo ficou mais leve, mais bonito, mais gostoso de viver. A vida com você tem um brilho diferente, uma paz que eu nunca tinha sentido antes.

Você é a mulher mais linda do mundo — por dentro e por fora — e a forma como você ilumina tudo ao seu redor é simplesmente mágica. Você me faz o homem mais feliz que existe, e não há palavras suficientes para expressar o quanto sou grato por isso.

Saber que você me escolheu para caminhar ao seu lado é algo que ainda me emociona todos os dias. Conhecer você foi, sem dúvida, a melhor coisa que já me aconteceu. E viver esse amor com você é o maior presente que a vida poderia me dar.

Te amo mais do que posso explicar. Obrigado por ser você, por ser minha.

Feliz Dia dos Namorados, meu amor. ❤️`;
  const relationshipStart = '2025-05-18';
  const musicUrl = 'https://www.youtube.com/watch?v=oOT2-OTebx0'; // Garden of Eden - Lady Gaga
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const calculateTimeLeft = () => {
    const difference = +new Date() - +new Date(relationshipStart);
    
    if (difference > 0) {
      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const weeks = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds
      });
    }
  };

  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById('backgroundMusic') as HTMLAudioElement;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen romantic-gradient">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-romantic-rose mb-2">
          Para o Meu Amor
        </h1>
        <div className="flex justify-center items-center gap-2">
          <Heart className="text-romantic-red animate-heartbeat" size={24} />
          <p className="font-inter text-lg text-romantic-text">Feliz Dia dos Namorados</p>
          <Heart className="text-romantic-red animate-heartbeat" size={24} />
        </div>
      </header>

      <div className="container mx-auto px-4 pb-12">
        {/* Hero Section - Static Photo */}
        <section className="text-center mb-16">
          <div className="relative max-w-md mx-auto">
            <div className="relative">
              <img
                src={coupleImage}
                alt="Foto do casal"
                className="w-full h-80 object-cover rounded-3xl shadow-2xl border-4 border-romantic-rose/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-romantic-rose/20 to-transparent rounded-3xl"></div>
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

        {/* Love Message Section - Static */}
        <section className="max-w-4xl mx-auto mb-16">
          <Card className="bg-card/80 backdrop-blur border-romantic-rose/20 shadow-xl">
            <CardContent className="p-8">
              <div className="mt-6 p-6 bg-romantic-pink/30 rounded-2xl">
                <div className="font-playfair text-lg md:text-xl text-romantic-text leading-relaxed whitespace-pre-line">
                  {loveMessage}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Relationship Counter */}
        <section className="max-w-3xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-romantic-rose/10 to-romantic-gold/10 border-romantic-rose/20 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="font-playfair text-3xl text-romantic-rose mb-6">
                Tempo Juntos
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Anos', value: timeLeft.years },
                  { label: 'Meses', value: timeLeft.months },
                  { label: 'Semanas', value: timeLeft.weeks },
                  { label: 'Dias', value: timeLeft.days },
                ].map((item, index) => (
                  <div key={index} className="bg-card p-4 rounded-xl shadow-md">
                    <div className="text-3xl md:text-4xl font-bold text-romantic-rose font-playfair">
                      {item.value}
                    </div>
                    <div className="text-sm text-romantic-text font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-4">
                {[
                  { label: 'Horas', value: timeLeft.hours },
                  { label: 'Minutos', value: timeLeft.minutes },
                  { label: 'Segundos', value: timeLeft.seconds },
                ].map((item, index) => (
                  <div key={index} className="bg-card p-3 rounded-xl shadow-md">
                    <div className="text-2xl md:text-3xl font-bold text-romantic-rose font-playfair">
                      {item.value}
                    </div>
                    <div className="text-xs text-romantic-text font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Music Player Section - Static */}
        <section className="max-w-2xl mx-auto mb-16">
          <Card className="bg-card/80 backdrop-blur border-romantic-rose/20 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="font-playfair text-2xl text-romantic-rose mb-6 flex items-center justify-center gap-2">
                  <Music className="animate-float" />
                  Nossa Música
                </h3>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-romantic-rose/20 rounded-full flex items-center justify-center">
                    <Music className="text-romantic-rose" size={24} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-romantic-text font-medium">Garden of Eden - Lady Gaga</p>
                    <a 
                      href={musicUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-romantic-rose hover:bg-romantic-red text-white px-6 py-3 rounded-full transition-colors"
                    >
                      <Play className="inline mr-2" size={16} />
                      Ouvir nossa música
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-romantic-rose/20">
        <p className="text-romantic-text font-inter">
          Feito com <Heart className="inline text-romantic-red animate-heartbeat" size={16} /> por você
        </p>
      </footer>
    </div>
  );
};

export default Index;
