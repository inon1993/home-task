import "./Campaign.css";
import { useState } from "react";
import { saveEdit } from "../../api/campaignsApi";

const Campaign = ({ index, campaign, getCampaigns }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [campaignToUpdate, setCampaignToUpdate] = useState({
    _id: campaign._id,
  });
  const [isEmpty, setIsEmpty] = useState(false);

  const platforms = Object.freeze({
    GOOGLE: "Google",
    TABOOLA: "Taboola",
    TIKTOK: "TikTok",
  });

  const editHandler = () => {
    setIsEdit((prevState) => {
      return !prevState;
    });
  };

  const saveEditHandler = async () => {
    if (Object.values(campaignToUpdate).some((key) => key.length === 0)) {
      setIsEmpty(true);
      return;
    }
    try {
      await saveEdit(campaignToUpdate);
      await getCampaigns();
      editHandler();
    } catch (error) {
      console.error(error);
    }
  };

  const changeValues = (event) => {
    setIsEmpty(false);
    setCampaignToUpdate((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  return !isEdit ? (
    <tr className={`table-row ${index % 2 !== 0 && "odd-row"}`}>
      <td className="table-data">{campaign.name}</td>
      <td className="table-data">{campaign.advertsringPlatform}</td>
      <td className="table-data">{campaign.advertiserLandingPage}</td>
      <td className="table-data">{campaign.bannerImageURL}</td>
      <td className="table-data" onClick={editHandler}>
        <label className="table-action">Edit</label>
      </td>
      <td className="table-data">
        <a className="link" href={campaign.bannerImageURL}>
          <label className="table-action">Preview</label>
        </a>
        <a className="link" href={campaign.advertiserLandingPage}>
          <img
            className="banner-img"
            src={campaign.bannerImageURL}
            alt="Banner"
          />
        </a>
      </td>
    </tr>
  ) : (
    <tr className={`table-row ${index % 2 !== 0 && "odd-row"}`}>
      <td className="table-data">
        <input
          className="edit-input"
          name="name"
          type="text"
          defaultValue={campaign.name}
          onChange={changeValues}
        />
      </td>
      <td className="table-data">
        <select
          className="platform-select-edit"
          name="advertsringPlatform"
          onChange={changeValues}
          defaultValue={campaign.advertsringPlatform}
        >
          <option value={platforms.GOOGLE}>{platforms.GOOGLE}</option>
          <option value={platforms.TABOOLA}>{platforms.TABOOLA}</option>
          <option value={platforms.TIKTOK}>{platforms.TIKTOK}</option>
        </select>
      </td>
      <td className="table-data">
        <input
          className="edit-input"
          name="advertiserLandingPage"
          type="text"
          defaultValue={campaign.advertiserLandingPage}
          onChange={changeValues}
        />
      </td>
      <td className="table-data">
        <input
          className="edit-input"
          name="bannerImageURL"
          type="text"
          defaultValue={campaign.bannerImageURL}
          onChange={changeValues}
        />
      </td>
      <td className="table-data" onClick={saveEditHandler}>
        <label className="table-action">Save</label>
      </td>
      <td className="table-data" onClick={editHandler}>
        <label className="table-action">Cancel</label>
      </td>
    </tr>
  );
};

export default Campaign;
