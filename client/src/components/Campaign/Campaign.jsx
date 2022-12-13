import "./Campaign.css";
import { useState } from "react";
import EditCampaign from "../EditCampaign/EditCampaign";

const Campaign = ({ index, campaign, getCampaigns }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isError, setIsError] = useState({ state: false, msg: "" });

  const editHandler = () => {
    setIsError({ state: false, msg: "" });
    setIsEdit((prevState) => {
      return !prevState;
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
    <EditCampaign
      campaign={campaign}
      editHandler={editHandler}
      isError={isError}
      setIsError={setIsError}
      index={index}
      getCampaigns={getCampaigns}
    />
  );
};

export default Campaign;
