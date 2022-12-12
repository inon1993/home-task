import "./Campaign.css";
import { useState } from "react";
import { saveEdit } from "../../api/campaignsApi";

const Campaign = ({ campaign, getCampaigns }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [campaignToUpdate, setCampaignToUpdate] = useState({
    _id: campaign._id,
  });

  const editHandler = () => {
    setIsEdit((prevState) => {
      return !prevState;
    });
  };

  const saveEditHandler = async () => {
    await saveEdit(campaignToUpdate);
    await getCampaigns();
    editHandler();
  };

  const changeValues = (event) => {
    setCampaignToUpdate((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  return !isEdit ? (
    <tr>
      <td>{campaign.name}</td>
      <td>{campaign.advertsringPlatform}</td>
      <td>{campaign.advertiserLandingPage}</td>
      <td>{campaign.bannerImageURL}</td>
      <td onClick={editHandler}>Edit</td>
      <td>
        <a href={campaign.bannerImageURL}>Preview</a>
      </td>
    </tr>
  ) : (
    <tr>
      <td>
        <input
          name="name"
          type="text"
          defaultValue={campaign.name}
          onChange={changeValues}
        />
      </td>
      <td>
        <input
          name="advertsringPlatform"
          type="text"
          defaultValue={campaign.advertsringPlatform}
          onChange={changeValues}
        />
      </td>
      <td>
        <input
          name="advertiserLandingPage"
          type="text"
          defaultValue={campaign.advertiserLandingPage}
          onChange={changeValues}
        />
      </td>
      <td>
        <input
          name="bannerImageURL"
          type="text"
          defaultValue={campaign.bannerImageURL}
          onChange={changeValues}
        />
      </td>
      <td onClick={saveEditHandler}>Save</td>
      <td onClick={editHandler}>Cancel</td>
    </tr>
  );
};

export default Campaign;
