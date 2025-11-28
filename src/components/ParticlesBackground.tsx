import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current!; //access actual dom element, ! tells TypeScript that you know it won’t be null.
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 50;
    const colors = ["rgba(255,255,255,0.7)"];

    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height; //Random starting X/Y positions.
        this.radius = Math.random() * 2 + 1; //Each particle gets a random size between 1 and 3px.
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.5) * 0.5; //Random speed from -0.25 to +0.25.
        this.speedY = (Math.random() - 0.5) * 0.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); //circle shaped
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX; //Bounce off the edges.
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;

        this.draw(); //Draws the updated particle.
      }
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function handleResize() {
      //Adjusts canvas size when window resizes.
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    }

    handleResize(); //Set initial canvas size.
    window.addEventListener("resize", handleResize); //Listen for window resizing.

    let animationId: number;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); //Clears previous frame.
      particles.forEach((particle) => particle.update());
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize); //Stops animation and removes event listeners when component unmounts.
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    >
      ParticlesBackground
    </canvas>
  );
}
