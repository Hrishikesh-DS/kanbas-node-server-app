import model from "./model.js";
export const createModule = (module) => model.create(module);
export const deleteModule = (id) => model.deleteOne({ _id: id });
export const updateModule = (id, module) =>  model.updateOne({ _id: id }, { $set: module });
export const findModuleByCourse = (courseId) => model.find({ course: courseId });



