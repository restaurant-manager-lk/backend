import mongoose,{Document,Schema} from "mongoose";

export interface IRestaurant extends Document{
    name: string;
    address: string;
    phone: string;
    // description: string;
    // email: string;
    // image: string;
    // rating: number;
    // numReviews: number;
    // isFeatured: boolean;
    // category: string;
    // user: Schema.Types.ObjectId;
}

const restaurantSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true
    }
});

const Restaurant = mongoose.model<IRestaurant>("Restaurant",restaurantSchema);

export default Restaurant; 