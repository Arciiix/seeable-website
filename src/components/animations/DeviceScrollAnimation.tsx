import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const NUMBER_OF_FRAMES = 54;
export const DEVICE_FRAMES_FILENAMES = Array.from(
  { length: NUMBER_OF_FRAMES },
  (_, i) => i + 1
).map((i) => `/device-frames/frame_${i}.png`);

export default function DeviceScrollAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState(400);

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
    img.src = DEVICE_FRAMES_FILENAMES[frameIndex];

    // From 400px to 500px
    setHeight(500 - latest * 100);
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
    img.src = DEVICE_FRAMES_FILENAMES[0];
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
    };
  }, []);

  return (
    <div ref={(r) => (wrapperRef.current = r)}>
      <canvas
        ref={(r) => (canvasRef.current = r)}
        className="sticky transition-all"
        style={{
          height: `${height}px`,
        }}
      ></canvas>
    </div>
  );
}
