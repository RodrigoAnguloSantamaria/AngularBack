const express = require('express');
const {login, register, checkSession} = require('../controllers/user.controller');
const { isAuth } = require('../../middlewares/auth');
const { getPlayers,getPlayerById, postPlayers, putPlayer, deletePlayers } = require("../controllers/player.controller");
const playersRouter = express.Router();

playersRouter.put('/:id', putPlayer)
playersRouter.delete('/:id', deletePlayers)
playersRouter.post('/', postPlayers);
playersRouter.get('/', getPlayers);
playersRouter.get('/:id', getPlayerById);

module.exports = playersRouter;