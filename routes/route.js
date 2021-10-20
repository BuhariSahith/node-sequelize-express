const express = require("express");
const router = express.Router();
const db = require("../config/database");
const DevModels = require("../sequelize-models/Dev");

router.get("/", (req, res) =>
  DevModels.findAll()
    .then((devs) => {
      console.log(devs);
      res.status(200);
    })
    .catch((err) => console.log(err))
);

// ADD A DEV
router.get('/get', (req, res) => {
  const data = {
    id: 1,
    name: 'buhari sahith',
    role: 'Software Developer',
    experience: "1.5",
  };
  let { name, role, experience } = data;

  // INSERTING IN THE TABEL DB

  DevModels.create({
    name,
    role,
    experience,
  })
    .then((dev) => res.redirect("/dev"))
    .catch((err) => res.render("error", { error: err.message }));
});
module.exports = router;
