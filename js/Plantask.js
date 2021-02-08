var arr = [];

arr = JSON.parse(localStorage.getItem("arr"))


//console.log(arr);
var itemToUpdate = 0;


function display() {
    var d = new Date().toISOString().split('T')[0];
    document.getElementById("record_contant").innerHTML = '';
    //document.getElementById('btns').innerHTML = ''
    arr = JSON.parse(localStorage.getItem("arr"))
    var a = "<tr><th onclick ='sorttable(0)'>Task</th><th onclick ='sorttable(1)'>Status</th><th onclick ='sorttable(2)'>Priority</th><th onclick ='sorttable(3)'>date</th><th>Delete Item</th><th>Edit Item</th></tr>";
    console.log("xsadwefwef")
    // let temp = arr.length;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].date === d) {

            a += "<tr>";
            a += "<td>" + arr[i].Task + "</td>";
            a += "<td>" + arr[i].Status + "</td>";
            a += "<td>" + arr[i].Priority + "</td>";
            a += "<td>" + arr[i].date + "</td>";
            a += `<td><button onclick="deletes(${i})" class = "btn btn-danger">Delete Item</button></td>`;
            a += `<td><button onclick="Edit(${i})"  class ="btn btn-success"> Edit Item</button></td>`;
            a += "</tr>";
        }
    }
    document.getElementById("record_contant").innerHTML = a;


}


//for sort the table...
////////////////////////////////////////////////////////////////////////////
function sorttable(p) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("record_contant");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[p];
            y = rows[i + 1].getElementsByTagName("TD")[p];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}



// //createPage Part/////////////////////////////
function creatPage(params) {

    var a = "<tr><th>First Name</th><th>Email</th><th>DELETE ITEM</th><th>EDIT ITEM</th></tr>";
    console.log(typeof (params));
    console.log(arr[params].Task);

    for (let k = params; k < (params + 5); k++) {

        a += `<tr><td>${arr[k].Task}</td><td>${arr[k].Status}</td><td>${arr[k].Priority}</td><td>${arr[k].date}</td>`;
        a += `<td><button onclick="deletes(${k})" class = "btn btn-danger">Delete Item</button></td>`;
        a += `<td><button onclick="Edit(${k})" d class ="btn btn-success"> Edit Item</button></td>`;
        a += "</tr>";
    }
    document.getElementById("record_contant").innerHTML = a;


}

///////////////addRecord Part/////////////////////////////////////
function addRecord() {

    var Task = document.getElementById("Task").value;
    console.log(Task);
    var Status = document.getElementById("Status").value;
    var Priority = document.getElementById("Priority").value;
    var date = document.getElementById("Date").value;


    if (Task != "" && Status != "" && Priority != "" && date != "") {
        arr.push({
            Task: Task,
            Status: Status,
            Priority: Priority,
            date: date

        });
        console.log(arr)

        saveData();
        display();




    } else {

    }

    document.getElementById("Task").value = "";
    document.getElementById('Status').value = "";
    document.getElementById("Priority").value = "";
    document.getElementById("Date").value = "";

};


function deletes(i) {
    arr.splice(i, 1);
    localStorage.setItem('arr', JSON.stringify(arr));
    display();
}

function Edit(item) {
    itemToUpdate = item;

    document.getElementById("Task").value = arr[item].Task;
    document.getElementById('Status').value = arr[item].Status;
    document.getElementById("Priority").value = arr[item].Priority;
    document.getElementById("Date").value = arr[item].date;
    console.log(arr, "Editted Button Successfully worked");

}

function update() {
    var data = {};
    data["Task"] = document.getElementById("Task").value;
    data["Status"] = document.getElementById("Status").value;
    data["Priority"] = document.getElementById("Priority").value;
    data["date"] = document.getElementById("Date").value;
    arr.splice(itemToUpdate, 1, data);
    localStorage.setItem('arr', JSON.stringify(arr));
    display();

}

//----LocalStorage----//

function saveData() {


    localStorage.setItem('arr', JSON.stringify(arr));
}

function getData() {
    var str = localStorage.getItem('arr');
    arr = JSON.parse(str);
    if (!arr) {
        arr = [];
    }
}
getData();
display();