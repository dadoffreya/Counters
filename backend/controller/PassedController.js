import Passed from "../models/PassedModel.js";

export const getPassed = async(req, res) => {
    try {
        const response = await Passed.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const addPassed = async(req, res) => {
    try {
        await Passed.create(req.body);
        res.status(201).json({msg: "1 Passed Added"});
    } catch (error) {
        console.log(error.message);
    }
}