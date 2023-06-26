const Player = require('../api/models/player.model');
const mongoose = require('mongoose');

const players= [
    {
      "id": 1,
      "name": "Michael Jordan",
      "characteristics": {
        "position": "Shooting Guard",
        "team": "Chicago Bulls",
        "championships": 6,
        "MVPs": 5
      },
      "image": "../assets/MJ.jpg"
    },
    {
      "name": "LeBron James",
      "image": "../assets/LeBron.jpg",
      "characteristics": {
        "position": "Small Forward",
        "MVPs": "3",
        "championships": "4",
        "team": "Los Angeles Lakers"
      },
      "id": 2
    },
    {
      "name": "Kareem Abdul-Jabbar",
      "image": "../assets/kareem.jpg",
      "characteristics": {
        "position": "Center",
        "MVPs": "4",
        "championships": 6,
        "team": "Los Angeles Lakers"
      },
      "id": 3
    },
    {
      "name": "Magic Johnson",
      "image": "../assets/Magic.jpg",
      "characteristics": {
        "position": "Point Guard",
        "MVPs": "4",
        "championships": 5,
        "team": "Los Angeles Lakers"
      },
      "id": 4
    },
    {
      "name": "Larry Bird",
      "image": "../assets/Larry.jpg",
      "characteristics": {
        "position": "Small Forward",
        "MVPs": 3,
        "championships": "4",
        "team": "Boston Celtics"
      },
      "id": 5
    },
    {
      "id": 6,
      "name": "Shaquille O'Neal",
      "characteristics": {
        "position": "Center",
        "team": "Los Angeles Lakers",
        "championships": 4,
        "MVPs": 1
      },
      "image": "../assets/shaq.jpg"
    },
    {
      "id": 7,
      "name": "Kobe Bryant",
      "characteristics": {
        "position": "Shooting Guard",
        "team": "Los Angeles Lakers",
        "championships": 5,
        "MVPs": 1
      },
      "image": "../assets/Kobe.jpg"
    },
    {
      "id": 8,
      "name": "Wilt Chamberlain",
      "characteristics": {
        "position": "Center",
        "team": "Los Angeles Lakers",
        "championships": 2,
        "MVPs": 4
      },
      "image": "../assets/Wilt.jpeg"
    },
    {
      "id": 9,
      "name": "Bill Russell",
      "characteristics": {
        "position": "Center",
        "team": "Boston Celtics",
        "championships": 11,
        "MVPs": 5
      },
      "image": "../assets/Bill.jpg"
    },
    {
      "id": 10,
      "name": "Hakeem Olajuwon",
      "characteristics": {
        "position": "Center",
        "team": "Houston Rockets",
        "championships": 2,
        "MVPs": 1
      },
      "image": "../assets/hakeem.jpeg"
    },
    {
      "id": 11,
      "name": "Tim Duncan",
      "characteristics": {
        "position": "Power Forward",
        "team": "San Antonio Spurs",
        "championships": 5,
        "MVPs": 2
      },
      "image": "../assets/tim.jpg"
    },
    {
      "id": 12,
      "name": "Oscar Robertson",
      "characteristics": {
        "position": "Point Guard",
        "team": "Milwaukee Bucks",
        "championships": 1,
        "MVPs": 1
      },
      "image": "../assets/oscar.png"
    },
    {
      "id": 13,
      "name": "Jerry West",
      "characteristics": {
        "position": "Point Guard",
        "team": "Los Angeles Lakers",
        "championships": 1,
        "MVPs": 1
      },
      "image": "../assets/jerry.jpg"
    },
    {
      "name": "Pau Gasol",
      "image": "https://www.diariodeburgos.es/media/IMG/2023/9628A67B-9CB8-36DC-81249CBB45EF0CDF.JPG",
      "characteristics": {
        "position": "Center",
        "MVPs": "1",
        "championships": "1",
        "team": "Los Angeles Lakers"
      },
      "id": 14
    },
    {
      "name": "Patrick Ewing",
      "image": "https://cdn.nba.com/manage/2020/10/patrick-ewing-archive-392x588.jpg",
      "characteristics": {
        "position": "Center",
        "MVPs": "2",
        "championships": "1",
        "team": "New York Knicks"
      },
      "id": 15
    }
]



mongoose.connect('mongodb+srv://root:root@cluster0.8phs6yk.mongodb.net/MyAPI?retryWrites=true&w=majority')
.then(async () => {
    const allplayers = await Player.find()
    if(allplayers.length > 0){
        await Player.collection.drop()
        console.log('jugadores borrados')
    }
})
.catch(err => console.error('Error borrando',err))
.then(async() => {
    const jugadoresMap = players.map((jugador) => new Player(jugador))
    await Player.insertMany(jugadoresMap)
    console.log('jugadores añadidos');
})
.catch(err => console.error('Error insertando',err))
.finally(() => mongoose.disconnect());