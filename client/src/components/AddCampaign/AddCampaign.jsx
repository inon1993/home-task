import "./AddCampaign.css";
import { useState } from "react";
import { addCampaign } from "../../api/campaignsApi";

const AddCampaign = ({ getCampaigns }) => {
  const [isAddCampaign, setIsAddCampagin] = useState(false);
  const [campaign, setCampaign] = useState({
    name: "",
    advertsringPlatform: "",
    advertiserLandingPage: "",
    bannerImageURL: "",
  });
  const [isEmpty, setIsEmpty] = useState(false);

  const platforms = Object.freeze({
    GOOGLE: "Google",
    TABOOLA: "Taboola",
    TIKTOK: "TikTok",
  });

  const addCampaignToggle = () => {
    setIsAddCampagin((prev) => {
      return !prev;
    });
  };

  const changeValues = (event) => {
    setIsEmpty(false);
    setCampaign((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const addCampaignHandler = async (event) => {
    event.preventDefault();
    if (Object.values(campaign).some((key) => key.length === 0)) {
      setIsEmpty(true);
      return;
    }
    try {
      await addCampaign(campaign);
      await getCampaigns();
      addCampaignToggle();
    } catch (error) {
      console.error(error);
    }
  };

  return !isAddCampaign ? (
    <button className="add-campaign-btn" onClick={addCampaignToggle}>
      Add Campaign
    </button>
  ) : (
    <div className="add-campaign-wrapper">
      <form
        className="add-campaign-form"
        type="submit"
        onSubmit={addCampaignHandler}
      >
        <label>Campaign name:</label>
        <input
          className="add-campaign-input"
          name="name"
          onChange={changeValues}
        />
        <label>Advertsring platform:</label>
        <select
          className="platform-select"
          name="advertsringPlatform"
          onChange={changeValues}
          defaultValue=""
        >
          <option disabled default value="">
            Select a platform
          </option>
          <option value={platforms.GOOGLE}>{platforms.GOOGLE}</option>
          <option value={platforms.TABOOLA}>{platforms.TABOOLA}</option>
          <option value={platforms.TIKTOK}>{platforms.TIKTOK}</option>
        </select>
        <label>Advertiser landing page:</label>
        <input
          className="add-campaign-input"
          name="advertiserLandingPage"
          onChange={changeValues}
        />
        <label>Banner image URL:</label>
        <input
          className="add-campaign-input"
          name="bannerImageURL"
          onChange={changeValues}
        />
        {isEmpty && (
          <label className="empty-msg">All fields are required.</label>
        )}
        <div className="btns-wrapper">
          <button className="btn add-btn" type="submit">
            Add campaign
          </button>
          <button
            className="btn cancel-btn"
            type="button"
            onClick={addCampaignToggle}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCampaign;
