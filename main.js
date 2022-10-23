let store = [];
// Activates when all forms have been filled correctly
function createAcc() {
    let name = document.getElementById("accName").value;
    let type = document.getElementById("accType").value;
    let age = document.getElementById("accAge").value;
    let date = document.getElementById("accDate").value;
    if (name == "") {
        document.getElementById("empty").style.display = "inherit";
        return (document.getElementById("empty").innerText =
            "Input account name");
    } else if (age == "") {
        document.getElementById("empty").style.display = "inherit";
        return (document.getElementById("empty").innerText = "Input account age");
    } else if (isNaN(age) || age < 1 || age > 80) {
        return alert("Age not valid");
    } else if (date == "") {
        document.getElementById("empty").style.display = "inherit";
        return (document.getElementById("empty").innerText =
            "Input date of sign up");
    }
    const create = { name, type, age, date };
    store.push(create);
    localStorage.setItem("accUsers", JSON.stringify(store));
    console.log(store);
    document.getElementById("empty").style.display = "none";
    addToScreen();
}

// Houses all details shown on the table as regards the function for which it is called
function addToScreen() {
    document.getElementById("panel").innerHTML = "";
    store.map((value, index) => {
        document.getElementById("panel").innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${value.name}</td>
        <td>${value.type}</td>
        <td>${value.age}</td>
        <td>${value.date}</td>
        <td> <button class="btn btn-danger removeB" type="button" onclick="removeUser(${index})">
            Remove
          </button></td>
        </tr>
        `;
    });
}

//   // Remove button to delete the exact form pre-registered in the list of forms
function removeUser(index) {
    let deleteUser = localStorage.getItem("accUsers");
    let stringToArray = JSON.parse(deleteUser);
    stringToArray.splice(index, 1);
    localStorage.setItem("accUsers", JSON.stringify(stringToArray));
    store = stringToArray;
    console.log(stringToArray);
    addToScreen();
}

// Show function denotes the list of registered users on the Table after been brought back from LocalStorage
function show() {
    let shows = localStorage.getItem("accUsers");
    let showItem = JSON.parse(shows);
    store = showItem;
    addToScreen();
}

// show() which represents the data from the local storage directly shown on the table
show();