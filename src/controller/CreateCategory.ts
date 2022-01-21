import { Request, Response } from "express";
import { prisma } from "../database/clientPrisma";

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    try {
      const { name } = request.body;
      const category = await prisma.category.create({
        data: {
          name,
        },
      });
      return response.json(category);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
