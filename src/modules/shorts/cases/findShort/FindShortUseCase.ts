import { Short } from "../../models/Short";
import { ShortRepository } from "../../repositories/ShortRepository";

export class FindShortUseCase {
    constructor(private shortRepository: ShortRepository) {}

    async execute(short: string): Promise<Short> {
        if (!short) {
            throw new Error("Short is required");
        }

        const instance = await this.shortRepository.findByShort(short);

        if (!instance) {
            throw new Error("Short not found");
        }

        return instance;
    }
}