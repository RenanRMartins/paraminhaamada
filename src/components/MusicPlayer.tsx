
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
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="max-w-2xl mx-auto mb-16">
      <Card className="bg-card/80 backdrop-blur border-romantic-rose/20 shadow-xl">
        <CardContent className="p-8">
          <div className="text-center">
            <h3 className="font-playfair text-2xl text-romantic-rose mb-6 flex items-center justify-center gap-2">
              <Music className="animate-float" />
              Nossa Música
            </h3>
            
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto bg-romantic-rose/20 rounded-full flex items-center justify-center">
                <Music className="text-romantic-rose" size={24} />
              </div>
              
              <div className="space-y-2">
                <p className="text-romantic-text font-medium">Garden of Eden - Lady Gaga</p>
              </div>

              <div className="bg-romantic-pink/30 rounded-2xl p-6">
                <audio
                  ref={audioRef}
                  src="https://www.soundjay.com/misc/sounds/magical_forest.mp3"
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                />
                
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={toggleMusic}
                    className="bg-romantic-rose hover:bg-romantic-red text-white p-4 rounded-full transition-colors shadow-lg hover:shadow-xl"
                  >
                    {isPlaying ? (
                      <Pause size={24} />
                    ) : (
                      <Play size={24} />
                    )}
                  </button>
                  
                  <div className="flex items-center gap-2 text-romantic-text">
                    <Volume2 size={20} />
                    <span className="text-sm">
                      {isPlaying ? 'Tocando...' : 'Clique para ouvir'}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-romantic-text/70 italic">
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
