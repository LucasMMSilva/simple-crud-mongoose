const Product = require('../Models/Product');
module.exports = class ProductController{

    static async showProducts(req,res){
        let products = await Product.find().lean();
        if(!products){
            products = false;
        }
        res.render('product/home',{products})
    }
    static async create(req,res){
        const name  = req.body.name;
        const price = req.body.price;

        const product = new Product({name:name,price:price});
        await product.save();
        
        res.redirect('/product');
    }
    static async edit(req,res){
        const id = req.params.id;
        const product = await Product.findById(id).lean();

        let products = await Product.find().lean();

        res.render('product/home',{product,products})
    }
    static async update(req,res){
        const id = req.body.id;
        const name = req.body.name;
        const price = req.body.price;

        const product = {
            name,price
        }

        await Product.updateOne({_id:id},product)

        res.redirect('/')
    }
    static async delete(req,res){
        const id = req.params.id;
        await Product.deleteOne({_id:id});
        res.redirect('/');
    }


}
