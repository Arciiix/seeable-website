import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export const NUMBER_OF_FRAMES = 76;
export const ROTATION_FRAMES_FILENAME = Array.from(
  { length: NUMBER_OF_FRAMES },
  (_, i) => i + 1
).map((i) => `/rotation-frames/frame_${i.toString().padStart(2, "0")}.png`);

export default function LiDARRotationAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Latest is a value between 0 and 1. Let's assume we end at 80% of the scroll
    const frameIndex = NUMBER_OF_FRAMES - Math.floor(latest * NUMBER_OF_FRAMES);
    const img = new Image();
    img.src = ROTATION_FRAMES_FILENAME[frameIndex];

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  });

  useEffect(() => {
    // Initially load the first image

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = ROTATION_FRAMES_FILENAME[0];
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
    };
  }, []);

  return (
    <div
      className="w-full mx-auto h-[3000px] relative mt-[300px]"
      ref={(r) => (wrapperRef.current = r)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-seeable-dark" />
      <canvas
        ref={(r) => (canvasRef.current = r)}
        className="top-1/2 -translate-y-1/2 sticky mx-auto transition-all w-[90vw] lg:w-max"
      />
    </div>
  );
}
