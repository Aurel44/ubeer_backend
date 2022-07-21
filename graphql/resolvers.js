const beer = require('../models/beer');

module.exports = {
    beers: async function (){
        const beers = await beer.find();
        return {
            beers: beers.map((q) =>{
                return {
                    ...q._doc,
                    _id: q._id.toString(),
                }
            })
        }
    }
}