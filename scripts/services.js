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
    this.reset();
});


//darkmode

$("#changeModeButton").click(function(){
    $("body").toggleClass("dark-mode");
});