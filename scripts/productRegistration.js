// identify the form

const productForm = document.querySelector("form"); //search for the html element

const body = document.getElementById("body");
// Define the constructor
function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}

// retrieve the information 
function registerProduct(event) {
    event.preventDefault(); //avoid refresh in the page
    
    // Use the input name to pull the data
    const name = productForm.elements["productName"].value;
    const price = productForm.elements["productPrice"].value;
    const category = productForm.elements["productCategory"].value;
    
    //create object

    const newProduct = new Product(name, price, category);
    console.log(newProduct);

    const row = displayRow(newProduct);
    body.appendChild(row);
}

function displayRow(newProduct) {
    //use the information to create a row on the table
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${newProduct.name}</td>
    <td>${newProduct.price}</td>
    <td>${newProduct.category}</td>
    <td> <button class="btn btn-danger">Delete</td>
    
    
    
    `;
    return row;

}

// move this folder to practice later

