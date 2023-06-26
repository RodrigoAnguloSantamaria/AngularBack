const { deleteFile } = require('../../middlewares/delete.file');
const Player = require('../models/player.model');

const getPlayers = async(req,res) => {
    try {
        const allPlayers = await Player.find();
        return res.status(200).json(allPlayers);
    } catch (error) {
        return res.status(500).json(error)
    }
}
const getPlayerById = async(req,res)=>{
    try {
        const {id}=req.params;
        const playerById = await Player.findById(id);
        return res.status(200).json(playerById)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postPlayers = async(req,res) => {
    try {
        const newPlayer = new Player(req.body);
        console.log(req.files)
        if(req.files.foto){
            newPlayer.foto = req.files.foto[0].path
        }
        if(req.files.foto2){
            newPlayer.foto2 = req.files.foto2[0].path
        }
        const createdPlayer = await newPlayer.save();
        return res.status(201).json(createdPlayer);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putPlayer = async(req,res) => {
    console.log(req.body)
    console.log(req.files)
    try {
        const {id} = req.params;
        const putPlayer = new Player(req.body);
        putPlayer._id = id;
        
        if(req.files.foto){
            putPlayer.foto = req.files.foto[0].path
        }
        if(req.files.foto2){
            putPlayer.foto2 = req.files.foto2[0].path
        }
        const updatedPlayer = await Player.findByIdAndUpdate(id, putPlayer)
        if(!updatedPlayer){
            return res.status(404).json({message: "El id de este jugador no existe"});
        }
        
        if(updatedPlayer.foto !== putPlayer.foto){
            deleteFile(updatedPlayer.foto);
        }
        if(updatedPlayer.foto2 !== putPlayer.foto2){
            deleteFile(updatedPlayer.foto2);
        }
        return res.status(200).json(updatedPlayer);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deletePlayers = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedPlayer = await Player.findByIdAndDelete(id);
        if(!deletedPlayer){
            return res.status(404).json({message: "El id de jugador no existe"});
        }
        return res.status(200).json(deletedPlayer)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = {getPlayers,getPlayerById, postPlayers, putPlayer, deletePlayers}