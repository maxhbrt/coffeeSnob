const express = require("express");
const app = express();
app.use(express.json());

const {
    addComment,
    getAllCoffees,
    getById,
    updateComment,
    deleteComment
} = require("./controller/coffeeController");

app.post("/api/add_comment/:id", addComment);
app.get("/api/all_coffees", getAllCoffees);
app.get("/api/coffee/:id", getById);
app.put("/api/update_comment/:id", updateComment);
app.delete("/api/delete_comment/:id", deleteComment);

const port = 9001;
app.listen(port, () => console.log(`listening to port:${port}`));





