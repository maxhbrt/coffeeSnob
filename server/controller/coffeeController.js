const coffeeData = require("../cleaned-data.json");

let id = 1;
module.exports = {


getAllCoffees: (req, res, next) => {
    res.status(200).send(coffeeData);
},

addComment: (req, res, next)=> {
    const { id } = req.params;

    const index = coffeeData.findIndex(element => {
        return element.id === parseInt(id);
    })
    if(index !== -1){
  const {
      comments
  } = req.body;
  const newComment ={
      comments,
  }
  console.log(coffeeData.newComment)
  coffeeData[index].comments.push(newComment);
  res.status(200).send(coffeeData)
}},

getById: (req, res, next) => {
    const { id } = req.params;

    const index = coffeeData.findIndex(element => {
        return element.id === parseInt(id);
    });

    if(index !== -1 ){
        res.status(200).send(coffeeData[index]);
    } else {
        res.status(404).send("coffee not found")
    }

},
updateComment: (req, res, next) => {
    const { newComment } = req.body
    const { id } = req.params;
    const index = coffeeData.findIndex(coffee => {
      return coffee.id === parseInt(id);  
    });

    if(index !== -1){
        coffeeData[index].comments.push(newComment);
        res.status(200).send(newComment)
    }else{
        res.status(404).send("update failed")
    }
},
deleteComment: (req, res, next) => {
    const { id } = req.params;
    const index = coffeeData.findIndex(coffee => {
        return coffee.id === parseInt(id);
    })
    coffeeData[index].comments.splice(index, 1);
    res.status(200).send(coffeeData);
}
};















