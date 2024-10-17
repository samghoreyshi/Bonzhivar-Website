import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Ensure audio is ready to play before any action
  const handleCanPlay = () => {
    audioRef.current.play();
  };

  // Handle when audio ends
  const handleEnded = () => {
    setIsPlaying(false);
    audioRef.current.currentTime = 0;  // Reset to start on finish
  };

  // Waveform animation
  const waveformAnimation = {
    scaleY: isPlaying ? [1, 1.5, 1] : 1,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'mirror'
    }
  };

  // Number of bars for each side of the mirrored waveform
  const numberOfBars = 20;

  return (
    <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg shadow-lg w-full">
      {/* Play/Pause Button */}
      <button onClick={togglePlayPause} className="text-2xl text-accent mr-4">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      
      {/* Waveform */}
      <div className="flex space-x-1">
        {/* Left Side of Mirrored Waveform */}
        {[...Array(numberOfBars)].map((_, index) => (
          <motion.div
            key={`left-${index}`}
            className="w-2 bg-accent rounded transform"
            initial={{ scaleY: 1 }}
            animate={waveformAnimation}
            style={{
              height: `${Math.random() * 20 + 10}px`,
              transformOrigin: 'bottom', // Ensures animation scales from the bottom
            }}
          />
        ))}

        {/* Right Side of Mirrored Waveform */}
        {[...Array(numberOfBars)].map((_, index) => (
          <motion.div
            key={`right-${index}`}
            className="w-2 bg-accent rounded transform"
            initial={{ scaleY: 1 }}
            animate={waveformAnimation}
            style={{
              height: `${Math.random() * 20 + 10}px`,
              transformOrigin: 'bottom', // Ensures animation scales from the bottom
            }}
          />
        ))}
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/Audios/interior-design.mp3"  // Replace with your file path or URL
        preload="auto"
        onEnded={handleEnded}
        onCanPlay={handleCanPlay}
        type="audio/mpeg"
      />
    </div>
  );
};

export default AudioPlayer;
