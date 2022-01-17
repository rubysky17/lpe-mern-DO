const uploadImage = (req, res) => {
  const { file } = req;

  if (!file) {
    res.status(400).send({
      status: "failed",
      message: "Can't find user",
    });
  } else {
    res.status(200).send({
      status: "success",
      url: file.path,
    });
  }
};

const create = (req, res) => {};

const remove = (req, res) => {};

const edit = (req, res) => {};

module.exports = {
  uploadImage,
  create,
  edit,
};
