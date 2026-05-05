import React, { useState } from "react";
import kabaImg from "./assets/kabba.png";
import { useNavigate } from "react-router-dom";

const TawafGuide = () => {
  const [round, setRound] = useState(1);

  const duas = [
    {
      arabic: "اللّٰهُ أَكْبَرُ، سُبْحَانَ اللّٰهِ وَالْحَمْدُ لِلّٰهِ",
      transliteration: "Allahu Akbar, SubhanAllahi wal-Hamdu lillah",
      translation:
        "Allah is the Greatest. Glory be to Allah, all praise belongs to Allah.",
    },
    {
      arabic: "سُبْحَانَ اللّٰهِ وَبِحَمْدِهِ",
      transliteration: "SubhanAllahi wa bihamdihi",
      translation: "Glory be to Allah and praise Him.",
    },
    {
      arabic: "اللّهُمَّ اغْفِرْ لِي",
      transliteration: "Allahumma-ghfir li",
      translation: "O Allah, forgive me.",
    },
    {
      arabic: "اللّهُمَّ ارْحَمْنِي",
      transliteration: "Allahummar-hamni",
      translation: "O Allah, have mercy on me.",
    },
    {
      arabic: "اللّهُمَّ اهْدِنِي",
      transliteration: "Allahumma ihdini",
      translation: "O Allah, guide me.",
    },
    {
      arabic: "اللّهُمَّ ارْزُقْنِي",
      transliteration: "Allahumma-rzuqni",
      translation: "O Allah, provide for me.",
    },
    {
      arabic: "اللّهُمَّ تَقَبَّلْ مِنِّي",
      transliteration: "Allahumma taqabbal minni",
      translation: "O Allah, accept from me.",
    },
  ];

  const nextRound = () => {
    if (round < 7) setRound(round + 1);
  };

  const currentDua = duas[round - 1];
  const navigate = useNavigate();
  return (
    <div className="page">
      {/* HEADER */}
      <div className="header">
        <div className="title">
          <span className="back" onClick={() => navigate("/dashboard")}>
            ←
          </span>
          <h2>Tawaf Ritual Guide</h2>
        </div>
        <span className="step">Step: Umrah Counter</span>
      </div>

      <div className="container">
        {/* LEFT */}
        <div className="card left">
          <h3>Kaba'a Visual Guide</h3>
          <img src={kabaImg} alt="kaba" />
          <p>Start your Tawaf at the Hajar al-Aswad (Black Stone) line.</p>
        </div>

        {/* RIGHT */}
        <div className="card right">
          {/* ROUNDS */}
          <div className="rounds">
            {[1, 2, 3, 4, 5, 6, 7].map((r) => (
              <div key={r} className="round-item">
                <div className={`circle ${round === r ? "active" : ""}`}>
                  {r}
                </div>
                <span>Round</span>
              </div>
            ))}
          </div>

          {/* BADGE */}
          <div className="badge">CURRENT ROUND: {round}</div>

          {/* DUA */}
          <div className="dua">
            <h1>{currentDua.arabic}</h1>

            <p className="label">TRANSLITERATION</p>
            <p className="green">{currentDua.transliteration}</p>

            <p className="label">TRANSLATION</p>
            <p className="gray">{currentDua.translation}</p>
          </div>

          {/* BOTTOM */}
          <div className="bottom">
            <span>Rukn Yamani to Hajr-e-Aswad:</span>
            <p>
              رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً
              وَقِنَا عَذَابَ النَّارِ
            </p>
          </div>

          {/* BUTTON */}
          <button onClick={nextRound} disabled={round === 7}>
            MARK ROUND {round} AS DONE
          </button>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .page {
          height: 100vh;
          overflow: hidden;
          background: #f4f6f5;
          font-family: 'Inter', sans-serif;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        /* HEADER */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .title {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .back {
          font-size: 20px;
          cursor: pointer;
        }

        .step {
          color: #555;
          font-size: 14px;
        }

        /* MAIN */
        .container {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 20px;
        }

        .card {
          background: #fff;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          height: 100%;
        }

        /* LEFT */
        .left img {
          width: 100%;
          border-radius: 10px;
          margin: 15px 0;
        }

        .left p {
          color: #777;
          font-size: 14px;
        }

        /* RIGHT */
        .right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* ROUNDS */
        .rounds {
          display: flex;
          justify-content: space-between;
          padding: 0 40px;
        }

        .round-item {
          text-align: center;
        }

        .circle {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #eee;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .circle.active {
          background: #0f3d2e;
          color: #fff;
        }

        .round-item span {
          font-size: 12px;
          color: #888;
        }

        /* BADGE */
        .badge {
          background: #6c757d;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          margin: 10px auto;
          width: fit-content;
        }

        /* DUA */
        .dua h1 {
          font-size: 34px;
          text-align: center;
          margin: 20px 0;
          font-family: "Amiri", serif;
          color:#135f43
        }

        .label {
          text-align: center;
          font-size: 11px;
          color: #888;
          margin-top: 10px;
        }

        .green {
          text-align: center;
          color: #135f43;
          font-style: italic;
        }

        .gray {
          text-align: center;
          color: #555;
        }

        /* BOTTOM */
        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #eaf5f1;
          padding: 15px;
          border-left: 4px solid #0f3d2e;
          border-radius: 8px;
          gap: 20px;
        }

        .bottom span {
          font-weight: 600;
          color: #0f3d2e;
        }

        .bottom p {
          direction: rtl;
          font-size: 20px;
          margin: 0;
        }

        /* BUTTON */
        button {
          background: #0f3d2e;
          color: white;
          padding: 14px 28px;
          border: none;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          width: fit-content;
          align-self: center;
        }

        button:disabled {
          background: #a5bdb6;
        }
      `}</style>
    </div>
  );
};

export default TawafGuide;
