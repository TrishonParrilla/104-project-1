$("#servicesForm").submit(function(event) {
    event.preventDefault();
    console.log(event);

    //get value of input field
    const name = $("#serviceName").val().trim();
    const description = $("#serviceDescription").val().trim();
    const price = $("#servicePrice").val();
});