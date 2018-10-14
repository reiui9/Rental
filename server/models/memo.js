import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Memo = new Schema({
	item_id: mongoose.Schema.Types.ObjectId,
	name: String,
	price: Number,
	category: String,
	isAvailable: Boolean,
	rate : Number,
    writer: String,
    borrower: String,
    contents: String,
    starred: [String],
    date: {
    	buy: {type:Date},
        created: { type: Date, default: Date.now },
        edited: { type: Date, default: Date.now }
    },
    is_edited: { type: Boolean, default: false },
    tumbnail: String,
    image: String,
    deliveryMethod: String
});

export default mongoose.model('memo', Memo);
