import React from "react";

const SupplicationIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "6px", verticalAlign: "middle", marginBottom: "2px" }}>
        <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
    </svg>
);

const TrashIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg">
        <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
    </svg>
);

const SavedDuas = () => {
    const brandGreen = "#0f4a36";

    const duas = [
        {
            id: 1,
            title: "Dua between Rukn Yamani & Hajar Aswad",
            arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
            meaning: "Our Lord! Grant us goodness in this world and in the Hereafter, and save us from the punishment of the Fire."
        },
        {
            id: 2,
            title: "Dua during Farewell Tawaf (Tawaf al-Wida)",
            arabic: "اللَّهُمَّ إِنِّي عَبْدُكَ وَابْنُ عَبْدِكَ، حَمَلْتَنِي عَلَى مَا سَخَّرْتَ لِي مِنْ خَلْقِكَ",
            meaning: "O Allah, I am Your servant, son of Your servant. You have carried me on what You have made subservient for me of Your creation."
        }
    ];

    return (
        <>
            <style>{`
        .saved-duas-wrapper {
          padding: 20px 40px;
          background-color: #f7f9f8;
          min-height: 100vh;
          font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Navbar Styling Reused */
        .header-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding: 10px 0;
        }

        .brand-logo {
          font-weight: 900;
          font-size: 24px;
          color: ${brandGreen};
          letter-spacing: 1px;
        }

        .nav-links {
          display: flex;
          border: 1.5px solid ${brandGreen};
          border-radius: 30px;
          padding: 5px;
          background: white;
        }

        .nav-item {
          padding: 8px 24px;
          font-size: 14px;
          font-weight: 500;
          color: #555;
          cursor: pointer;
          transition: 0.3s;
          border-right: 1px solid #e0e0e0;
        }
        
        .nav-item:last-child {
          border-right: none;
        }

        .nav-item.active {
          color: ${brandGreen};
          font-weight: 800;
        }

        /* Page Content */
        .sd-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .sd-title {
          color: ${brandGreen};
          font-size: 32px;
          font-weight: 800;
          margin: 0 0 10px 0;
        }

        .sd-subtitle {
          color: #777;
          font-size: 15px;
          margin: 0;
        }

        .sd-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .sd-card {
          background-color: #ffffff;
          border: 1.5px solid ${brandGreen};
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }

        .sd-badge {
          display: inline-flex;
          align-items: center;
          background-color: #eaf1ef;
          color: ${brandGreen};
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .sd-card-title {
          font-size: 18px;
          font-weight: 800;
          color: #111;
          margin: 0 0 25px 0;
        }

        .sd-arabic {
          font-size: 32px;
          text-align: center;
          line-height: 2;
          color: #222;
          margin-bottom: 30px;
          font-family: 'Amiri', 'Scheherazade New', serif;
        }

        .sd-meaning {
          font-size: 14px;
          color: #666;
          font-style: italic;
          line-height: 1.6;
          margin: 0;
        }

        .sd-meaning strong {
          color: #444;
          font-style: normal;
          font-weight: 700;
        }

        .sd-divider {
          border: none;
          border-top: 1px solid #f0f0f0;
          margin: 20px 0;
        }

        .sd-remove-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1px solid #dc3545;
          color: #dc3545;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .sd-remove-btn:hover {
          background-color: #fdf2f2;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .sd-card { padding: 20px; }
          .sd-arabic { font-size: 26px; }
        }
      `}</style>

            <div className="saved-duas-wrapper">
                <header className="header-nav">
                    <div className="brand-logo">ZADERAH</div>
                    <nav className="nav-links">
                        <div className="nav-item">Dashboard</div>
                        <div className="nav-item">Packages</div>
                        <div className="nav-item">Guides</div>
                        <div className="nav-item active">Sign In</div>
                    </nav>
                </header>

                <div className="sd-header">
                    <h1 className="sd-title">Saved Duas</h1>
                    <p className="sd-subtitle">These are saved locally in your browser for quick access.</p>
                </div>

                <div className="sd-list">
                    {duas.map((dua) => (
                        <div className="sd-card" key={dua.id}>
                            <div className="sd-badge">
                                <SupplicationIcon /> SUPPLICATION
                            </div>
                            <h2 className="sd-card-title">{dua.title}</h2>
                            <div className="sd-arabic">{dua.arabic}</div>
                            <p className="sd-meaning">
                                <strong>Meaning:</strong> {dua.meaning}
                            </p>

                            <hr className="sd-divider" />

                            <button className="sd-remove-btn">
                                <TrashIcon /> Remove from Saved
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SavedDuas;
