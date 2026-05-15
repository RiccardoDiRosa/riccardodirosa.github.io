import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Maximize, Volume2, VolumeX } from 'lucide-react';
import { cn } from '../lib/utils';

interface VideoPlayerProps {
  src: string;
  posterText: string;
}

export function CustomVideoPlayer({ src, posterText }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-md bg-black">
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-cover"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        loop
        playsInline
        muted={isMuted}
      />
      
      {/* Overlay & Poster when paused/unstarted */}
      <div 
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center bg-black/60 transition-opacity duration-300",
          isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <div className="font-display mb-6 text-2xl italic text-accent-gold md:text-3xl">
          {posterText}
        </div>
        
        <button 
          onClick={togglePlay}
          className="group/btn relative flex h-20 w-20 items-center justify-center rounded-full border border-accent-gold bg-black/50 backdrop-blur-sm transition-transform hover:scale-110"
        >
          {/* Animated pulse shadow */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(200,169,110,0.5)] transition-shadow group-hover/btn:shadow-[0_0_35px_rgba(200,169,110,0.8)] animate-pulse" />
          <Play className="relative ml-2 h-8 w-8 text-accent-gold" fill="currentColor" />
        </button>
        
        <div className="mt-8 text-center">
          <div className="text-sm font-medium tracking-widest text-[#F5F0E8] uppercase">
            Guarda il sito in azione
          </div>
          <div className="mt-1 font-mono text-xs text-text-muted">
            Clicca per riprodurre il video
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div 
        className={cn(
          "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300",
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        )}
      >
        {/* Progress bar */}
        <div className="mb-4 h-1 w-full cursor-pointer bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent-gold transition-all duration-75 relative"
            style={{ width: `${progress}%` }}
          >
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#F5F0E8] rounded-full shadow-[0_0_10px_rgba(200,169,110,1)]"/>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <button onClick={togglePlay} className="text-white hover:text-accent-gold transition-colors">
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          
          <div className="flex gap-4">
             <button onClick={toggleMute} className="text-white hover:text-accent-gold transition-colors">
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
             </button>
             <button onClick={toggleFullScreen} className="text-white hover:text-accent-gold transition-colors">
               <Maximize className="h-5 w-5" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
