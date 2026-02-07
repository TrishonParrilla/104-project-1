


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

let ol = document.getElementById("petnames-ol");
petsList = [pet1,pet2,pet3]; 
for (petnames of petsList){
    let li = document.createElement("li");
    li.textContent = petnames.Name;
    ol.appendChild(li);
}

