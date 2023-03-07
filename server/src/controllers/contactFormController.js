import {
  listContactForm,
  insertContactForm,
  updateContactForm,
  deleteContactForm,
} from "../services/contactService.js";
import nodemailer from "nodemailer";

export const listContactFormsController = (req, res) => {
  let page = req.query.page === undefined ? 1 : req.query.page;
  let perPage = req.query.perPage === undefined ? 10 : req.query.perPage;
  listContactForm(page, perPage).then((data) => {
    res.send(data);
  });
};

export const insertFormsController = (req, res) => {
  /*const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "wisepalnotification@gmail.com",
      pass: "zrlcxojekhudhzcm",
    },
  });
  let data = req.body;
  const options = {
    from: "TESTING <sender@gmail.com>",
    to: "testing_node_wisepals@yopmail.com",
    subject: "WisePal Notification",
    text: `User: ${data.user}\nLanguage: ${data.language}\nSkill: ${data.skill}\nDescription: ${data.description}`,
  };

  const info = transporter.sendMail(options).then((email) => {
    console.log(email);
    insertContactForm(data).then((result) => {
      res.send(result);
    });
  });*/

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
