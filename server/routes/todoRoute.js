import express from "express";
import { createTodo, getAllTodos, deleteTodo, updateTodo, deleteTodoById} from "../controller/todoController.js";

const router = express.Router();


router.post("/create", createTodo);
router.get("/getall", getAllTodos);
router.delete("/delete/:id", deleteTodo);
router.put("/update/:id", updateTodo);
router.delete("/deletebyid/:id", deleteTodoById);
export default router;

