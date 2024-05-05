const gamesRouter = require("express").Router();
const {
  getAllGames,
  findGameById,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  deleteGame,
} = require("../middlewares/games");
const { sendAllGames, sendUpdatedGames } = require("../controllers/games");

gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.delete(
  "/games/:id",
  getAllGames,
  findGameById,
  deleteGame,
  updateGamesFile,
  sendUpdatedGames
);
gamesRouter.post(
  "/games",
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  sendUpdatedGames
);
module.exports = gamesRouter;
