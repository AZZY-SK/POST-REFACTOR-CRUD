

const express=require("express");

const postscontroller=require("../controller/postsController");

const router=express.Router();

// GET ALL
router.get("/", postscontroller.GETALLPOSTS);

// GET SINGLE
router.get("/:id",postscontroller.GETSINGLEPOST);

// CREATE
router.post("/",postscontroller.CREATEPOST);

// DELETE
router.delete("/:id",postscontroller.DELETEPOST);

// UPDATE
router.patch("/:id",postscontroller.UPDATEPOST);

module.exports=router;