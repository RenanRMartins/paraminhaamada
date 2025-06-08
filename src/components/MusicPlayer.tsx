
import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Play, Pause, Volume2 } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Para iOS, precisamos de uma interação do usuário para tocar áudio
        audioRef.current.play().catch(error => {
          console.log('Erro ao reproduzir áudio:', error);
        });
        setIsPlaying(true);
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    // Loop automático
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="max-w-2xl mx-auto mb-8 md:mb-16 px-4">
      <Card className="bg-card/80 backdrop-blur border-romantic-rose/20 shadow-xl">
        <CardContent className="p-4 md:p-8">
          <div className="text-center">
            <h3 className="font-playfair text-xl md:text-2xl text-romantic-rose mb-4 md:mb-6 flex items-center justify-center gap-2">
              <Music className="animate-float" size={20} />
              Nossa Música
            </h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-romantic-rose/20 rounded-full flex items-center justify-center">
                <Music className="text-romantic-rose" size={20} />
              </div>
              
              <div className="space-y-2">
                <p className="text-romantic-text font-medium text-sm md:text-base">Garden of Eden - Lady Gaga</p>
              </div>

              <div className="bg-romantic-pink/30 rounded-xl md:rounded-2xl p-4 md:p-6">
                <audio
                  ref={audioRef}
                  preload="none"
                  onEnded={handleAudioEnded}
                  className="hidden"
                >
                  <source src="https://www.soundjay.com/misc/sounds/magical_forest.mp3" type="audio/mpeg" />
                  Seu navegador não suporta áudio HTML5.
                </audio>
                
                <div className="flex items-center justify-center gap-3 md:gap-4">
                  <button
                    onClick={toggleMusic}
                    className="bg-romantic-rose hover:bg-romantic-red text-white p-3 md:p-4 rounded-full transition-colors shadow-lg hover:shadow-xl touch-manipulation"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    {isPlaying ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} />
                    )}
                  </button>
                  
                  <div className="flex items-center gap-2 text-romantic-text">
                    <Volume2 size={16} />
                    <span className="text-xs md:text-sm">
                      {isPlaying ? 'Tocando...' : 'Toque para ouvir'}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs md:text-sm text-romantic-text/70 italic px-2">
                "Nossa música especial que toca no coração"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default MusicPlayer;
