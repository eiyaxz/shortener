import { Request, Response } from "express";

import { CreateShortUseCase } from "./CreateShortUseCase";

export class CreateShortController {
    constructor(private createShortUseCase: CreateShortUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { url } = request.body;

        return await this.createShortUseCase.execute(url)
            .then(data => response.status(201).json({ short: data.short }))
            .catch(error => response.status(400).json({ error: error.message }));
    }
}