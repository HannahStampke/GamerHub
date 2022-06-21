const router = require("express").Router();
const { User, Post } = require("../../models");
const withAuth = require("../../utils/auth");

// get user with id and all their posts and comments
router.get("/", withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id, {
      exclude: ["password"],
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
    res.status(200).json("found user");
    res.render("/profile", user);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req, body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/', withAuth, async (req, res) => {
  try {
    const user = await User.update(req.body, {
      where: { id: req.session.user_id },
    });
    res.status(200).json("user updated");
  } catch (error) {
    res.status(400).json(error);
  }
})

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({
          message: "Incorrect email or password... Give it another shot!",
        });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are in!" });
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
