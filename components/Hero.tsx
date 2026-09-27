"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type MousePosition = {
  x: number;
  y: number;
};

/* -----------------------------------------
   3D CUBE
----------------------------------------- */

function TestCube({
  mouse,
}: {
  mouse: React.MutableRefObject<MousePosition>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;

    // Mouse X controls left/right rotation
    const targetRotationY =
      mouse.current.x * 0.8;

    // Mouse Y controls up/down rotation
    const targetRotationX =
      mouse.current.y * 0.5;

    // Smoothly move toward mouse position
    meshRef.current.rotation.y =
      THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY,
        0.08
      );

    meshRef.current.rotation.x =
      THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotationX,
        0.08
      );
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5,1.5,1.5]} />

      <meshStandardMaterial
        color="#142e50"
        roughness={0.3}
        metalness={0.05}
      />
    </mesh>
  );
}


/* -----------------------------------------
   THREE.JS SCENE
----------------------------------------- */

function AvatarScene({
  mouse,
}: {
  mouse: React.MutableRefObject<MousePosition>;
}) {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6],
        fov: 35,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      {/* Lighting */}

      <ambientLight intensity={3} />

      <directionalLight
        position={[4,6, 5]}
        intensity={4}
      />

      <directionalLight
        position={[-4, 3, 4]}
        intensity={2.5}
      />
       <directionalLight
    position={[0, 2, 6]}
    intensity={2}
  />

      {/* Cube */}

      <TestCube mouse={mouse} />
    </Canvas>
  );
}


/* -----------------------------------------
   HERO
----------------------------------------- */

export default function Hero() {
  const mouse = useRef<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      /*
       * Convert mouse position:
       *
       * left   = -1
       * center =  0
       * right  = +1
       *
       * top    = +1
       * center =  0
       * bottom = -1
       */

      mouse.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      mouse.current.y =
        -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <section
      className="
        relative
        h-screen
        min-h-[700px]
        w-full
        overflow-hidden
        bg-[#e8ebef]
        text-black
      "
    >

      {/* --------------------------------
          INTRO
      -------------------------------- */}

      <div
        className="
          absolute
          left-[3.5%]
          top-[7%]
          z-20
          flex
          items-center
          gap-3
          text-[clamp(30px,3vw,44px)]
          tracking-[-2px]
        "
      >
        <span>👋</span>

        <span>
          Hola !, I'm
        </span>
      </div>


      {/* --------------------------------
          NAME
      -------------------------------- */}

      <h1
        className="
          absolute
          left-[2.5%]
          top-[18%]
          z-10
          m-0
          text-[clamp(100px,14vw,190px)]
          font-medium
          leading-[0.8]
          tracking-[-9px]
          text-[#142e50]
        "
      >
        SAGAR
      </h1>


      {/* --------------------------------
          RIGHT CONTENT
      -------------------------------- */}

      <div
        className="
          absolute
          right-[2.5%]
          top-[19%]
          z-20
          text-right
        "
      >
        <div
          className="
            text-[clamp(90px,9vw,150px)]
            font-medium
            leading-[0.8]
            tracking-[-7px]
          "
        >
          WEB
        </div>

        <div
          className="
            text-[clamp(60px,6vw,105px)]
            leading-[0.95]
            tracking-[-5px]
            text-[#182b47]
          "
        >
          DEVELOPER
        </div>

        <p
          className="
            mt-7
            text-[clamp(16px,1.5vw,24px)]
            font-semibold
            leading-[1.3]
            text-[#294462]
          "
        >
          Crafting Your Digital
          <br />
          Universe
        </p>
      </div>


      {/* --------------------------------
          3D CUBE
      -------------------------------- */}

      <div
        className="
          absolute
          bottom-[-5%]
          left-1/2
          z-10
          h-[80vh]
          w-[min(700px,55vw)]
          -translate-x-1/2
        "
      >
        <AvatarScene mouse={mouse} />
      </div>


      {/* --------------------------------
          CONTACT
      -------------------------------- */}

      <div
        className="
          absolute
          bottom-[4%]
          left-[2%]
          z-30
          flex
          flex-col
          gap-2.5
          text-[17px]
        "
      >
        <span className="text-[#536276]">
          Let's connect
        </span>

        <a
          href="mailto:hello@example.com"
          className="transition-opacity hover:opacity-50"
        >
          hello@example.com
        </a>

        <span className="mt-2.5 text-[#536276]">
          Based in India
        </span>
      </div>


      {/* --------------------------------
          SOCIAL
      -------------------------------- */}

      <div
        className="
          absolute
          bottom-[4%]
          right-[2%]
          z-30
          text-right
          text-[16px]
        "
      >
        <div className="flex gap-5">

          <span className="text-[#536276]">
            For cool sh*t
          </span>

          <a
            href="#"
            className="transition-opacity hover:opacity-50"
          >
            GitHub
          </a>

          <a
            href="#"
            className="transition-opacity hover:opacity-50"
          >
            LinkedIn
          </a>

        </div>

        <span className="mt-4 block text-[#536276]">
          Available for freelance
        </span>
      </div>


      {/* --------------------------------
          SCROLL BUTTON
      -------------------------------- */}

      <button
        aria-label="Scroll down"
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          })
        }
        className="
          absolute
          bottom-[2%]
          left-1/2
          z-40
          flex
          h-[50px]
          w-[50px]
          -translate-x-1/2
          items-center
          justify-center
          rounded-full
          bg-black
          text-[28px]
          text-white
          transition-transform
          hover:-translate-x-1/2
          hover:-translate-y-1
        "
      >
        ↓
      </button>

    </section>
  );
}