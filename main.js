var button = document.getElementById("button");
button.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
  var name = document.getElementById("name").value;
  var roll = document.getElementById("roll").value;
  var gender = document.getElementsByName("gender");
  var language = document.getElementsByName("language");

  if (!name || !roll || !gender || !language) {
    alert("Please Fill All the Boxes");
    return;
  }
  var selectGender;
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      selectGender = gender[i].value;
    }
  }
  var selectLanguage = [];
  for (var i = 0; i < language.length; i++) {
    if (language[i].checked) {
      var updateLanguage = language[i].value;
      selectLanguage.push(updateLanguage);
    }
  }

  var display = document.getElementById("display");

  var newRow = display.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML = name;
  cell2.innerHTML = roll;
  cell3.innerHTML = selectGender;
  cell4.innerHTML = selectLanguage;

  row++;
}
