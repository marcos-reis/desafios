const express = require("express")
const app = express()
app.listen(3000,()=>{

const giveFunction = (a) => {
    let arrayOfObject = []

    var  objectOfTheArrayModel =
    function (element){
        this.element = element
    }
    objectOfTheArrayModel.prototype.value = function() { return this.element}


    a.map(i => {
        const ObjectOfTheArray = new objectOfTheArrayModel(i)
        arrayOfObject.push(ObjectOfTheArray)
        
    })
    console.log(arrayOfObject)
  
    
    
    

    
       
}
  

   giveFunction([4,2])
})