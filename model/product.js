const fs = require('fs');

const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
)

const getDataFromFile = cb => {
    fs.readFile(p, (err, content) => {
        // console.log('---> p', p)
        if(err){
            // console.log('--> err in get data', err)
            cb([])
        } else {
            // console.log('--> test parse product')
            cb( JSON.parse(content) )
        }
    })
}

class Product {
    constructor( id, title, imageurl, price, desc ){ // same same Constructor Function 
        this.id = id;
        this.title = title;
        this.imageurl = imageurl;
        this.price = price;
        this.desc = desc;
    }

    static fetchAll (cb) {
        getDataFromFile(cb)
    }

    save(){
        getDataFromFile(products => {
            // thay đổi giá trị của phần tử mảng products
            if(this.id) {
                const Index = products.findIndex(prod => prod.id === this.id);
                let updatedProducts = [...products]; // toán tử spread , nếu truyền dưới dạng biến sẽ được đưa vào mảng mản
                updatedProducts[Index] = this;
                fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                    console.log('error: ', err)
                })

            // ghi mảng products.push...
            } else {
                console.log('products1', products )
                this.id = Math.random().toString();
                products.push(this);
                console.log('products', products)
                fs.writeFile(p, JSON.stringify(products), err => {
                    console.log('error: ', err);
                })
            }

        })
    }

}

module.exports = Product;