let myStore = new Store("Cua hang");
function showHome() {
    document.getElementById("main").innerHTML = `
     <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Image</td>
            <td colspan="2">Action</td>
        </tr>
        <tbody id="listProduct">

        </tbody>
    </table>
    `
    let list = myStore.listProduct;
    let html= ``;
    for (let i = 0; i < list.length; i++) {
        html += `
        <tr>
            <td>${list[i].id}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].image}" alt="" width="100%"></td>
            <td><button onclick="showFormUpdate(${i})">Update</button></td>
        <td><button onclick="removeProduct(${i})">Delete</button></td>
        </tr>
        `
    }
    document.getElementById("listProduct").innerHTML = html;
}

function showFormAdd() {
    document.getElementById("main").innerHTML = `
    <input type="text" id="id" placeholder="Id">
    <input type="text" id="name" placeholder="Name">
    <input type="text" id="price" placeholder="Price">
    <input type="text" id="image" placeholder="Image">
    <button onclick="add()">Add</button>
    `
}

function add() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let newProduct = new Product(id, name, price, image);
    myStore.add(newProduct);
    showHome();
}
function removeProduct(index) {
    let isConfirm = confirm("Bạn chắc chắn chứ?");
    if(isConfirm) {
        myStore.remove(index);
        showHome();
    }
}
function showFormUpdate(index) {
    let list = myStore.listProduct;
    let oldProduct = list[index];
    console.log(oldProduct);
    document.getElementById("main").innerHTML = `
    <input type="text" id="id" placeholder="Id" value="${oldProduct.id}">
    <input type="text" id="name" placeholder="Name" value="${oldProduct.name}">
    <input type="text" id="price" placeholder="Price" value="${oldProduct.price}">
    <input type="text" id="image" placeholder="Image" value="${oldProduct.image}">
    <button onclick="update(${index})">Update</button>
    `;
}

function update(index) {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let newProduct = new Product(id, name, price, image);
    myStore.update(index, newProduct);
    showHome();
}


showHome()