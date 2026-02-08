
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

