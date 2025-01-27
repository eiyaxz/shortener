import { BeforeInsert, Column, CreateDateColumn, Entity, ObjectIdColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { ShortRepository } from "../repositories/ShortRepository";

@Entity("shorts")
export class Short {
    @ObjectIdColumn()
    _id?: string;

    @Column()
    url!: string;

    @Column()
    short?: string;

    @CreateDateColumn()
    created_at!: Date;

    @BeforeInsert()
    generateId() {
        if (!this._id) {
            this._id = uuidv4();
        }
    }

    @BeforeInsert()
    async generateShort() {
        while (!this.short) {
            const short = uuidv4().split("-")[0];
            const exists = await ShortRepository.getInstance().findByShort(short);

            if (!exists) {
                this.short = short;
            }
        }
    }

    @BeforeInsert()
    generateDate() {
        if (!this.created_at) {
            this.created_at = new Date();
        }
    }
}