import "./Campaign.css";
import { useState } from "react";
import { saveEdit } from "../../api/campaignsApi";
import SelectPlatform from "../SelectPlatform/SelectPlatform";

const Campaign = ({ index, campaign, getCampaigns }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [campaignToUpdate, setCampaignToUpdate] = useState({
    _id: campaign._id,
  });
  const [isError, setIsError] = useState({ state: false, msg: "" });

  const editHandler = () => {
    setIsError({ state: false, msg: "" });
    setIsEdit((prevState) => {
      return !prevState;
    });
  };

  const saveEditHandler = async () => {
    if (Object.values(campaignToUpdate).some((key) => key.length === 0)) {
      setIsError({ state: true, msg: "All fields are required." });
      return;
    }
    try {
      await saveEdit(campaignToUpdate);
      await getCampaigns();
      setIsError({ state: false, msg: "" });
      editHandler();
    } catch (error) {
      setIsError({ state: true, msg: "Something went wrong... Try again." });
    }
  };

  const changeValues = (event) => {
    setIsError({ state: false, msg: "" });
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
        <SelectPlatform
          action="edit"
          changeValues={changeValues}
          advertsringPlatform={campaign.advertsringPlatform}
        />
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
      <td className="table-data save-edit" onClick={saveEditHandler}>
        <label className="table-action">Save</label>
        {isError.state && (
          <label className="error-msg-edit">{isError.msg}</label>
        )}
      </td>
      <td className="table-data" onClick={editHandler}>
        <label className="table-action">Cancel</label>
      </td>
    </tr>
  );
};

export default Campaign;
