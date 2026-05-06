import React, { useMemo, useState } from "react";
import "./App.css";
import {
  FaPassport,
  FaTicketAlt,
  FaHotel,
  FaTshirt,
  FaBook,
} from "react-icons/fa";
import Header from "./Header";

function HajjPacking() {
  const checklistData = useMemo(
    () => ({
      "TRAVEL DOCUMENTS": [
        { label: "Passport & Original CNIC", icon: <FaPassport /> },
        { label: "Flight Tickets & Visa Copy", icon: <FaTicketAlt /> },
        { label: "Hotel Booking Vouchers", icon: <FaHotel /> },
      ],
      "RELIGIOUS ESSENTIALS": [
        { label: "Two Sets of Ihram (For Men)", icon: <FaTshirt /> },
        { label: "Pocket Quran & Dua Book", icon: <FaBook /> },
      ],
    }),
    [],
  );

  const allItems = Object.values(checklistData).flat();

  const [checkedItems, setCheckedItems] = useState([]);

  const progress = Math.round((checkedItems.length / allItems.length) * 100);

  const handleCheck = (item) => {
    if (checkedItems.includes(item.label)) {
      setCheckedItems(checkedItems.filter((i) => i !== item.label));
    } else {
      setCheckedItems([...checkedItems, item.label]);
    }
  };

  return (
    <>
      {" "}
      <style>{`
     body {
  margin: 0;
  font-family: "Segoe UI", sans-serif;
  background: #f4f6f5;
}


/* PAGE */
.packing-page {
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
}

/* PROGRESS CARD */
.progress-card {
  background: #fff;
  border: 2px solid #0f3d2e;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 30px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  color: #0f3d2e;
}
.progress-header h2 {
  color: #0f3d2e;
  margin: 0;
}
.progress-bar {
  margin-top: 15px;
  height: 10px;
  background: #ddd;
  border-radius: 10px;
}

.progress-fill {
  height: 100%;
  background: #0f3d2e;
  border-radius: 10px;
  transition: 0.3s;
}

/* SECTION */
.section-title {
  color: #0f3d2e;
  font-weight: 700;
  margin-bottom: 15px;
  border-left: 5px solid #0f3d2e;
  padding-left: 10px;
}

/* ITEMS */
.checklist-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checklist-item {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  border: 1px solid #eee;
  cursor: pointer;
  transition: 0.2s;
}

.checklist-item:hover {
  background: #f1f5f3;
}

/* ICON */
.icon {
  margin-right: 10px;
  color: #0f3d2e;
  font-size: 18px;
}

/* CHECKBOX */
.checklist-item input {
  display: none;
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #0f3d2e;
  border-radius: 5px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: 0.2s ease-in-out;
  background: white;
}

/* checked background */
.checklist-item.checked .custom-checkbox {
  background: #0f3d2e;
  border-color: #0f3d2e;
}

/* tick using borders (clean) */
.checklist-item.checked .custom-checkbox::after {
  content: "";
  width: 6px;
  height: 10px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg);
  margin-bottom: 2px;
}

/* TEXT */
.item-text {
  font-size: 15px;
  color: #333;
}

.checklist-item.checked .item-text {
  text-decoration: line-through;
  color: #aaa;
}
      `}</style>
      <div className="page">
        {/* HEADER */}
        <Header />

        <div className="packing-page">
          {/* PROGRESS CARD */}
          <div className="progress-card">
            <div className="progress-header">
              <h2>Packing Progress</h2>
              <h2>{progress}%</h2>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* SECTIONS */}
          {Object.keys(checklistData).map((section, idx) => (
            <div key={idx} className="checklist-section">
              <h3 className="section-title">{section}</h3>

              <div className="checklist-items">
                {checklistData[section].map((item, index) => (
                  <label
                    key={index}
                    className={`checklist-item ${
                      checkedItems.includes(item.label) ? "checked" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checkedItems.includes(item.label)}
                      onChange={() => handleCheck(item)}
                    />

                    <span className="icon">{item.icon}</span>

                    <span className="custom-checkbox"></span>

                    <span className="item-text">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HajjPacking;
