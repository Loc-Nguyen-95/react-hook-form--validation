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

    Serve static file: app.use( express.static(...　'public') )

    ->VD external css :  link href=" / folder in public / file (full name) "

    * Note: Toggle menu 
        
        button Menu id "toogle"

        div class "backdrop"

        view file ejs chèn < script src=" /js/main.js " >
            add event listener 'click' 
            function excute 
                style.display = 'block/none'
                classList.add/remove = 'open'  (css open)

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

b. __method get Cart__ 
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


<h3>Edit , Delete product (admin)</h3>

    1. Edit **

    GD1: Chuyển qua view form edit 
        button edit -> a href = " /.../ param: product.id " ( GET )

        route Get '/.../ :ID 

        controller get form edit 
            ID = req.params. ..
            Product.findById(ID) -> product

                editing : true 
                product: product

        view (form add nhưng nhận [ editing: true] và [product] )

            if editing true 
                input have value : product. ... ---> post body
                Thêm trường id : product.id 

        GD2: thực hiện post từ data form edit
            route 
            controller nhận data : req.body 
            Xử lí data mới bằng model Product.save() (với id)
            redirect về .../products

    2. Delete 
    
        button form POST
            input name ... value = product.id 

        model Product -> static deleteProduct 

            readFile 
            updatedProducts = filter !id 
            writeFile ( updatedProducts )

        controller 
            nhận id = req.body. ... 
            Product.deleteProduct( id )

* Useful Resources & Links 

    Docs: 
        * event loop Nodejs
            https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick

        * express:
            https://expressjs.com/en/guide/routing.html 

        * view engine (app.set)
            https://expressjs.com/en/4x/api.html#app.set

        * body-parser 
            https://expressjs.com/en/resources/middleware/body-parser.html
        
        * routing
            https://expressjs.com/en/guide/routing.html#routing


