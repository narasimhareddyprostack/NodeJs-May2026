await EmployeeModel.findOne({"eid":employee.eid})
await emp_obj.save();
await EmployeeModel.find();
await EmployeeModel.findById(emp_doc_id);
await EmployeeModel.findByIdAndDelete(emp_doc_id)

await EmployeeModel.findByIdAndUpdate(emp_doc_id,updateEmployee);