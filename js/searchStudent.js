let json = localStorage.getItem("student");
var  student = JSON.parse(json);

/* let session = sessionStorage.getItem("session");
if (session == "session") {
        sessionStorage.removeItem("session");
        let json = localStorage.getItem("student");
        student = JSON.parse(json);
} */




// option 1 : We use createElement() , createTextNode()  and appendChile() 

//create element when use method createElement of Object document
var tr = document.createElement("tr");
var td = document.createElement("td");

//create conten/ text in element and after append into element (use appendChild())
var value = document.createTextNode("Nhut Tran");
td.appendChild(value);
tr.appendChild(td);


var td2 = document.createElement("td");
var value2 = document.createTextNode("23");
td2.appendChild(value2);
tr.appendChild(td2);

var td3 = document.createElement("td");
var value3 = document.createTextNode("ItNhutTran@gmail.com");
td3.appendChild(value3);
tr.appendChild(td3);

//looking for a parent element to append into this parent element
var parent = document.getElementById("tbody");
parent.appendChild(tr);



// option 2 : insertRow() and insertCell(). This way is optimized

//looking for the first element table to insert row
var table = document.getElementsByTagName("table")[0];

//iterator array to insert into table
for (let stu of student) {       
        let row = table.insertRow(1); // determine position of row to insert ( ex : 1 means insert start row at position 1 or table.length)
        let cel1 = row.insertCell(0); // insert cell at first position 
        let cel2 = row.insertCell(1);
        let cel3 = row.insertCell(2);
        cel1.innerHTML = stu.name;
        cel2.innerHTML = stu.age;
        cel3.innerHTML = stu.birthPlace;
}



// perform function search Table when click button Search
$("#search").click(function () {
        /*   $("#name").keyup(function () { */
        var value = $("#name").val().trim().toLowerCase();
        $("tbody tr").filter(function () { // use method filter of jquery
                //check value of input has same with text of every cell in table after toLowerCase().
                $(this).toggle($(this).text().trim().toLowerCase().indexOf(value) > -1); 
        })
        /*  }) */
})