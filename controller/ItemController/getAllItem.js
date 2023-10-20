import Item from "../../models/item_model.js";

const getItem = async (req, res, next) => {
	const items = await Item.find();

	res.status(201).json({ items: items });
};

export default getItem;
