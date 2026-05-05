import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./Signup";
import SignIn from "./Signin";
import Settings from "./Settings";
import ContactInfo from "./Contactinfo";
import Dashboard from "./Dashboard";
import HajjAlifrad from "./HajjAlifrad";
import HajjEconomyPackages from "./HajjEconomyPackage";
import HajjPackages from "./HajjPackages";
import HajjPacking from "./HajjPacking";
import HajjUmrahDuas from "./HajjUmrahDuas";
import SavedDuas from "./SavedDuas";
import TawafRounds from "./TawafRounds";
import UmraExecutivePackages from "./UmrahExecutivePackage";
import WellCome from "./Welcome";
import MasjidHaramMap from "./MasjidHaramMap";
import PackagesDetails from "./PackagesDetails";
import HajjandUmrahType from "./HajjandUmrahType";
import HajjandUmrahTypeDetails from "./HajjandUmrahTypeDetails";
import ActionDetails from "./ActionDetails";
import HajjGuideandMap from "./HajjGuideandMap";
import UmrahGuideandMap from "./UmrahGuideandMap";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WellCome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/contact" element={<ContactInfo />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/hajj-alifrad" element={<HajjAlifrad />} />
      <Route path="/hajj-economy" element={<HajjEconomyPackages />} />
      <Route path="/packages/:type?" element={<HajjPackages />} />{" "}
      <Route path="/hajj-packing" element={<HajjPacking />} />
      <Route path="/hajj-duas" element={<HajjUmrahDuas />} />
      <Route path="/saved-duas" element={<SavedDuas />} />
      <Route path="/tawaf-rounds" element={<TawafRounds />} />
      <Route path="/umrah-executive" element={<UmraExecutivePackages />} />
      <Route path="/masjidharam-map" element={<MasjidHaramMap />} />
      <Route path="/package-details/:id" element={<PackagesDetails />} />{" "}
      <Route path="/Type/:type?" element={<HajjandUmrahType />} />
      <Route path="/guideandmap/:type?" element={<HajjGuideandMap />} />
      <Route path="/umrahguideandmap/:type?" element={<UmrahGuideandMap />} />
      <Route
        path="/type-details/:title"
        element={<HajjandUmrahTypeDetails />}
      />
      <Route
        path="/action-details/:actionId?/:fiqhId?/:ritualId?"
        element={<ActionDetails />}
      />
    </Routes>
  );
}

export default App;
