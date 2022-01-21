import {Request, Response} from 'express';
import { prisma } from '../database/clientPrisma';

export class CreateProductController {
    async handle(request: Request, response: Response) {
        try {
            const { name, price, bar_code } = request.body;
            const product = await prisma.product.create({
                data: {
                    name,
                    price,
                    bar_code
                },
            });
            return response.json(product);
        } catch (error: any) {
            return response.status(400).json({error: error.message});
        }
    }
}