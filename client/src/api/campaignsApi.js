import axios from "axios";

export const getCampaigns = async () => {
  try {
    const data = await axios({
      url: "/campaign/get-campaigns",
      method: "GET",
    });

    return data;
  } catch (error) {
    return error;
  }
};

export const saveEdit = async (dataInputs) => {
  try {
    await axios.patch(
      `/campaign/edit/${dataInputs._id.toString()}`,
      dataInputs
    );

    return;
  } catch (error) {
    return error;
  }
};

export const addCampaign = async (campaign) => {
  try {
    const data = await axios.post("/campaign/add", campaign);
    return data;
  } catch (error) {
    return error;
  }
};
