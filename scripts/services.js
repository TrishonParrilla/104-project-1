function Service(name, description, price){
    this.name = name;
    this.description = description;
    this.price = price;
}

$("#servicesForm").submit(function(event) {
    event.preventDefault();
    console.log(event);



    //get value of input field
    const name = $("#serviceName").val().trim();
    const description = $("#serviceDescription").val().trim();
    const price = $("#servicePrice").val();

    //if (name == "" || description == "" || price <= 0 ){
        // alert("All fields required");
       // $("#serviceName").css("border", "solid, 2px, red");
    //}
    if(name){
        $("#register-button").css("background-color", "#5d8a4d") 
    }

    if(!name){
         $("#serviceName").css("border", "solid, 2px, red");

    }
    else { 
        $("#serviceName").css("border","");

    }
    if(!description){
         $("#serviceDescription").css("border", "solid, 2px, red");

    }
    else { 
        $("#serviceDescription").css("border","");

    }
    if(!price){
         $("#servicePrice").css("border", "solid, 2px, red");

    }
    else { 
        $("#servicePrice").css("border","");

    }
    
    // Only save if all fields are valid
    if(name && description && price) {
        let service1 = new Service(name, description, price);
        localStorage.setItem('service', JSON.stringify(service1));
        console.log(service1);
        this.reset();
    }


});

$("#cancel-button").click(function(event)
{   
    event.preventDefault();
    $("#servicePrice").css("border","");
    $("#serviceDescription").css("border","");
    $("#serviceName").css("border","");
    $("#register-button").css("background-color", "#d4a373")

})
//darkmode

$("#changeModeButton").click(function(){
    $("body").toggleClass("dark-mode");
});