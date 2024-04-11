import Database from "../Database/index.js";

// export default function CourseRoutes(app) {
//     app.post("/api/courses", (req, res) => {
//         const course = {
//             ...req.body,
//             _id: new Date().getTime().toString()
//         };
//         Database.courses.push(course);
//         res.send(course);
//     });
//     app.delete("/api/courses/:id", (req, res) => {
//         const { id } = req.params;
//         Database.courses = Database.courses
//             .filter((c) => c._id !== id);
//         res.sendStatus(204);
//     });
//     app.put("/api/courses/:id", (req, res) => {
//         const { id } = req.params;
//         const course = req.body;
//         Database.courses = Database.courses.map((c) =>
//             c._id === id ? { ...c, ...course } : c
//         );
//         res.sendStatus(204);
//     });
//     app.get("/api/courses/:id", (req, res) => {
//         const { id } = req.params;
//         const course = Database.courses
//             .find((c) => c._id === id);
//         if (!course) {
//             res.status(404).send("Course not found");
//             return;
//         }
//         res.send(course);
//     });

//     app.get("/api/courses", (req, res) => {
//         const courses = Database.courses;
//         res.send(courses);
//     });
// }

import * as dao from "./dao.js";
export default function CourseRoutes(app) {

    const createCourse = async (req, res) => {
        const newCourse = {
            ...req.body,
            id: req.body._id,
        };
        delete newCourse._id;
        const course = await dao.createCourse(newCourse);
        res.json(course);
    };
    const deleteCourse = async (req, res) => {
        const status = await dao.deleteCourse(req.params.id);
        res.json(status);
    };
    const updateCourse = async (req, res) => {
        const status = await dao.updateCourse(req.params.id, req.body);
        res.json(status);
    };
    const findAllCourse = async (req, res) => {
        const modules = await dao.findAllCourse();
        res.json(modules);
        return;
    };
    const findCourseById = async (req, res) => {
       const status = await dao.findCourseById(req.params.id);
        res.json(status);
    };

    app.post("/api/courses/", createCourse);
    app.get("/api/courses", findAllCourse);
    app.put("/api/courses/:id", updateCourse);
    app.delete("/api/courses/:id", deleteCourse);
    app.get("/api/courses/:id", findCourseById);
}
