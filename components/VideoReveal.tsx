"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [progress, setProgress] = useState(0);

  /* --------------------------------
     MOUSE
  -------------------------------- */

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width) * 2 - 1;

    const y =
      -(
        ((e.clientY - rect.top) / rect.height) * 2 -
        1
      );

    setMouse({
      x,
      y,
    });
  };


  /* --------------------------------
     SCROLL
  -------------------------------- */

  useEffect(() => {
    const updateScroll = () => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      /*
       * Section scroll distance.
       */

      const distance = -rect.top;

      /*
       * Total animation distance.
       */

      const animationDistance =
        window.innerHeight * 1.5;

      const value =
        distance / animationDistance;

      setProgress(
        Math.min(Math.max(value, 0), 1)
      );
    };

    window.addEventListener(
      "scroll",
      updateScroll,
      { passive: true }
    );

    updateScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        updateScroll
      );
    };
  }, []);


  /* --------------------------------
     PHASE 1
     CARD MOVES DOWN
  -------------------------------- */

  /*
   * First 60% of animation:
   *
   * center
   *    ↓
   * bottom
   */

  const moveProgress =
    Math.min(progress / 0.6, 1);


  /*
   * Start at center.
   *
   * Move approximately
   * 40% viewport height downward.
   */

  const moveDown =
    moveProgress *
    window.innerHeight *
    0.42;


  /* --------------------------------
     PHASE 2
     CARD EXPANDS
  -------------------------------- */

  /*
   * Expansion only begins
   * after the card reaches bottom.
   */

  const expandProgress =
    Math.max(
      (progress - 0.6) / 0.4,
      0
    );


  const initialWidth = 750;
  const initialHeight = 420;

  const width =
    initialWidth +
    (window.innerWidth - initialWidth) *
      expandProgress;

  const height =
    initialHeight +
    (window.innerHeight - initialHeight) *
      expandProgress;


  /* --------------------------------
     MOUSE MOVEMENT
  -------------------------------- */

  /*
   * Mouse movement becomes weaker
   * as the video reaches fullscreen.
   */

  const mouseStrength =
    1 - expandProgress;

  const mouseX =
    mouse.x * 300 * mouseStrength;

  const mouseY =
    mouse.y * 180 * mouseStrength;


  /* --------------------------------
     BORDER RADIUS
  -------------------------------- */

  const borderRadius =
    16 - 16 * expandProgress;


  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="
        relative
        h-[250vh]
        w-full
        bg-[#f1f2f4]
      "
    >

      {/* =================================
          STICKY SCREEN
      ================================= */}

      <div
        className="
          sticky
          top-0
          h-screen
          w-full
          overflow-hidden
        "
      >

        {/* =================================
            TOP INFORMATION
        ================================= */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            z-40
            flex
            items-start
            justify-between
            px-6
            py-3
            text-[18px]
            font-medium
          "
        >

          <div>
            <p>
              India Based
            </p>

            <p className="text-gray-400">
              Working internationally
            </p>
          </div>


          <div>
            <p>
              Developer at
            </p>

            <p className="text-gray-400">
              UpWork
            </p>
          </div>


          <div>
            <p>
              Available for freelance work
            </p>

            <p className="text-gray-400">
              November 2025
            </p>
          </div>


          <button
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-black
              text-2xl
              text-white
            "
          >
            🎧
          </button>


          <button
            className="
              rounded-full
              bg-black
              px-8
              py-4
              font-semibold
              text-white
            "
          >
            Get in touch
          </button>

        </div>


        {/* =================================
            BIG TEXT
        ================================= */}

        <h1
          className="
            absolute
            bottom-[8%]
            left-1/2
            z-0
            -translate-x-1/2
            whitespace-nowrap
            text-[clamp(100px,15vw,220px)]
            font-bold
            leading-none
            tracking-[-10px]
            text-[#111]
          "
        >
          WEB ENGINEER
        </h1>


        {/* =================================
            VIDEO
        ================================= */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            z-20
            overflow-hidden
            bg-black
            shadow-2xl
            will-change-transform
          "
          style={{
            width: `${width}px`,

            height: `${height}px`,

            borderRadius:
              `${borderRadius}px`,

            transform: `
              translate3d(
                calc(-50% + ${mouseX}px),
                calc(
                  -50% +
                  ${moveDown}px +
                  ${mouseY}px
                ),
                0
              )
            `,

            transition:
              "transform 0.12s ease-out",
          }}
        >

          <video
            className="
              h-full
              w-full
              object-cover
            "
            src="/videos/coding.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />

        </div>


        {/* =================================
            PROFILE CARD
        ================================= */}

        {/* <div
          className="
            absolute
            bottom-[-10px]
            left-1/2
            z-50
            flex
            w-[820px]
            -translate-x-1/2
            items-center
            gap-5
            rounded-[24px]
            bg-[#111]
            px-4
            py-3
            text-white
          "
        >

          <div
            className="
              h-20
              w-24
              overflow-hidden
              rounded-2xl
              bg-white
            "
          >
            <img
              src="/avatar.png"
              alt="Sagar"
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>


          <div className="flex-1">

            <h2 className="text-xl font-bold">
              SAGAR K. GHOSH
            </h2>

            <p
              className="
                mt-1
                text-sm
                tracking-wide
                text-gray-300
              "
            >
              DEVELOPER, GSAP ANIMATOR,
              FIREBASE BUILDER, MERN
            </p>

          </div>


          <button className="text-3xl">
            ☰
          </button>

        </div> */}

      </div>

    </section>
  );
}