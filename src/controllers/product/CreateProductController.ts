import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";


class CreateProductController{
    async handle(req: Request, res: Response){
        if(!req.file){
            throw new Error("error upload file")
        }
        const {originalname, filename} = req.file
        console.log(originalname)
        console.log(filename)
        const{name, price, description,banner, category_id} = req.body
        const createProductService = new CreateProductService()
        const product = await createProductService.execute({
            name,
            price,
            description,
            banner,
            category_id
        })  
        return res.json(product)
    }
}

export {CreateProductController}
