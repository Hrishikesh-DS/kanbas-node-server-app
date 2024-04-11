import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    name: String,
    description: String,
    module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module" // Replace "Module" with the name of the module collection
    }
}, { collection: "lessons" });

const courseSchema = new mongoose.Schema({
    name: String,
    description: String,
    course: String,
    lessons: [lessonSchema]
}, { collection: "modules" });

export default courseSchema;