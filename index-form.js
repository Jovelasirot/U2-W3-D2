const saveName = () => {
  let nameInput = document.getElementById("name");
  let name = nameInput.value;

  let savedNames = JSON.parse(localStorage.getItem("userNames")) || [];

  if (name.trim() !== "") {
    savedNames.push(name.trim());
    localStorage.setItem("userNames", JSON.stringify(savedNames));

    nameInput.value = "";

    document.getElementById("savedValue").innerText = name;

    displaySavedNames();
  } else {
    alert("Insert a valid name.");
  }
};

const removeName = () => {
  let nameToRemove = document.getElementById("name").value;

  let savedNames = JSON.parse(localStorage.getItem("userNames")) || [];

  let indexToRemove = savedNames.indexOf(nameToRemove);

  if (indexToRemove !== -1) {
    savedNames.splice(indexToRemove, 1);
    localStorage.setItem("userNames", JSON.stringify(savedNames));

    document.getElementById("name").value = "";

    displaySavedNames();
  } else {
    alert("Name not found in local storage.");
  }
};

const displaySavedNames = () => {
  let savedNames = JSON.parse(localStorage.getItem("userNames")) || [];
  let listValues = document.getElementById("listValues");

  listValues.innerHTML = "";

  savedNames.forEach((name) => {
    let listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = name;
    listValues.appendChild(listItem);
  });
};

displaySavedNames();
