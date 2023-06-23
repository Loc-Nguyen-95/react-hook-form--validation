const Product = require('../model/product');

exports.getFormAdd = (req, res, next) => {
    res.render('admin/add-product', {
        path: '/admin/add-product',
        pageTitle: 'Add product',
        editing: false
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

exports.getEdit = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(prodId);
    Product.findById(prodId, product => {
        console.log(product)
        res.render('admin/add-product', {
            pageTitle: 'Edit product',
            path: '/admin/edit-product', //?
            editing: true,
            product: product
        })
    })
}

exports.postEdit = (req, res, next) => {
    console.log(req.body);
    const id = req.body.prodId;
    const updatedTitle = req.body.title;
    const updatedImageurl = req.body.imageurl;
    const updatedPrice = req.body.price;
    const updatedDesc = req.body.desc;

    const newProduct = new Product(id, updatedTitle, updatedImageurl, updatedPrice, updatedDesc);
    newProduct.save();

    res.redirect('/admin/products')
}

exports.postDelete = (req, res, next) => {
    const id = req.body.productId;
    Product.deleteProduct(id);
    res.redirect('/admin/products')
}