import "./EditCampaign.css";
import { saveEdit } from "../../api/campaignsApi";
import SelectPlatform from "../SelectPlatform/SelectPlatform";
import { useState } from "react";

const EditCampaign = ({
  campaign,
  editHandler,
  isError,
  setIsError,
  index,
  getCampaigns,
}) => {
  const [campaignToUpdate, setCampaignToUpdate] = useState({
    _id: campaign._id,
  });

  const changeValues = (event) => {
    setIsError({ state: false, msg: "" });
    setCampaignToUpdate((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
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

  return (
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

export default EditCampaign;
