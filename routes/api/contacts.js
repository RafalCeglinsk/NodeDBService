import express from "express";

import { validateContactData } from "#validation/joi.js";
import { indexContacts } from "#controllers/contacts/indexContacts.js";
import { showContacts } from "#controllers/contacts/showContacts.js";
import { createContacts } from "#controllers/contacts/createContacts.js";
import { deleteContacts } from "#controllers/contacts/deleteContacts.js";
import { updateContacts } from "#controllers/contacts/updateContacts.js";
import { updateStatusContact } from "#controllers/contacts/updateStatusContact.js";

const contactRouter = express.Router();

contactRouter.get("/", indexContacts);

contactRouter.get("/:contactId", showContacts);

contactRouter.post("/", validateContactData, createContacts);

contactRouter.delete("/:contactId", deleteContacts);

contactRouter.put("/:contactId", validateContactData, updateContacts);

contactRouter.patch("/:contactId/favorite", updateStatusContact);

export { contactRouter };
