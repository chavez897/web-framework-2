import {
  listContactForm,
  insertContactForm,
  updateContactForm,
  deleteContactForm,
} from "../services/contactService.js";

export const listContactFormsController = (req, res) => {
  let page = req.query.page === undefined ? 1 : req.query.page;
  let perPage = req.query.perPage === undefined ? 10 : req.query.perPage;
  listContactForm(page, perPage).then((data) => {
    res.send(data);
  });
};

export const insertFormsController = (req, res) => {
  let data = req.body;
  insertContactForm(data).then((result) => {
    res.send(result);
  });
};

export const updateFormsController = (req, res) => {
  let data = req.body;
  let id = req.params.id;
  updateContactForm(data, id).then((result) => {
    res.send(result);
  });
};

export const deleteFormsController = (req, res) => {
  let id = req.params.id;
  deleteContactForm(id).then((result) => {
    res.send(result);
  });
};
