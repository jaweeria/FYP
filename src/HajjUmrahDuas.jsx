import React, { useEffect, useState } from "react";
import { getDuas, SearchDuas } from "./api/ZaderahServices/Zaderah";
import { useSnackbar } from "notistack";
import Header from "./Header";

const HajjUmrahDuas = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [seachValue, setSeachValue] = useState("");
  const [duas, setDuas] = useState([]);
  const [showSaved, setShowSaved] = useState(false);

  // saved dua IDs store karne k liye
  const [savedDuaIds, setSavedDuaIds] = useState([]);

  // API se data fetch
  const fetchDuas = async (searchText = "") => {
    setLoading(true);

    try {
      let response;

      if (searchText.trim() && searchText.length >= 3) {
        response = await SearchDuas(searchText.trim()); // simple pass
      } else {
        response = await getDuas();
      }

      if (response?.length > 0) {
        const formattedDuas = response.map((dua) => ({
          id: dua.duaID,
          title: dua.title,
          arabic: dua.arabic,
          transliteration: dua.transliteration,
          meaning: dua.translation,
        }));

        setDuas(formattedDuas);
      } else {
        setDuas([]);
        enqueueSnackbar("No duas found", { variant: "error" });
      }
    } catch (err) {
      console.error(err);
      enqueueSnackbar("Error while fetching duas", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  // page load pe all duas
  useEffect(() => {
    fetchDuas();
  }, []);

  // search input change pe API call
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchDuas(seachValue);
    }, 500);

    return () => clearTimeout(delay);
  }, [seachValue]);

  // save / unsave toggle
  const toggleSave = (id) => {
    setSavedDuaIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  // saved filter apply
  const filteredDuas = showSaved
    ? duas.filter((dua) => savedDuaIds.includes(dua.id))
    : duas;

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

          .page-container {
            font-family: 'Inter', sans-serif;
            background-color: #fcfdfd;
            min-height: 100vh;
            color: #333;
          }

          /* Navbar */
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 40px;
            background-color: #fff;
            border-bottom: 1px solid #eee;
          }

          .brand-logo {
            font-size: 20px;
            font-weight: 800;
            color: #1a4f44;
            letter-spacing: 1px;
          }

          .nav-links {
            display: flex;
            gap: 30px;
            border: 1px solid #1a4f44;
            border-radius: 30px;
            padding: 8px 30px;
          }

          .nav-item {
            font-size: 13px;
            color: #666;
            text-decoration: none;
            font-weight: 500;
            cursor: pointer;
          }

          .nav-item.active {
            color: #1a4f44;
            font-weight: 700;
          }

          /* Main Layout */
          .main-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            text-align: center;
          }

          .page-title {
            font-size: 28px;
            font-weight: 800;
            color: #1a4f44;
            margin-bottom: 30px;
            letter-spacing: 0.5px;
          }

          /* Search Bar */
          .search-container {
            position: relative;
            max-width: 600px;
            margin: 0 auto 20px;
          }

          .search-input {
            width: 100%;
            padding: 14px 20px 14px 45px;
            border: 1px solid #1a4f44;
            border-radius: 30px;
            font-size: 14px;
            outline: none;
            color: #333;
            box-shadow: 0 2px 8px rgba(0,0,0,0.02);
          }

          .search-input::placeholder {
            color: #999;
          }

          .search-icon {
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
            width: 16px;
            height: 16px;
            fill: #1a4f44;
          }

          /* View Saved Button */
          .view-saved-btn {
            background-color: #1a4f44;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 13px;
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            margin-bottom: 40px;
            transition: background 0.2s;
          }

          .view-saved-btn:hover {
            background-color: #133a32;
          }

          .btn-icon {
            width: 14px;
            height: 14px;
            fill: white;
          }

          /* Dua Cards */
          .dua-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .dua-card {
            border: 1px solid #1a4f44;
            border-radius: 12px;
            padding: 25px;
            background-color: white;
            text-align: left;
            position: relative;
            box-shadow: 0 4px 10px rgba(0,0,0,0.02);
          }

          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
          }

          .badge {
            background-color: #eaf1ef;
            color: #1a4f44;
            font-size: 10px;
            font-weight: 700;
            padding: 6px 12px;
            border-radius: 4px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            letter-spacing: 0.5px;
          }

          .badge-icon {
            width: 12px;
            height: 12px;
            fill: #1a4f44;
          }

          .bookmark-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 5px;
          }

          .bookmark-icon {
            width: 16px;
            height: 20px;
            fill: #1a4f44;
          }
          
          .bookmark-icon-empty {
            fill: none;
            stroke: #1a4f44;
            stroke-width: 2;
          }

          .dua-title {
            font-size: 18px;
            font-weight: 700;
            color: #111;
            margin: 0 0 25px 0;
          }

          .arabic-text {
            font-size: 32px;
            font-weight: 600;
            color: #111;
            text-align: center;
            margin: 0 0 30px 0;
            line-height: 1.6;
            font-family: "Traditional Arabic", "Amiri", serif;
          }

          .transliteration-box {
            border-left: 2px solid #1a4f44;
            padding-left: 15px;
            margin-bottom: 20px;
          }

          .transliteration {
            font-size: 13px;
            color: #555;
            margin: 0;
            line-height: 1.5;
          }

          .divider {
            height: 1px;
            background-color: #f0f0f0;
            margin: 0 0 20px 0;
          }

          .meaning {
            font-size: 13px;
            color: #666;
            margin: 0;
            line-height: 1.5;
            font-style: italic;
          }

          .meaning-bold {
            font-weight: 700;
            font-style: normal;
            color: #444;
          }
        `}
      </style>

      <div className="page-container">
        <Header p={1} />

        <main className="main-content">
          <h1 className="page-title">HAJJ & UMRAH DUAS</h1>

          {/* Search Bar */}
          <div className="search-container">
            <svg className="search-icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>

            <input
              type="text"
              className="search-input"
              placeholder="Search for a dua..."
              value={seachValue}
              onChange={(e) => setSeachValue(e.target.value)}
            />
          </div>

          {/* View Saved Button */}
          <button
            className="view-saved-btn"
            onClick={() => setShowSaved(!showSaved)}
          >
            <svg className="btn-icon" viewBox="0 0 24 24">
              <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
            </svg>
            {showSaved ? "VIEW ALL DUAS" : "VIEW SAVED DUAS"}
          </button>

          {/* Loading */}
          {loading && <p>Loading...</p>}

          {/* Dua Cards List */}
          <div className="dua-list">
            {filteredDuas.map((dua) => (
              <div className="dua-card" key={dua.id}>
                <div className="card-header">
                  <div className="badge">SUPPLICATION</div>

                  <button
                    className="bookmark-btn"
                    onClick={() => toggleSave(dua.id)}
                  >
                    {savedDuaIds.includes(dua.id) ? (
                      <svg
                        className="bookmark-icon bookmark-icon-saved"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                      </svg>
                    ) : (
                      <svg className="bookmark-icon-empty" viewBox="0 0 24 24">
                        <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
                      </svg>
                    )}
                  </button>
                </div>

                <h3 className="dua-title">{dua.title}</h3>

                <p className="arabic-text">{dua.arabic}</p>

                <div className="transliteration-box">
                  <p className="transliteration">{dua.transliteration}</p>
                </div>

                <div className="divider"></div>

                <p className="meaning">
                  <span className="meaning-bold">Meaning:</span> {dua.meaning}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default HajjUmrahDuas;
