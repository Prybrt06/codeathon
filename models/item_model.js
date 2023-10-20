import mongoose from "mongoose";

const item = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		requrired: true,
	},
});

const Item = mongoose.model("Item", item);

export default Item;
