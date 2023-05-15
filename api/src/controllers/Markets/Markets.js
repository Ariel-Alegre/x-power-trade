const axios = require('axios');

module.exports = {
    Markets: async (req, res) => {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
        const data = response.data
        res.json(data)
    },

    SearchMarkets: async (req, res) => {
        const { name } = req.query

        try {

            const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${name}`)
            const data = response.data
            res.json(data)

            console.log(data);
            
        } catch (error) {
            
        }
            
    }

}