
let pet1 = {
    Name: "chase",
    Age: "",
    Gender: "",
    Service: "",
    Breed:""
}

let pet2 = {
    Name: "ash", 
    Age: "",
    Gender: "",
    Service: "",
    Breed:""
}

let pet3 = {
    Name: "leo",
    Age: "",
    Gender: "",
    Service: "",
    Breed:""
}

function registration(name, age, breed, gender, service){
    this.name = name
    this.age = age
    this.breed = breed
    this.gender = gender
    this.service = service
}

pet4 = new registration("Zack","1","Shiba Inu","Male","Bath");
pet5 = new registration("Jeff", "2", "German Sheperd", "Male", "Nail trimming");
pet6 = new registration("Selena", "4","chihuahua", "female","bath");


let ol = document.getElementById("petnames-ol");
petsList = [pet1,pet2,pet3]; 
for (petnames of petsList){
    let li = document.createElement("li");
    li.textContent = petnames.Name;
    ol.appendChild(li);
}

// TODO- make a function to grab .value information from the form 

function petRegister(event) {
    const petForm = document.querySelector("form"); // needs to be declared in function
    event.preventDefault();
    const name = petForm.elements["name-input"].value;
    const age = petForm.elements["age-input"].value;
    const breed = petForm.elements["breed-input"].value;
    const gender = petForm.elements["gender-input"].value;
    const service = petForm.elements["service-input"].value;

    const newPet = new registration(name, age, breed, gender, service);
    const row = displayRow(newPet);
        
}


// const newPet = new registration(name, age, breed, gender, service); // deal w this in function to get info from form
let tableBody = document.getElementById("table-body");
function displayRow(registration) {
    const tableCreate = document.createElement("tr");
    tableCreate.innerHTML += `
                            <td scope ="row">${registration.name}</td>
                            <td scope ="row">${registration.age}</td>
                            <td scope ="row">${registration.service}</td>
                            <td scope ="row">${registration.gender}</td>
                            <td scope ="row">${registration.breed}</td>
                            <td scope ="row"><button class="btn btn-danger type="button" onclick="deletePet()">Delete</button></td>
                             `;
    tableBody.appendChild(tableCreate);
}
function deletePet() {
    let tableBody = document.getElementById("table-body");
    if(tableBody != "") { // if tableBody is not holding the value of an empty string
        tableBody.deleteRow(-1); // takes an index where it specifically targets and deletes the last row
    }
   
}