import bgm from "@/assets/sound/bgm.mp3";
import gameover from "@/assets/sound/gameover.mp3";
import gamestart from "@/assets/sound/gamestart.mp3";
import move from "@/assets/sound/move.mp3";
import nextfloor from "@/assets/sound/nextfloor.mp3";
import secret from "@/assets/sound/secret.mp3";

export const audioConfig = $state({
  volume: 1,
});

const AudioElement = globalThis.Audio;
type HTMLAudioElementWithGain = HTMLAudioElement & { _gain: number };

interface AudioAssetConfig {
  src: string;
  gain: number;
  loop?: boolean;
}

const audio = {
  gameover: loadAudioAsset({
    src: gameover,
    gain: 0.1,
  }),
  gamestart: loadAudioAsset({
    src: gamestart,
    gain: 0.1,
  }),
  move: loadAudioAsset({
    src: move,
    gain: 0.1,
  }),
  nextfloor: loadAudioAsset({
    src: nextfloor,
    gain: 1,
  }),
  secret: loadAudioAsset({
    src: secret,
    gain: 0.1,
  }),
  bgm: loadAudioAsset({
    src: bgm,
    gain: 0.1,
    loop: true,
  }),
} satisfies Record<string, Promise<HTMLAudioElementWithGain | null>>;

type AudioName = keyof typeof audio;

function loadAudioAsset({
  src,
  gain,
  loop,
}: AudioAssetConfig): Promise<HTMLAudioElementWithGain | null> {
  return new Promise(async (resolve) => {
    const audio = new AudioElement(src) as HTMLAudioElementWithGain;

    audio._gain = gain;
    audio.currentTime = 0;
    audio.loop = !!loop;

    audio.onloadedmetadata = () => {
      resolve(audio);
    };
    audio.onerror = () => {
      console.error(`Failed to load audio asset: ${src}`);
      resolve(null);
    };
  });
}

export async function playAudio(name: AudioName) {
  const el = await audio[name];
  if (!el) {
    return;
  }

  el.volume = el._gain * audioConfig.volume;
  el.currentTime = 0;
  el.play();
}

export async function stopAudio(name: AudioName) {
  const el = await audio[name];
  if (!el) {
    return;
  }

  el.pause();
}
