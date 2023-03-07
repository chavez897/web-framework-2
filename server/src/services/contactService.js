import contactSchema from "../database/models/contactForm.js";

export const insertContactForm = async (data) => {
  try {
    const contact = await contactSchema.create(data);
    if (contact) {
      return contact;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const listContactForm = async (page, perPage) => {
  try {
    const contactForms = await contactSchema
      .find()
      .limit(perPage)
      .skip((page - 1) * perPage)
      .lean();
    if (contactForms) {
      return contactForms;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateContactForm = async (data, id) => {
  try {
    const contact = await contactSchema.findOneAndUpdate({ _id: id }, data);
    if (contact) {
      return contact;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteContactForm = async (id) => {
  try {
    await contactSchema.deleteOne({ _id: id });
    return "deleted";
  } catch (error) {
    throw new Error(error.message);
  }
};
