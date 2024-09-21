const categoryModel = require("../models/categoriesModel");
const slugify = require("slugify");

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(404).json({ message: "Missing input", err });
  }
  const checkCategory = await categoryModel.findOne({ name });
  if (checkCategory) {
    return res.status(400).json({ message: "Category da duoc them" });
  }
  const slug = slugify(name, {
    lower: true,
    locale: "vi",
  });
  const newCategory = await categoryModel.create({ name: name, slug: slug });
  return res.status(200).json({ message: "Category created", newCategory });
};
const getAllCategory = async (req, res) => {
  const allCategory = await categoryModel.find();
  return res.status(200).json({ message: "Category", allCategory });
};
module.exports = { createCategory, getAllCategory };
