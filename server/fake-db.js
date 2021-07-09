const Product = require('./model/product');

class FakeDB {
    constructor() {
        this.products = [
            {
                coverimage: "./assets/img/phone-cover.jpg",
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: "heading1 text",
                heading2: "heading2 text",
                heading3: "heading3 text",
                headingtext1: "テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１ テキスト１",
                headingtext2: "テキスト２",
                headingtext3: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
            },
            {
                coverimage: "./assets/img/phone-cover.jpg",
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: "heading1 text",
                heading2: "heading2 text",
                heading3: "heading3 text",
                headingtext1: "テキスト１",
                headingtext2: "テキスト２",
                headingtext3: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
            },
            {
                coverimage: "./assets/img/phone-cover.jpg",
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1: "heading1 text",
                heading2: "heading2 text",
                heading3: "heading3 text",
                headingtext1: "テキスト１",
                headingtext2: "テキスト２",
                headingtext3: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
            },
            {
                coverimage: "./assets/img/phone-cover.jpg",
                name: 'Phone Extra',
                price: 999,
                description: 'A extra phone',
                heading1: "heading1 text",
                heading2: "heading2 text",
                heading3: "heading3 text",
                headingtext1: "テキスト１",
                headingtext2: "テキスト２",
                headingtext3: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
            }
        ];
    }

    async initDb() {
        await this.cleanDb();
        this.publishProductDB();
    }
    
    async cleanDb() {
        await Product.deleteMany({});
    }

    publishProductDB() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product);
                newProduct.save();
            }
        )
    }

    seeDb() {
        this.publishProductDB();
    }
}

module.exports = FakeDB;