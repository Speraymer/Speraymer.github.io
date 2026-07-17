"use client";

import { useEffect, useRef, useState } from "react";

const stateKey = "rewind-young-audio-state";
const timeKey = "rewind-young-audio-time";

export default function FloatingAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dismissedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [closed, setClosed] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const savedState = sessionStorage.getItem(stateKey);
    if (savedState === "closed") {
      dismissedRef.current = true;
      setClosed(true);
      return;
    }

    const restoreTime = () => {
      const savedTime = Number(sessionStorage.getItem(timeKey));
      if (Number.isFinite(savedTime) && savedTime > 0 && savedTime < audio.duration) {
        audio.currentTime = savedTime;
      }
    };

    if (audio.readyState >= 1) restoreTime();
    else audio.addEventListener("loadedmetadata", restoreTime, { once: true });

    if (savedState !== "paused") {
      audio.play().catch(() => setAutoplayBlocked(true));
    } else {
      setAutoplayBlocked(true);
    }
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        sessionStorage.setItem(stateKey, "playing");
        setAutoplayBlocked(false);
      } catch {
        setAutoplayBlocked(true);
      }
    } else {
      audio.pause();
      sessionStorage.setItem(stateKey, "paused");
    }
  };

  const closePlayer = () => {
    dismissedRef.current = true;
    const audio = audioRef.current;
    audio?.pause();
    sessionStorage.setItem(stateKey, "closed");
    setClosed(true);
  };

  if (closed) return null;

  return (
    <aside className="audio-player" aria-label="网站背景音乐播放器">
      <audio
        ref={audioRef}
        src="/audio/color-rush.mp3"
        autoPlay
        playsInline
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => {
          setPlaying(false);
          if (!dismissedRef.current) sessionStorage.setItem(stateKey, "paused");
        }}
        onTimeUpdate={(event) => {
          sessionStorage.setItem(timeKey, String(event.currentTarget.currentTime));
        }}
        onEnded={() => sessionStorage.removeItem(timeKey)}
      />
      <span className="audio-player-pulse" data-playing={playing} aria-hidden="true" />
      <button
        className="audio-player-main"
        type="button"
        onClick={togglePlayback}
        aria-label={playing ? "暂停 Color Rush" : "播放 Color Rush"}
      >
        <small>{autoplayBlocked && !playing ? "点击播放" : "NOW PLAYING"}</small>
        <strong>Color Rush</strong>
        <span>{playing ? "暂停 Ⅱ" : "播放 ▶"}</span>
      </button>
      <button
        className="audio-player-close"
        type="button"
        onClick={closePlayer}
        aria-label="关闭音乐播放器"
        title="关闭播放器"
      >
        ×
      </button>
    </aside>
  );
}
