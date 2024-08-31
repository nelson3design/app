

module.exports = {
    async data(req, res){
        try {
            const data = req.body 
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}