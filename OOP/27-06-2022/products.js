class Products {
    constructor(name, price, salePrice, category) {
        this.name = name;
        this.price = price;
        this.salePrice = Number(salePrice);
        this.category = ["T-shirts", "Pants", "Sweaters", "Shoes"];
    }

    getProductIntro() {
        return this.name + ' ' + this.price;
    }

}