import "./AddCampaign.css";
import { useState } from "react";
import { addCampaign } from "../../api/campaignsApi";
import SelectPlatform from "../SelectPlatform/SelectPlatform";

const AddCampaign = ({ getCampaigns }) => {
  const [isAddCampaign, setIsAddCampagin] = useState(false);
  const [campaign, setCampaign] = useState({
    name: "",
    advertsringPlatform: "",
    advertiserLandingPage: "",
    bannerImageURL: "",
  });
  const [isError, setIsError] = useState({ state: false, msg: "" });

  const addCampaignToggle = (event) => {
    if (event.currentTarget !== event.target) return;
    setCampaign({
      name: "",
      advertsringPlatform: "",
      advertiserLandingPage: "",
      bannerImageURL: "",
    });
    setIsError({ state: false, msg: "" });
    setIsAddCampagin((prev) => {
      return !prev;
    });
  };

  const changeValues = (event) => {
    setIsError({ state: false, msg: "" });
    setCampaign((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const addCampaignHandler = async (event) => {
    event.preventDefault();
    if (Object.values(campaign).some((value) => value.length === 0)) {
      setIsError({ state: true, msg: "All fields are required." });
      return;
    }
    try {
      await addCampaign(campaign);
      await getCampaigns();
      setIsAddCampagin(false);
    } catch (error) {
      setIsError({ state: true, msg: "Something went wrong... Try again." });
    }
  };

  return (
    <>
      <button className="add-campaign-btn" onClick={addCampaignToggle}>
        Add Campaign
      </button>
      {isAddCampaign && (
        <div className="overlay" onClick={addCampaignToggle}>
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
              <SelectPlatform action="add" changeValues={changeValues} />
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
              {isError.state && (
                <label className="error-msg">{isError.msg}</label>
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
        </div>
      )}
    </>
  );
};

export default AddCampaign;
