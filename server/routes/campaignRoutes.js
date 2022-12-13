import { Router } from "express";
import {
  addCampaign,
  getAllCampaigns,
  editCampaign,
} from "../controllers/campaignControllers.js";

const routes = Router();

routes
  // Add new Campaign
  .post("/add", addCampaign)
  // Get all campaigns
  .get("/get-campaigns", getAllCampaigns)
  //Edit campaign
  .patch("/edit/:id", editCampaign);

export default routes;
