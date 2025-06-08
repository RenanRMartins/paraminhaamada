
import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Play, Pause, Volume2, ExternalLink } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const openYouTube = () => {
    window.open('https://www.youtube.com/watch?v=tep9uGsVzK4', '_blank');
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Tentativa de tocar o áudio, mas como é um link do YouTube, vamos abrir o link
        audioRef.current.play().catch(error => {
          console.log('Erro ao reproduzir áudio, abrindo YouTube:', error);
          openYouTube();
        });
        setIsPlaying(true);
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
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
                  <source src="https://www.youtube.com/watch?v=tep9uGsVzK4" type="audio/mpeg" />
                  Seu navegador não suporta áudio HTML5.
                </audio>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleMusic}
                      className="bg-romantic-rose hover:bg-romantic-red text-white p-3 md:p-4 rounded-full transition-colors shadow-lg hover:shadow-xl touch-manipulation"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <Play size={20} />
                    </button>
                    
                    <button
                      onClick={openYouTube}
                      className="bg-romantic-gold hover:bg-romantic-gold/80 text-white p-3 md:p-4 rounded-full transition-colors shadow-lg hover:shadow-xl touch-manipulation flex items-center gap-2"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      <ExternalLink size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2 text-romantic-text">
                    <Volume2 size={16} />
                    <span className="text-xs md:text-sm text-center">
                      Toque para ouvir no YouTube
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
