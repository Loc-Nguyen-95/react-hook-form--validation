const Product = require('../model/product');

exports.getFormAdd = (req, res, next) => {
    res.render('admin/add-product', {
        path: '/admin/addd-product',
        pageTitle: 'Add product'
    })
}

exports.saveProduct = (req, res, next) => {
    console.log('--> req.body: ', req.body);
    const title = req.body.title;
    const imageurl = req.body.imageurl;
    const price = req.body.price;
    const desc = req.body.desc;

    const product = new Product(null, title, imageurl, price, desc);

    console.log(product);
    
    product.save();

    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render( 'admin/products' , {
            pageTitle: 'Admin products',
            path: '/admin/products',
            prods: products
        })    
    })
}