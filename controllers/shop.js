const Product = require('../model/product');
const Cart = require('../model/cart');

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        })
    });
}

exports.postCart = (req, res, next) => {
    const id = req.body.productId;
    Product.findById(id, product => {
        Cart.addProduct(id, product.price);
    })
    res.redirect('/cart')
}

exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for (product of products) {

                const cartProductData = cart.products.find(
                    prod => prod.id === product.id
                )
                // console.log('--> cartProData', cartProductData)
                if (cartProductData) {
                    cartProducts.push({ productData: product, qty: cartProductData.qty })
                }
            }
            // console.log('cartProducts', cartProducts)
            res.render('shop/cart', {
                pageTitle: 'Cart',
                path: '/cart',
                products: cartProducts
            })
        })
    })
}

exports.postDeleteCart = (req, res, next) => {
    console.log('hello')
    const id = req.body.prodId;
    console.log(id)
    Product.findById(id, product => {
        Cart.deleteProductInCart(id, product.price)
    })
    res.redirect('/')
}