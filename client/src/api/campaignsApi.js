import axios from "axios";

export const getCampaigns = async () => {
  const data = await axios({
    url: "/campaign/get-campaigns",
    method: "GET",
  });

  return data;
};

export const saveEdit = async (dataInputs) => {
  await axios.patch(`/campaign/edit/${dataInputs._id.toString()}`, dataInputs);

  return;
};
