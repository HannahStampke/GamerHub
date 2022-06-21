const { Platform } = require("../models");

const platformData = [
  {
    platform_name: "PC",
  },
  {
    platform_name: "Playstation",
  },
  {
    platform_name: "Xbox",
  },
  {
    platform_name: "Nintendo",
  },
  {
    platform_name: "Other",
  },
];

const seedPlatforms = () => Platform.bulkCreate(platformData);

module.exports = seedPlatforms;