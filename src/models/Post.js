import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
},
  { timestamps: true}  // -> this adds created_at & updated_at
);

export default mongoose.models.Post || mongoose.model("Post", postSchema); 

