import React from "react";
import MyProfileHistory from "pages/MyProfileHistory";
import MyProfileWallet from "pages/MyProfileWallet";
import MyProfileCollection from "pages/MyProfileCollection";
import MyProfilePreview from "pages/MyProfilePreview";
import Saved from "pages/Saved";
import ActiveBid from "pages/ActiveBid";
import OtherUserProfile from "pages/OtherUserProfile";
import MarketDetail from "pages/MarketDetail";
import Market from "pages/Market";
import Settings from "pages/Settings";
import Message from "pages/Message";
import Dashboard from "pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/message" element={<Message />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/market" element={<Market />} />
        <Route path="/marketdetail" element={<MarketDetail />} />
        <Route path="/otheruserprofile" element={<OtherUserProfile />} />
        <Route path="/activebid" element={<ActiveBid />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/myprofilepreview" element={<MyProfilePreview />} />
        <Route path="/myprofilecollection" element={<MyProfileCollection />} />
        <Route path="/myprofilewallet" element={<MyProfileWallet />} />
        <Route path="/myprofilehistory" element={<MyProfileHistory />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
