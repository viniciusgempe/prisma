import { Request, Response } from "express";
import { prisma } from "../database/clientPrisma";

export class CreateProductCategoryController {
  async handle(request: Request, response: Response) {
    try {
      const { id_category, id_product } = request.body;
      const product = await prisma.productCategory.create({
        data: {
          id_category,
          id_product,
        },
      });
      return response.json(product);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
