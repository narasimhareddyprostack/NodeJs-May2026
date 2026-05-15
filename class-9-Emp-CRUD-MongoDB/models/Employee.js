import mongoose from "mongoose";

let empSchema=mongoose.Schema({
    eid:{type:Number,require:true},
    ename:{type:String,require:true},
    esal:{type:Number,require:true}
})
let EmployeeModel=mongoose.model("employees",empSchema);
export default EmployeeModel;

