const coffeeData = require("../cleaned-data.json");


module.exports = {


getAllCoffees: (req, res, next) => {
    res.status(200).send(coffeeData);
},

addComment: (req, res, next)=> {
    const { id } = req.params;
    console.log("REQ.BODY =", req.body)
    console.log("REQ.PARAMS =", req.params)

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
    console.log("this is the id " + id );
    
    const index = coffeeData.findIndex(coffee => {
        return coffee.id === parseInt(id);
    })
     const commentIndex = coffeeData[index].comments.findIndex(element => {
     return element === parseInt(element)
    })
    console.log("this is the index " + index);
    coffeeData[index].comments.splice(commentIndex, 1);
    res.status(200).send(coffeeData);
}
};














// const index = coffeeData.findIndex(coffee => {
//     return coffee.id === parseInt(id)
// })
// if(index !== -1){
//     const coffeeIndex = coffeeData[index].comments.findIndex(commentIndex => {
//         return commentIndex.idd === parseInt(idd)
//     })
// }