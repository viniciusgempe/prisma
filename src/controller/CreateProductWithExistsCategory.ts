import { Request, Response } from "express";
import { prisma } from "../database/clientPrisma";

export class CreateProductWithExistsCategory {
  async handle(request: Request, response: Response) {
    try {
        const { name, price, bar_code, id_category } = request.body;
      const product = await prisma.productCategory.create({
        data: {
            ṕroduct: {
                create: {
                    name,
                    bar_code,
                    price
                }
            },
            category: {
                connect: {
                    id: id_category
                }
            }
        },
      });
      return response.json(product);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
