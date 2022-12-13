import "./App.css";
import AddCampaign from "./components/AddCampaign/AddCampaign";
import Table from "./components/Table/Table";
import { useEffect, useState } from "react";
import { getCampaigns } from "./api/campaignsApi";

function App() {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    getCampaignsArray();
  }, []);

  const getCampaignsArray = async () => {
    const campaignsData = await getCampaigns();
    setCampaigns(campaignsData.data);
  };

  return (
    <div className="App">
      <div className="upper-section">
        <label className="app-title">Welcome!</label>
        <AddCampaign getCampaigns={getCampaignsArray} />
      </div>
      <Table campaigns={campaigns} getCampaigns={getCampaignsArray} />
    </div>
  );
}

export default App;
