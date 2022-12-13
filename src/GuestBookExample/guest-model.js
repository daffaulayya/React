import { nanoid } from "nanoid";

export const GUEST_BOOK_PAGE = {
  LIST: "list",
  FORM: "form",
};

export class Guest {
  constructor(firstName, lastName, phone, address) {
    this.id = nanoid();
    this.firstName = firstName || "";
    this.lastName = lastName || "";
    this.phone = phone || "";
    this.address = address || "";
  }
}
