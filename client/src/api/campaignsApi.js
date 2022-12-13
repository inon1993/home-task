import axios from "axios";

export const getCampaigns = async () => {
  try {
    const data = await axios.get("/campaign/get-campaigns");

    return data;
  } catch (error) {
    throw error;
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
    throw error;
  }
};

export const addCampaign = async (campaign) => {
  try {
    await axios.post("/campaign/add", campaign);

    return;
  } catch (error) {
    throw error;
  }
};
