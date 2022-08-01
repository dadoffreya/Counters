import Passed from "../models/PassedModel.js";

export const getPassed = async(req, res) =>{
    try {
        const response = await Passed.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const addPassed = async(req, res) =>{
    try {
        await Passed.create(req.body);
        res.status(201).json(req.body);
    } catch (error) {
        console.log(error.message);
    }
}

export const getOK = async(req, res) =>{
    try {
        const response = await Passed.findAll({
            attributes: {
                include: [[Sequelize.fn("COUNT", Sequelize.col("status"), "statusCount")]]
            },
            where: {
                status: 'Passed',
            },
            raw: true,
        });
        res.status(202).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const countOK = async(req, res) =>{
    const paramsline = req.params.line;
    try {
        const response = await Passed.count({
            where: { 
                line: paramsline,
                flagstat: "Passed"
                }
            });
        res.status(203).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const countDefect = async(req, res) =>{
    try {
        const respon = await Passed.count({
            where: { 
                flagstat: "Defect"
            }
        });
        res.status(203).json(respon);
    } catch (error) {
        console.log(error.message);
    }
}