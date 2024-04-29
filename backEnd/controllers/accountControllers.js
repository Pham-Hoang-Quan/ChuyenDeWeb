const Account = require('../models/accountModel')
const mongoose = require('mongoose')

//all
const getAccounts = async (req, res) => {
    const accounts = (await Account.find({})).sort({createdAt: -1})
    res.status(200).json(accounts)
}

//single
const getAccount = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No'})
    }

    const account = await Account.findById(id)
}
