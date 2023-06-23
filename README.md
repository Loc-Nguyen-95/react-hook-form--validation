# NODEAPP - Part2 : Create a website with Express, Template engine, M-V-C

<h3>Express.js</h3>  

    app = call express()
    
    app.use : midleware

    app.listen : port 

    app.set : view engine

<h3>Template engine</h3>

    RES.render(view) 
        Trong đó : view : view engine (dạng String) : VD: 'admin/add-product'

<h3>Model</h3>

    Read file json : fs.readFile(path, (error, content) => { ...} )
    
    class ModelName {
        + constructor()
        + static fetchAll() : Phương thức tĩnh
        + save() 
    }

<h3>CSS</h3>

    Serve static file: app.use( express.static(...) )

<h3>Add product to cart, delete cart item</h3>

    1. Button "Add to cart", method: Post, value: product Id

    2. add new product to cart with id (model method)

a. __method addProduct__ (id, Price)
            cart = { products: [], totalPrice: 0 }
            cart = readFile (parse data) if not err
            Find product_index 

            let updated_product 
                if product_index 
                    + updated_product = {...product_index} // {...spread}
                    updated_product.qty = updated_product.qty + 1

                    + cart.products = [...cart.products] // {...spread}
                    cart.products_index = updated_product

                else (not find product_index)
                    + updated_product = {id : id, qty: 1}
                    + cart.products = [...cart.products, updated_product]
                
            cart.totalPrice = cart.totalPrice + Price

            writeFile cart 

        b. method get Cart 
            readFile

c. __delete Cart__ (ID, PRICE) //tất nhiên có data trong file json

            (1) readFile 

                if not err 

                    (2) updated_cart = {...parse(content)}; // đưa về dạng { object }

                    (3) Tìm product xoá trong Cart 
                    const product = list products data -> find by ID

                    if not product 
                        return 
                    
                    (4)
                    // update lại list product (thuộc cart) mới bằng cách filter !id 
                    
                    // tính lại price bằng cách 
                        updated_cart.totalPrice = updated_cart.totalPrice - PRICE * product.qty

                    writeFile (updated_cart) 


* Useful Resources & Links 

    Docs: https://expressjs.com/en/guide/routing.html 

