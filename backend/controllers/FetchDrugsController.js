const checkedDrugs = (req, res) => {
   res.status(200).json({"msg": "drugs 1 fetched"})
}

module.exports = {
    checkedDrugs
}