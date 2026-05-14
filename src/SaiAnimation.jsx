import React, { useEffect, useState } from "react";

export default function SaiAnimation() {

    const [round, setRound] = useState(1);

    const [direction, setDirection] =
        useState("forward");

    const [isRunning, setIsRunning] =
        useState(true);

    const [animKey, setAnimKey] =
        useState(0);

    useEffect(() => {

        if (!isRunning) return;

        const timer = setTimeout(() => {

            if (round === 7) {
                setIsRunning(false);
                return;
            }

            setDirection((prev) =>
                prev === "forward"
                    ? "backward"
                    : "forward"
            );

            setRound((prev) => prev + 1);

            setAnimKey((prev) => prev + 1);

        }, 3000);

        return () => clearTimeout(timer);

    }, [round, isRunning]);

    return (
        <>
            <style>
                {`
          .sai-wrapper {
            position: absolute;

            bottom: 11%;
            left: 35%;

            width: 28%;
            height: 70px;

            z-index: 15;

            pointer-events: none;
          }

          /* =========================
                PERSON
          ========================== */

          .walker {
            position: absolute;

            bottom: 0;
            left: 0;

            width: 26px;
            height: 52px;

            animation-duration: 3s;
            animation-timing-function: linear;
            animation-fill-mode: forwards;
          }

          /* HEAD */

          .walker-head {
            position: absolute;

            top: 0;
            left: 8px;

            width: 10px;
            height: 10px;

            border-radius: 50%;

            background: #ffffff;

            box-shadow:
              0 0 8px rgba(255,255,255,0.9);
          }

          /* BODY */

          .walker-body {
            position: absolute;

            top: 10px;
            left: 10px;

            width: 6px;
            height: 18px;

            border-radius: 10px;

            background: #dff6ff;
          }

          /* ARMS */

          .arm-left,
          .arm-right {
            position: absolute;

            top: 14px;

            width: 12px;
            height: 3px;

            background: #dff6ff;

            border-radius: 10px;

            transform-origin: center;
          }

          .arm-left {
            left: 0;

            animation: armSwingLeft 0.5s infinite alternate;
          }

          .arm-right {
            right: 0;

            animation: armSwingRight 0.5s infinite alternate;
          }

          /* LEGS */

          .leg-left,
          .leg-right {
            position: absolute;

            top: 27px;

            width: 3px;
            height: 18px;

            background: #ffffff;

            border-radius: 10px;

            transform-origin: top center;
          }

          .leg-left {
            left: 8px;

            animation: legSwingLeft 0.4s infinite alternate;
          }

          .leg-right {
            right: 8px;

            animation: legSwingRight 0.4s infinite alternate;
          }

          /* =========================
                MOVEMENT
          ========================== */

          .move-forward {
            animation-name: moveForward;
          }

          .move-backward {
            animation-name: moveBackward;
          }

          @keyframes moveForward {

            0% {
              left: 0%;
              transform: scaleX(1);
            }

            100% {
              left: 100%;
              transform: scaleX(1);
            }
          }

          @keyframes moveBackward {

            0% {
              left: 100%;
              transform: scaleX(-1);
            }

            100% {
              left: 0%;
              transform: scaleX(-1);
            }
          }

          /* =========================
                LIMB SWING
          ========================== */

          @keyframes armSwingLeft {
            from {
              transform: rotate(60deg);
            }

            to {
              transform: rotate(-25deg);
            }
          }

          @keyframes armSwingRight {
            from {
              transform: rotate(-25deg);
            }

            to {
              transform: rotate(25deg);
            }
          }

          @keyframes legSwingLeft {
            from {
              transform: rotate(20deg);
            }

            to {
              transform: rotate(-20deg);
            }
          }

          @keyframes legSwingRight {
            from {
              transform: rotate(-20deg);
            }

            to {
              transform: rotate(20deg);
            }
          }

          /* =========================
                ROUND BADGE
          ========================== */

          .round-badge {
            position: absolute;

            top: -10px;
            right: -10px;

            background: #1a4f44;
            color: white;

            padding: 6px 10px;

            border-radius: 20px;

            font-size: 12px;
            font-weight: 700;

            box-shadow:
              0 2px 8px rgba(0,0,0,0.2);
          }

          /* =========================
                MOBILE
          ========================== */

          @media (max-width: 768px) {

            .sai-wrapper {

              bottom: 9%;
              left: 35%;

              width: 30%;
              height: 50px;
            }

            .walker {
              transform: scale(0.7);
              transform-origin: bottom left;
            }

            .round-badge {
              font-size: 10px;
              padding: 4px 8px;
            }
          }
        `}
            </style>

            <div className="sai-wrapper">

                {/* PERSON */}

                {isRunning && (
                    <div
                        key={animKey}
                        className={`walker ${direction === "forward"
                            ? "move-forward"
                            : "move-backward"
                            }`}
                    >
                        <div className="walker-head" />

                        <div className="walker-body" />

                        <div className="arm-left" />
                        <div className="arm-right" />

                        <div className="leg-left" />
                        <div className="leg-right" />
                    </div>
                )}

                {/* ROUND COUNTER */}

                <div className="round-badge">
                    {round}/7
                </div>
            </div>
        </>
    );
}
