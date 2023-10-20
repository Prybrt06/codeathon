import { Router } from "express";
import createItem from "../controller/ItemController/createItem.js";
import getItem from "../controller/ItemController/getAllItem.js";
import getSpecificItem from "../controller/ItemController/getSpecificItem.js";

const itemRoute = Router();

itemRoute.post("/create", createItem);
itemRoute.get("", getItem);
itemRoute.get("/category", getSpecificItem);

export default itemRoute;
