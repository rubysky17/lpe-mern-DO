const { User } = require("../models/users.model");
const bcrypt = require("bcryptjs");
const fs = require("fs");

const getList = async (req, res) => {
  try {
    const userList = await User.find({}).exec();

    res.status(200).send(userList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const userDetail = await User.findById(id).exec();
    if (userDetail) {
      res.status(200).send(userDetail);
    } else {
      res.status(400).send({
        message: `Not found detail user have id ${id}`,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = async (req, res) => {
  const { password } = req.body;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({ ...req.body, password: hashPassword });

    await newUser.save();

    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    let user = await User.findById(id);

    const userDelete = await User.deleteOne({
      _id: id,
    });

    res.status(200).send(userDelete);
  } catch (error) {
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await User.findByIdAndUpdate(id, { ...req.body }).exec();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const uploadAvatar = async (req, res) => {
  const { file, user } = req;

  const urlImage = `${process.env.SERVER_HOSTNAME}/${file.path}`;

  try {
    await User.findByIdAndUpdate(user._id, {
      avatar: urlImage,
    }).exec();

    res.status(200).send({
      status: "success",
      data: urlImage,
    });
  } catch (error) {
    res.status(400).send({
      status: "failed",
      message: "Can't find user",
    });
  }
};

const deleteAvatar = async (req, res) => {
  try {
    const { user } = req;

    const deleteUserAvatar = await User.findById(user._id).exec();

    const getFileAvatarname = deleteUserAvatar.avatar
      .split("/")
      .slice(-1)
      .pop();

    try {
      fs.unlinkSync(`${getFileAvatarname}`);

      if (deleteUserAvatar) {
        await User.findByIdAndUpdate(user._id, {
          avatar: "",
        }).exec();

        res.status(200).send({
          status: "success",
          message: "Xóa thành công",
        });
      } else {
        res.status(400).send({
          status: "failed",
          message: "Can't find user",
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getList,
  getDetail,
  update,
  create,
  remove,
  uploadAvatar,
  deleteAvatar,
};
