class Store {
    name;
    listProduct;

    constructor(name) {
        this.name = name
        this.listProduct = []
    }

    add(newProduct) {
        this.listProduct.push(newProduct)
    }
    remove(index) {
        this.listProduct.splice(index,1)
    }
    update(index,newProduct) {
        this.listProduct[index] = newProduct
    }
}
