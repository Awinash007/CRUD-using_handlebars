require("mongoose").connect("mongodb://localhost:27017/Employee_crud")
.then(()=>{
    console.log("Database Connected Successfully")

})

.catch((err)=>{
    console.log(err)

})