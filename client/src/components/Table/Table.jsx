import Campaign from "../Campaign/Campaign";
import "./Table.css";

const Table = ({ campaigns, getCampaigns }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Advertsring platform</th>
          <th>Advertiser landing page</th>
          <th>Banner image URL</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((campaign, i) => (
          <Campaign key={i} campaign={campaign} getCampaigns={getCampaigns} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
