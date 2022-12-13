import Campaign from "../models/Campaign.js";

export const addCampaign = async (req, res) => {
  try {
    const newCampaign = new Campaign({
      name: req.body.name,
      advertsringPlatform: req.body.advertsringPlatform,
      advertiserLandingPage: req.body.advertiserLandingPage,
      bannerImageURL: req.body.bannerImageURL,
    });
    await newCampaign.save();
    res.status(200).send("Campaign was added successfully.");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).send(campaigns.reverse());
  } catch (error) {
    res.status(500).send(error);
  }
};

export const editCampaign = async (req, res) => {
  try {
    await Campaign.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { runValidators: true }
    );
    res.status(200).send("Campaign updated successfully.");
  } catch (error) {
    res.status(500).send(error);
  }
};
