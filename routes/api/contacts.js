import express from "express";

import { validateContactData } from "#validation/contacts.validation.js";
import { indexContacts } from "#controllers/contacts/indexContacts.js";
import { showContacts } from "#controllers/contacts/showContacts.js";
import { createContacts } from "#controllers/contacts/createContacts.js";
import { deleteContacts } from "#controllers/contacts/deleteContacts.js";
import { updateContacts } from "#controllers/contacts/updateContacts.js";
import { updateStatusContact } from "#controllers/contacts/updateStatusContact.js";
import { auth } from "../../auth/auth.js";

const contactRouter = express.Router();

contactRouter.get("/", auth, indexContacts);

contactRouter.get("/:contactId", auth, showContacts);

contactRouter.post("/", validateContactData, auth, createContacts);

contactRouter.delete("/:contactId", auth, deleteContacts);

contactRouter.put("/:contactId", validateContactData, auth, updateContacts);

contactRouter.patch("/:contactId/favorite", auth, updateStatusContact);

export { contactRouter };
