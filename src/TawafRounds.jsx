import React, { useState } from "react";

const TawafRounds = () => {
  const [round, setRound] = useState(1);

  const nextRound = () => {
    if (round < 7) {
      setRound(round + 1);
    }
  };

  return (
    <>
      {/* Inline CSS inside the component */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

          .tawaf-container {
            font-family: 'Inter', sans-serif;
            background-color: #ffffff;
            padding: 30px;
            border-radius: 12px;
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }

          /* Rounds Indicators */
          .rounds-indicators {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            padding: 0 10px;
          }

          .round-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }

          .circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 16px;
            transition: all 0.3s ease;
          }

          .circle.active {
            background-color: #1a4f44;
            color: white;
            box-shadow: 0 4px 8px rgba(26, 79, 68, 0.3);
          }

          .circle.inactive {
            background-color: #f0f0f0;
            color: #1a4f44;
          }

          .round-text {
            font-size: 12px;
            color: #888;
            margin: 0;
            font-weight: 500;
          }

          /* Current Round Badge */
          .current-round-badge {
            margin-bottom: 30px;
          }

          .current-round-badge span {
            background-color: #6c757d;
            color: white;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.5px;
          }

          /* Dua Section */
          .dua-section {
            margin-bottom: 40px;
          }

          .arabic-text {
            font-size: 32px;
            font-weight: 700;
            color: #111;
            margin-bottom: 30px;
            line-height: 1.5;
            font-family: "Traditional Arabic", "Amiri", serif;
          }

          .text-group {
            margin-bottom: 20px;
          }

          .label {
            font-size: 11px;
            font-weight: 700;
            color: #888;
            letter-spacing: 1px;
            margin-bottom: 8px;
          }

          .transliteration {
            font-size: 16px;
            color: #2b8b64;
            font-style: italic;
            margin: 0;
          }

          .translation {
            font-size: 15px;
            color: #555;
            margin: 0;
            line-height: 1.5;
          }

          /* Bottom Dua Card */
          .bottom-dua-card {
            background-color: #f3f9f7;
            border-left: 4px solid #1a4f44;
            padding: 20px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
            text-align: left;
          }

          .bottom-dua-label {
            font-weight: 700;
            color: #1a4f44;
            font-size: 14px;
            flex: 1;
          }

          .bottom-arabic {
            flex: 2;
            text-align: right;
            font-size: 22px;
            font-weight: 600;
            color: #111;
            font-family: "Traditional Arabic", "Amiri", serif;
          }

          /* Mark Done Button */
          .mark-done-btn {
            background-color: #1a4f44;
            color: white;
            border: none;
            border-radius: 30px;
            padding: 16px 40px;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 1px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            width: 100%;
            max-width: 300px;
          }

          .mark-done-btn:hover:not(:disabled) {
            background-color: #133a32;
          }

          .mark-done-btn:disabled {
            background-color: #a0b5af;
            cursor: not-allowed;
          }
        `}
      </style>

      <div className="tawaf-container">
        {/* Rounds Indicators */}
        <div className="rounds-indicators">
          {[1, 2, 3, 4, 5, 6, 7].map((r) => (
            <div key={r} className="round-item">
              <div className={`circle ${round === r ? "active" : "inactive"}`}>
                {r}
              </div>
              <p className="round-text">Round</p>
            </div>
          ))}
        </div>

        {/* Current Round Badge */}
        <div className="current-round-badge">
          <span>CURRENT ROUND: {round}</span>
        </div>

        {/* Main Dua Section */}
        <div className="dua-section">
          <h2 className="arabic-text">
            اللّٰهُ أَكْبَرُ، سُبْحَانَ اللّٰهِ وَالْحَمْدُ لِلّٰهِ
          </h2>

          <div className="text-group">
            <p className="label">TRANSLITERATION</p>
            <p className="transliteration">
              Allahu Akbar, SubhanAllahi wal-Hamdu lillah
            </p>
          </div>

          <div className="text-group">
            <p className="label">TRANSLATION</p>
            <p className="translation">
              Allah is the Greatest. Glory be to Allah, all praise belongs to Allah.
            </p>
          </div>
        </div>

        {/* Bottom Dua Card */}
        <div className="bottom-dua-card">
          <div className="bottom-dua-label">
            Rukn Yamani to Hajr-e-Aswad:
          </div>
          <div className="bottom-arabic">
            رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
          </div>
        </div>

        {/* Mark as Done Button */}
        <button className="mark-done-btn" onClick={nextRound} disabled={round === 7}>
          MARK ROUND {round} AS DONE
        </button>
      </div>
    </>
  );
};

export default TawafRounds;
