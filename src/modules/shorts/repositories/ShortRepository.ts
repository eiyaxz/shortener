import { Repository } from "typeorm";

import { Short } from "../models/Short";
import { database } from "../../../database";

export class ShortRepository {
    private static INSTANCE: ShortRepository;
    private shorts: Repository<Short>;

    constructor() {
        this.shorts = database.getMongoRepository(Short);
    }

    static getInstance(): ShortRepository {
        if (!this.INSTANCE) {
            this.INSTANCE = new ShortRepository();
        }

        return this.INSTANCE;
    }

    async index(): Promise<Short[]> {
        return this.shorts.find();
    }

    async create(url: string): Promise<Short> {
        const short = this.shorts.create({ url });

        await this.shorts.save(short);

        return short;
    }

    async save(short: Short): Promise<Short> {
        return this.shorts.save(short);
    }

    async findByShort(short: string): Promise<Short | null> {
        return this.shorts.findOne({ where: { short } });
    }
}