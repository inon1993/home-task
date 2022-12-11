import { Router } from "express";
import { addCampaign } from "../controllers/campaignControllers.js";
const routes = Router();
routes.post("/add", addCampaign);

export default routes;
