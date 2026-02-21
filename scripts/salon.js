let salon = {
    name: "Parri's Salon",                  //salon object about info
    hours:"9am-5pm",
    phone:"(918)-337-4375",
    address:"1295 Cassidy Street",
}


function displaySalonInfo() {       //display about info to html function
    let aboutUsSection = document.getElementById("about-us-section")   
    let salonInfo = document.createElement("p");
    salonInfo.innerHTML = `Welcome to ${salon.name} You can find us at ${salon.address}! We're open ${salon.hours}. You can contact us at ${salon.phone} `
    aboutUsSection.appendChild(salonInfo);
}

function displayContactInfo() {       //display contact info in Contact Us card
    document.getElementById("salon-phone").textContent = salon.phone;
    document.getElementById("salon-address").textContent = salon.address;
    document.getElementById("salon-hours").textContent = salon.hours;
}
displayContactInfo();