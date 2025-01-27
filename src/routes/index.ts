import { Router } from "express";

import { createShortController } from "../modules/shorts/cases/createShort";
import { findShortController } from "../modules/shorts/cases/findShort";

export const router = Router();

router.post("/short", async (request, response) => {
    await createShortController.handle(request, response);
});

router.get("/:short", async (request, response) => {
    await findShortController.handle(request, response);
});

router.get("*", (_, response) => {
    response.status(404).json({ error: "Page not found" });
});