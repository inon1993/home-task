import "./AddCampaign.css";
import { useState } from "react";

const AddCampaign = () => {
    const [isAddCampaign, setIsAddCampagin] = useState(false);

    const addCampaignHandler = () => {
        setIsAddCampagin(true);
    }

    return (
        <button className="add-campaign-btn" onClick={addCampaignHandler}>Add Campaign</button>
    )
}

export default AddCampaign;