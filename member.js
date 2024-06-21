function skillsMember()
{
    var skill = document.getElementById("skill").value;
    var level = document.getElementById("level").value;
    var table = document.getElementById("skillsTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = skill;
    cell2.innerHTML = level;
}