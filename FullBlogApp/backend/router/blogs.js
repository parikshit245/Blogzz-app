const router = require("express").Router();
const blogs = require("../models/Blog");
const upload = require("../middleware/upload");
//POST
router.post("/post", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newPost = new blogs({ title, description });
    await newPost
      .save()
      .then(() => res.status(200).json({ msg: "data saved" }));
  } catch (error) {
    res.status(400).json({ message: "Some error occured" });
  }
});

router.get("/getData", async (req, res) => {
  try {
    const data = await blogs.find().sort({ createdAt: -1 });
    res.status(200).json({ msg: data });
  } catch (error) {
    res.status(400).json({ message: "Some error occured" });
  }
});

//get recent blogs
router.get("/getRecentData", async (req, res) => {
  try {
    const data = await blogs.find().sort({ createdAt: -1 }).limit(3);
    res.status(200).json({ msg: data });
  } catch (error) {
    res.status(400).json({ message: "Some error occured" });
  }
});

//get data by id
router.get("/getBlog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await blogs.findById(id);
    res.status(200).json({ msg: data });
  } catch (error) {
    res.status(400).json({ message: "Some error occured" });
  }
});

//update by id
router.put("/updateBlog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    await blogs.findByIdAndUpdate(id, { title, description });
    res.status(200).json({ msg: "Data updated successfully" });
  } catch (error) {
    res.status(400).json({ message: "Some error occured" });
  }
});

// router.post('/upload', upload.single('image'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   // Optionally, store the file path in the database along with blog data
//   res.status(200).json({
//     message: 'Image uploaded successfully',
//     file: req.file
//   });
// });

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.body;
    await blogs.findByIdAndDelete(id);
  } catch (error) {
    res.status(400).json({ message: "Cannot delete" });
  }
});

module.exports = router;
