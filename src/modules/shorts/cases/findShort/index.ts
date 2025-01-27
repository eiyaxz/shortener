import { ShortRepository } from "../../repositories/ShortRepository";
import { FindShortController } from "./FindShortController";
import { FindShortUseCase } from "./FindShortUseCase";

const shortRepository = ShortRepository.getInstance();
const findShortUseCase = new FindShortUseCase(shortRepository);
export const findShortController = new FindShortController(findShortUseCase);