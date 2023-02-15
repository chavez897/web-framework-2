import contentSchema from "../database/models/contentModel.js";

export const getAllContentsService = async () => {
  return await contentSchema.find();
};

export const createContentService = async (Content) => {
  var car = new contentSchema(Content);
  console.log("car", car);

  return await contentSchema.create(Content);
};
export const getContentByIdService = async (id) => {
  return await contentSchema.findById(id);
};

export const updateContentService = async (id, Content) => {
  return await contentSchema.findByIdAndUpdate(id, Content);
};

export const deleteContentService = async (id) => {
  return await contentSchema.findByIdAndDelete(id);
};
