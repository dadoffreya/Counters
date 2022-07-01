import Issues from "../models/IssueModel.js";

export const getIssues = async(req, res) =>{
    try {
        const response = await Issues.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const addIssues = async(req, res) =>{
    try {
        await Issues.create(req.body);
        res.status(201).json(req.body);
    } catch (error) {
        console.log(error.message);
    }
}