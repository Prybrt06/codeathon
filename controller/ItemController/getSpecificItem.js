import Item from "../../models/item_model.js";
import { tranlateText } from "../googleTranslateController/googleTranslate.js";

const getSpecificItem = async (req, res, next) => {
	const itemName = await req.body.itemName;

	const nameInEnglish = await tranlateText(itemName, "en");

    console.log(nameInEnglish);

	const items = await Item.find({ name: {$regex: new RegExp(nameInEnglish)} });

	res.status(201).json({ items: items });
};

export default getSpecificItem;
