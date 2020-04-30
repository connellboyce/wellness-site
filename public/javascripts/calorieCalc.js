var currentNewIndex = 1;

function getInputValue() {
    var table = document.getElementById("addingTable");

    var row = table.insertRow();
    var name = row.insertCell(0);
    var calories = row.insertCell(1);
    var button = row.insertCell(2);
    var editCell = row.insertCell(3);

    var table = document.getElementById("addingTable");
    row.setAttribute("id", currentNewIndex, 0);

    var btn = document.createElement('input');
    btn.type = "button";
    btn.addEventListener('click', function () {
        this.parentElement.parentElement.remove();
    });
    btn.className = "btn";
    btn.value = "Delete";
    button.appendChild(btn);
    name.innerHTML = "Custom Input";
    calories.innerHTML = document.getElementById("calorieInput").value;

    currentNewIndex++;

    document.getElementById("calorieInput").value = "";
}
function httpGet() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://localhost:3000/notes", false);
    xmlHttp.send(null);
    document.getElementById("get").disabled = true;

    return JSON.parse(xmlHttp.responseText);
}
function load() {
    console.log(httpGet());
    var ele = document.getElementById('sel');
    var myArray = httpGet();
    for (var i = 0; i < myArray.length; i++) {
        ele.innerHTML = ele.innerHTML +
            '<option value="' + myArray[i].calories + '">' + myArray[i].title + '</option>';
    }
}
function show(item) {
    var table = document.getElementById("addingTable");

    var row = table.insertRow();
    var name = row.insertCell(0);
    var calories = row.insertCell(1);
    var button = row.insertCell(2);
    var editCell = row.insertCell(3);

    var table = document.getElementById("addingTable");
    row.setAttribute("id", currentNewIndex, 0);

    var btn = document.createElement('input');
    btn.type = "button";
    btn.addEventListener('click', function () {
        this.parentElement.parentElement.remove();
    });
    btn.className = "btn";
    btn.value = "Delete";
    button.appendChild(btn);
    currentNewIndex++;

    var edit = document.createElement('input');
    edit.type = "button";
    edit.addEventListener('click', function () {
        this.parentElement.parentElement.remove();
        var response = prompt("Enter the new caloric value:");
        var table = document.getElementById("addingTable");

        var row = table.insertRow();
        var name = row.insertCell(0);
        var calories = row.insertCell(1);
        var button = row.insertCell(2);
        var editCell = row.insertCell(3);

        var table = document.getElementById("addingTable");
        row.setAttribute("id", currentNewIndex, 0);

        var btn = document.createElement('input');
        btn.type = "button";
        btn.addEventListener('click', function () {
            this.parentElement.parentElement.remove();
        });
        btn.className = "btn";
        btn.value = "Delete";
        button.appendChild(btn);
        name.innerHTML = "Edited Input";
        calories.innerHTML = response;
    });
    edit.className = "btn";
    edit.value = "Edit";
    editCell.appendChild(edit);




    name.innerHTML = item.options[item.selectedIndex].text;
    calories.innerHTML = item.value;

    currentNewIndex++;
}
function removeIndex() {
    if (currentNewIndex != 1) {
        document.getElementById("addingTable").deleteRow(-1);
        currentNewIndex--;
    }

}
function addAll() {
    let rows = document.getElementById("addingTable").querySelectorAll('tr');
    let tds = Array.from(rows, row => row.cells[1]);
    var total = 0;
    console.log(tds);
    for (var i = 1; i < tds.length; i++) {
        if (!isNaN(tds[i].innerHTML)) {
            total = total + parseInt(tds[i].innerHTML, 10);
        }
    }
    document.getElementById("caloriesRemaining").value = parseInt(document.getElementById("caloriesRemaining").value, 10) - total;
}
function edit(row) {
    row.remove();
    var table = document.getElementById("addingTable");

    var row = table.insertRow();
    var name = row.insertCell(0);
    var calories = row.insertCell(1);
    var button = row.insertCell(2);
    var editCell = row.insertCell(3);

    var table = document.getElementById("addingTable");
    row.setAttribute("id", currentNewIndex, 0);

    var btn = document.createElement('input');
    btn.type = "button";
    btn.addEventListener('click', function () {
        this.parentElement.parentElement.remove();
    });
    btn.className = "btn";
    btn.value = "Delete";
    button.appendChild(btn);
    currentNewIndex++;

    var edit = document.createElement('input');
    edit.type = "button";
    edit.addEventListener('click', function () {
        this.parentElement.parentElement.remove();
        var response = prompt("Enter the new caloric value:");
        var table = document.getElementById("addingTable");

        var row = table.insertRow();
        var name = row.insertCell(0);
        var calories = row.insertCell(1);
        var button = row.insertCell(2);

        name.innerHTML = "Edited Input";
        calories.innerHTML = response;
    });
    edit.className = "btn";
    edit.value = "Edit";
    editCell.appendChild(edit);

    name.innerHTML = "Edited Input";
    calories.innerHTML = response;
}