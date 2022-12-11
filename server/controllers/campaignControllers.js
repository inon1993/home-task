import Campaign from "../models/Campaign.js";

export const addCampaign = async (req, res) => {
  try {
    console.log(req.body);
    const newCampaign = new Campaign({
      name: req.body.name,
      advertsringPlatform: req.body.advertsringPlatform,
      advertiserLandingPage: req.body.advertiserLandingPage,
      bannerImageURL: req.body.bannerImageURL,
    });
    await newCampaign.save();
    res.status(200).send(newCampaign);
  } catch (error) {
    res.status(500).send(error);
  }
};
