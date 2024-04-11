import model from "./model.js";
export const createCourse = (course) => model.create(course);
export const deleteCourse = (id) => model.deleteOne({ _id: id });
export const updateCourse = (id, module) =>  model.updateOne({ id: id }, { $set: module });
export const findAllCourse = () => model.find();
export const findCourseById = (id) => model.find({ id: id });
