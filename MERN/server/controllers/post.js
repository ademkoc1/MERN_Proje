const PostSchema = require('../models/post');

const getPost = async (req, res) => {
  try {
    const getPost = await PostSchema.find();
    res.status(200).json(getPost);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createPost = async (req, res) => {
 try {
  const newPost =await PostSchema.create(req.body);
  console.log(newPost);
  res.status(201).json(newPost)
 } catch (error) {
  console.log(error)
  res.status(500).json({msg:error.message})
 }
};


const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await PostSchema.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await PostSchema.findByIdAndRemove(id);
    res.status(200).json({ msg: "Post deleted", deletedPost });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { getPost, createPost, updatePost, deletePost };
