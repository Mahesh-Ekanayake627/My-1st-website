
// const customerNames=[];

// function namebtnbuttonclick() {
//     let txtname=document.getElementById("txtname").value;
//     customerNames.push(txtname);
//     console.log(txtname)
//     loadnames()
// }

// function loadnames(){
//     document.getElementById("olCustomers").innerHTML="";
//     for(let cName of customerNames){
//         document.getElementById("olCustomers").innerHTML += `<li>${cName}</li>`;
//     }   
// }

// const Itemnames=[];

// function itembtnbuttonclick() {
//     let txtItemName=document.getElementById("txtItemName").value;
//     Itemnames.push(txtItemName);
//     console.log(txtItemName)
//     loadItems()
// }
// function loadItems(){
//     document.getElementById("olItems").innerHTML="";
//     for(let iName of Itemnames){
//         document.getElementById("olItems").innerHTML += `<li>${iName}</li>`;
//     }
// }

const customerList = [];

function addCustomer() {
    let customerID = document.getElementById("txtID").value;
    let customerName = document.getElementById("txtName").value;
    let customerAge = document.getElementById("txtAge").value;
    let customerAddress = document.getElementById("txtAddress").value;
    let customerSalary = document.getElementById("txtSalary").value;

    const customer = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        age: customerAge,
        salary: customerSalary
    };

    customerList.push(customer);
    console.log(customerList);
    loadCustomertable();
}

function loadCustomertable() {
    let body = `<tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Salary</th>
                    </tr>`

    for (let customer of customerList) {

        body += `<tr>
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.age}</td>
                <td>${customer.address}</td>
                <td>${customer.salary}</td>
            </tr>
            `
    }
    document.getElementById("tblCustomer").innerHTML = body;
}


const itemList=[];

function addItem(){
    let Itemid=document.getElementById("ItemtxtID").value;
    let Itemname=document.getElementById("ItemtxtName").value;
    let ItemSalary=document.getElementById("ItemtxtSalary").value;

    const item={
        Iid:Itemid,
        Iname:Itemname,
        Isalary:ItemSalary
    };

    itemList.push(item);
    console.log(itemList);
    loaditemtable();

    function  loaditemtable(){
        let body = `<tr>
                    <th>ItemID</th>
                    <th>ItemName</th>
                    <th>ItemSalary</th>
                    </tr>`

    for (let item of itemList) {

        body += `<tr>
                <td>${item.Iid}</td>
                <td>${item.Iname}</td>
                <td>${item.Isalary}</td>
            </tr>
            `
    }
    document.getElementById("itemtblCustomer").innerHTML = body;

    }
    



}