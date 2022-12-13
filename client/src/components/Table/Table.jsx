import Campaign from "../Campaign/Campaign";
import "./Table.css";

const Table = ({ campaigns, getCampaigns }) => {
  return campaigns.length > 0 ? (
    <table className="table">
      <thead>
        <tr>
          <th className="table-title">Name</th>
          <th className="table-title">Advertsring platform</th>
          <th className="table-title">Advertiser landing page</th>
          <th className="table-title">Banner image URL</th>
          <th className="table-title"></th>
          <th className="table-title"></th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((campaign, i) => (
          <Campaign
            key={i}
            index={i}
            campaign={campaign}
            getCampaigns={getCampaigns}
          />
        ))}
      </tbody>
    </table>
  ) : (
    <p>Add campaigns to manage.</p>
  );
};

export default Table;
