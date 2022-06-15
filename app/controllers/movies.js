const express = require("express");
const router = express.Router();
const { movies,
} = require("../models");
const { Op } = require('sequelize')

router.get("/show_movies", async (req, res) => {


    let data = [];
    const listOfmovies = await movies.findAndCountAll({
        
        // where,
        order: [
            ['id', 'DESC'],
        ],
      
    })        
        .catch((err) => console.log('error get list ', err))
console.log('agesssssssssssss',listOfmovies )
    res.json({ ResponseCode: 'Success', data: listOfmovies });
});


//save Movies

router.post("/save_movies",async(req,res)=>{

    const {
        name,
        description,
        category_id,
        rating,
        duration,
        release_date,
    
    }=  req.body;


 console.log('dddddddddddddddddddddeeeeeeeeeeeeFFF', req.body);

 const MoviesName = await movies.create({
    name:name,
    description:description,
    category_id:category_id,
    rating:rating,
   }).catch((err)=>res.json({ResponseCode:"Errorjjjjjjjjjj",data:err}));



return res.json({ ResponseCode: "Success", data: MoviesName });

});

// END ROUTE

// Movies delete

router.delete("/movies/delete/:id",   async (req, res) => {


    const movies_id = req.params.id;
   
    const moviesExist = await movies.findOne({
        where: {
            id: movies_id,
        }
    });

    if (moviesExist == null) {
        return res.json({ ResponseCode: "Fail", errorMessage: "movies not exist" });

    }



    await movies.destroy({
        where: {
            id: movies_id 
        }
    }).catch((err) => {
        return res.json({ ResponseCode: "Fail", data: err });

    });


    return res.json({ ResponseCode: "Success", data: 'Delete successfully ' });
});








module.exports = router;