import React from "react";

function HajjAlifrad() {
  return (
    <div className="hajj-page">
      {/* Header */}
      <div className="headerBar">
        <div className="brand">ZADERAH</div>
        <div className="nav">
          <a href="#">Dashboard</a>
          <a href="#">Packages</a>
          <a href="#">Guides</a>
          <a href="#">Sign In</a>
        </div>
      </div>

      {/* Page Title */}
      <h1 className="page-title">HAJJ AL-IFRAD</h1>

      {/* Definition */}
      <div className="definition">
        <h2>Definition:</h2>
        <p>
          Performing <strong>Hajj only</strong>. The pilgrim (Mufrid) enters the state of Ihram with
          the intention of performing Hajj alone without an Umrah in the same journey.
        </p>
      </div>

      {/* Key Procedures */}
      <div className="procedures">
        <h2>Key Procedures:</h2>
        <ul>
          <li>Enter Ihram at the Meeqat with the intention of <strong>Hajj only</strong>.</li>
          <li>Perform <strong>Tawaf al-Qudum</strong> (Arrival Tawaf) upon reaching Makkah.</li>
          <li>
            Remain in the state of Ihram until the <strong>10th of Dhul-Hijjah</strong> (after the
            symbolic stoning and hair cutting).
          </li>
          <li>Perform all standard Hajj rituals including <strong>Arafat, Muzdalifah, and Mina</strong>.</li>
          <li>
            <strong>Note:</strong> Unlike other types of Hajj, an animal sacrifice (Hady) is{" "}
            <strong>NOT mandatory</strong> for Al-Ifrad.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HajjAlifrad;
