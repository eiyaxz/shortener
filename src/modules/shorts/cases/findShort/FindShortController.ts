import { Request, Response } from "express";
import { FindShortUseCase } from "./FindShortUseCase";

export class FindShortController {
    constructor(private findShortUseCase: FindShortUseCase) {}

    async handle(request: Request, response: Response): Promise<void> {
        const { short } = request.params;

        await this.findShortUseCase.execute(short)
            .then(instance => response.redirect(instance.url))
            .catch(() => response.status(404).json({ error: "Short not found" }));
    }
}