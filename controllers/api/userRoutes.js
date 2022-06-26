const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// get user with id and all their posts and comments
router.get("/",  withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id , {

      attributes: {exclude: ['password'],},
      include: [
        {
          model: Post,
        },
        {
          model: Comment,
          include: [
            {
              model: Post,
              include: [
                {
                  model: User,
                  attributes: ["username"],
                },
              ],
            },
          ],
        },
      ],
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.put('/', withAuth, async (req, res) => {
  try {
    const user = await User.update(req.body, {
      where: { id: req.session.user_id },
    });
    res.status(200).json("User edited");
  } catch (error) {
    res.status(400).json(error);
  }
})

router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      xbox_id: req.body.xbox_id,
      psn_id: req.body.psn_id,
      discord_id: req.body.discord_id
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.username = userData.username;

      res.status(200).json({message: "You are in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({
          message: "Incorrect username or password, please try again",
        });
      return;
    }

    const validPassword = await userData.validPassword(req.body.password);

    if (!validPassword) {

      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.username = userData.username;

      res.status(200).json({message: "You are in!" });
    });
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
