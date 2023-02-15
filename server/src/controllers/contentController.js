import {
  createContentService,
  getContentByIdService,
  updateContentService,
  deleteContentService,
  getAllContentsService,
} from "../services/ContentService.js";

export const getAllContents = async (req, res) => {
  try {
    const Contents = await getAllContentsService();
    res.json({ data: Contents, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createContent = async (req, res) => {
  try {
    const Content = await createContentService(req.body);
    console.log(Content);
    res.json({ data: Content, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getContentById = async (req, res) => {
  try {
    const Content = await getContentByIdService(req.params.id);
    res.json({ data: Content, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateContent = async (req, res) => {
  try {
    const Content = await updateContentService(req.params.id, req.body);
    res.json({ data: Content, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteContent = async (req, res) => {
  try {
    const Content = await deleteContentService(req.params.id);
    res.json({ data: Content, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
