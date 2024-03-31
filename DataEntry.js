let employeeName=document.getElementById("empname");
let employeeId=document.getElementById("empid");
let employeeAddress=document.getElementById("address");
let employeeDesignation=document.getElementById("designation");
let employeeDepartment=document.getElementById("department");
let employeesalary=document.getElementById("salary");
 let selectedRow=null;
 function employeeDataManagement(){
 	let employeeData=fetchEmployeeData();
 	if(selectedRow==null)
 	{
 	  newDataInserted(employeeData);

  }
  else{
    updateRow(employeeData)
  }
 	clearFields();
 }
 	
 function fetchEmployeeData()
 {
 	let employeeData={};
 	employeeData.employeeName=employeeName.value;
 	employeeData.employeeId=employeeId.value;
 	employeeData.employeeAddress=employeeAddress.value;
 	employeeData.employeeDesignation=employeeDesignation.value;
 	employeeData.employeeDepartment=employeeDepartment.value;
 	employeeData.employeeSalary=employeeSalary.value;

 	return employeeData;
 }
 function newDataInserted(employeeData)
 {
 	let tbody=document.getElementById("table-body");
 	let newRow=tbody.insertRow(0);
  
 	let cell0=newRow.insertCell(0);
 	cell0.innerHTML=employeeData.employeeName;
 	let cell1=newRow.insertCell(1);
 	cell1.innerHTML=employeeData.employeeId;
 	let cell2=newRow.insertCell(2);
 	cell2.innerHTML=employeeData.employeeDesignation;
 	let cell3=newRow.insertCell(3);
 	cell3.innerHTML=employeeData.employeeDepartment;
 	let cell4=newRow.insertCell(4);
 	cell4.innerHTML=employeeData.employeesalary;
 	let cell5=newRow.insertCell(5);
 	cell5.innerHTML=employeeData.employeeAddress;
 	let cell6=newRow.insertCell(6);
 	cell6.innerHTML=`<button onclick="editEmployeeData(this)">EDIT</button>
 	<button onclick="deleteEmployeeData(this)">DELETE</button>`;
 }
 function clearFields()
 {
 	employeeName.value="";
 	employeeId.value="";
 	employeeAddress.value="";
 	employeeDesignation.value="";
 	employeeDepartment.value="";
 	employeeSalary.value="";
 	selectedRow=null;

 }
 function editEmployeeData(obj)
 {
 	selectedRow= obj.parentElement.parentElement;
 	employeeName.value= selectedRow.cells[0].innerHTML;
 	employeeId.value=selectedRow.cells[1].innerHTML;
 	employeeAddress.value=selectedRow.cells[2].innerHTML;
 	employeeDesignation.value=selectedRow.cells[3].innerHTML;
 	employeeDepartment.value=selectedRow.cells[4].innerHTML;
 	employeeSalary.value=selectedRow.cells[5].innerHTML;
 	//selectedRow=null;

 }
 function updateRow()
 {
 	selectedRow.cells[0].innerHTML=employeeName.value="";
 	selectedRow.cells[1].innerHTMLemployeeId.value="";
 	selectedRow.cells[2].innerHTML=employeeDesignation.value="";
 	selectedRow.cells[3].innerHTML=employeeDepartment.value="";
 	selectedRow.cells[4].innerHTML=employeeSalary.value="";
 	selectedRow.cells[5].innerHTML=employeeAddress.value="";
 	selectedRow=null;

 }
 function deleteEmployeeData(obj)
 {
 	let row=obj.parentElement.parentElement;
 	if(confirm())
 	{
 		document.getElementById("table-body").deleteRow(row.index(row))
 	}

 }
 
 