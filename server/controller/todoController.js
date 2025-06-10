import Todo from "../model/todoModel.js";

//create a todo
export const createTodo = async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        
        if (!title || !description) {
            return res.status(400).json({ 
                message: "Title and description are required" 
            });
        }
        
        const todo = new Todo({ title, description, completed });
        await todo.save();
        res.status(201).json({ message: "Todo created successfully", todo });
    } catch (error) {
        console.error("Error creating todo:", error);
        res.status(500).json({ message: "Error creating todo", error: error.message });
    }
};

//get all todos
export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({ message: "Todos fetched successfully", todos });
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).json({ message: "Error fetching todos", error: error.message });
    }
};

//delete a todo
export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ message: "Error deleting todo", error: error.message });
    }       
}

//update a todo
export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(id, { title, description, completed }, { new: true });
        res.status(200).json({ message: "Todo updated successfully", updatedTodo });
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({ message: "Error updating todo", error: error.message });
    }
}

//delete all todos
export const deleteAllTodos = async (req, res) => {
    try {
        await Todo.deleteMany();
        res.status(200).json({ message: "All todos deleted successfully" });
    } catch (error) {
        console.error("Error deleting all todos:", error);
        res.status(500).json({ message: "Error deleting all todos", error: error.message });
    }
}       

//delete a todo by id
export const deleteTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ message: "Error deleting todo", error: error.message });
    }
}

