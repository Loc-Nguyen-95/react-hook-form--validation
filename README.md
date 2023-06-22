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



* Useful Resources & Links 

    Docs: https://expressjs.com/en/guide/routing.html