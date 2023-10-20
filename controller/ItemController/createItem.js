import Item from "../../models/item_model.js";

const createItem = async (req, res, next) => {
	const item = await Item.create({
		name: req.body.name,
		price: req.body.price,
	});

	res.status(201).json({ item: item });
};

export default createItem;
