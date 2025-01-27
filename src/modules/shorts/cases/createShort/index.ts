import { ShortRepository } from "../../repositories/ShortRepository";
import { CreateShortController } from "./CreateShortController";
import { CreateShortUseCase } from "./CreateShortUseCase";

const shortRepository = ShortRepository.getInstance();
const createShortUseCase = new CreateShortUseCase(shortRepository);
export const createShortController = new CreateShortController(createShortUseCase);