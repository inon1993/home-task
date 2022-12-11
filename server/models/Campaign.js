import { Schema, model } from "mongoose";

const CampaignSchema = Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  advertsringPlatform: {
    type: String,
    required: true,
    validate: {
      validator: function (platform) {
        const platformValidator =
          platform.toLowerCase().trim() === "tiktok" ||
          platform.toLowerCase().trim() === "taboola" ||
          platform.toLowerCase().trim() === "google";
        return platformValidator;
      },
    },
  },
  advertiserLandingPage: {
    type: String,
    required: true,
  },
  bannerImageURL: {
    type: String,
    required: true,
  },
});

const Campaign = model("Campaign", CampaignSchema);

export default Campaign;
