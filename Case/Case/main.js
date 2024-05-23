let myStore = new Store("Cua hang");

function showHome() {
    document.getElementById("main").innerHTML = `
     <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Image</td>
            <td colspan="2">Action</td>
        </tr>
        <tbody id="listProduct">

        </tbody>
    </table>
    `
    let list = localStorage.getItem('data') == null ? [] : JSON.parse(localStorage.getItem('data'));
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        html += `
        <tr>
            <td>${i + 1}</td>
            <td>${list[i].name}</td>
            <td>${list[i].color}</td>
            <td>${list[i].price}</td>
            <td><img src="${list[i].image}" alt=""></td>
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
    <input type="text" id="color" placeholder="Color">
    <input type="text" id="price" placeholder="Price">
    <input type="text" id="image" placeholder="Image">
    <button onclick="add()">Add</button>
    `
}

function add() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let newProduct = new Product(id, name, price, image);
    myStore.add(newProduct);
    saveLocalStorage()
    showHome();
}

function removeProduct(index) {
    let isConfirm = confirm("Bạn chắc chắn chứ?");
    if (isConfirm) {
        myStore.remove(index);
        saveLocalStorage()
        showHome();
    }
}

function showFormUpdate(index) {
    let list = localStorage.getItem('data') == null ? [] : JSON.parse(localStorage.getItem('data'));
    let oldProduct = list[index];
    console.log(oldProduct);
    document.getElementById("main").innerHTML = `
    <input type="text" id="id" placeholder="Id" value="${oldProduct.id}">
    <input type="text" id="name" placeholder="Name" value="${oldProduct.name}">
    <input type="text" id="color" placeholder="Color" value="${oldProduct.color}">
    <input type="text" id="price" placeholder="Price" value="${oldProduct.price}">
    <input type="text" id="image" placeholder="Image" value="${oldProduct.image}">
    <button onclick="update(${index})">Update</button>
    `;
}

function update(index) {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("image").value;
    let newProduct = new Product(id, name, color, price, image);
    myStore.update(index, newProduct);
    saveLocalStorage()
    showHome();
}

function showFormSearch() {
    document.getElementById('main').innerHTML = ` <br>
    <input type="text" placeholder="Search product name..." id="find">   
    <button onclick="search()">Search</button> `;
}

function search() {
    let nameSearch = document.getElementById("find").value; // lấy dữ liêu từ ô input
    let listSearch = myStore.search(nameSearch);
    if (listSearch.length > 0) {
        let str = ``
        document.getElementById('main').innerHTML = `
        <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Image</td>
        </tr>
        <tbody id="listSearch">

        </tbody>
</table>`
        for (let i = 0; i < listSearch.length; i++) {
            str += `
            <tr>
            <td>${i + 1}</td>
            <td>${listSearch[i].name}</td>
            <td>${listSearch[i].color}</td>
            <td>${listSearch[i].price}</td>
            <td><img src="${listSearch[i].image}" alt=""></td>
           </tr>`
        }
        document.getElementById("listSearch").innerHTML = str;
    } else {
        alert("Không tìm thấy " + nameSearch);
    }
}
function saveLocalStorage() {
    list = myStore.listProduct;
    localStorage.setItem('data', JSON.stringify(list));
}

function restoreLocalStorage() {
    if (localStorage.getItem('data')) {
        list = JSON.parse(localStorage.getItem('data'));
        showHome();
    }
}

window.onload = function () {
    restoreLocalStorage()
}

showHome()

