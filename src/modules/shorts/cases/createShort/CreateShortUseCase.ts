import { Short } from "../../models/Short";
import { ShortRepository } from "../../repositories/ShortRepository";

export class CreateShortUseCase {
    constructor(private shortRepository: ShortRepository) {}

    async execute(url: string): Promise<Short> {
        if (!url) {
            throw new Error("Invalid URL");
        }

        try {
            new URL(url);
        } catch {
            throw new Error("Invalid URL");
        }

        return await this.shortRepository.create(url);
    }
}