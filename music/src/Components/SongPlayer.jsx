import React, { useState } from 'react';

export default function SongPlayer() {
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(200);
  const [paused, setPaused] = useState(false);

  const formatDuration = (value) => {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  };

  const handlePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <div className="w-96 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center">
          {/* Cover Image */}
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200"></div>
          {/* Song Details */}
          <div className="ml-3">
            <p className="font-bold">Song Title</p>
            <p className="text-sm text-gray-600">Artist Name</p>
          </div>
        </div>
        {/* Slider */}
        <input
          type="range"
          min={0}
          max={duration}
          value={position}
          className="w-full mt-4"
          onChange={(e) => setPosition(parseInt(e.target.value))}
        />
        {/* Duration */}
        <div className="flex justify-between mt-1">
          <p>{formatDuration(position)}</p>
          <p>-{formatDuration(duration - position)}</p>
        </div>
        {/* Controls */}
        <div className="flex justify-center mt-4">
          <button onClick={handlePlayPause} className="mx-2">
            {paused ? 'Play' : 'Pause'}
          </button>
          <button className="mx-2">Next</button>
        </div>
      </div>
    </div>
  );
}
