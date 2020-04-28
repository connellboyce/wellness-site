var currentNewIndex = 1;

function getInputValue() {
    var table = document.getElementById("addingTable");

    var row = table.insertRow();
    var name = row.insertCell(0);
    var calories = row.insertCell(1);
    var button = row.insertCell(2);

    name.innerHTML = "Custom Input";
    calories.innerHTML = document.getElementById("calorieInput").value;

    currentNewIndex++;

    document.getElementById("calorieInput").value = "";
}
function httpGet()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://localhost:3000/notes" , false );
    xmlHttp.send( null );
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
        var row = table.insertRow();
        row.setAttribute("id", currentNewIndex, 0);

        var btn = document.createElement('input');
        btn.type = "button";
        btn.addEventListener('click', function(){
            this.parentElement.parentElement.remove();
        });
        btn.className = "btn";
        btn.value = "Delete";
        button.appendChild(btn);
        currentNewIndex++;

        var edit = document.createElement('input');
        edit.type = "button";
        edit.addEventListener('click', function() {
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




    name.innerHTML = item.options[item.selectedIndex].text;
    calories.innerHTML = item.value;

    currentNewIndex++;
}
function removeIndex() {
    if (currentNewIndex != 1){
        document.getElementById("addingTable").deleteRow(-1);
        currentNewIndex--;
    }

}
function addAll() {
    var numberOfRows = document.getElementById("addingTable").rows.length;
    var total = 0;
    //for (var i=1; i<=numberOfRows; i++) {
        total = total + document.getElementById("addingTable").rows[-1].cells[1];
        removeIndex();
    //}
    document.getElementById("caloriesRemaining").value = document.getElementById("caloriesRemaining").value - total;
}
function edit(row) {
    row.remove();
    var response = prompt("Enter the new caloric value:");
    var table = document.getElementById("addingTable");

    var row = table.insertRow(currentNewIndex);
    var name = row.insertCell(0);
    var calories = row.insertCell(1);
    var button = row.insertCell(2);

    name.innerHTML = "Edited Input";
    calories.innerHTML = response;
}