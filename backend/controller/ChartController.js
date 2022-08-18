import dbase from '../config/Database.js';

export const chart1 = async(req, res) =>{
    try {
        const response = await dbase.query(
            "SELECT DATE(inspection.createdAt) AS tgl, COUNT(inspection.createdAt) AS ok FROM inspection WHERE inspection.line = 1 AND	inspection.flagstat = 'Passed' GROUP BY	DATE(inspection.createdAt)"
        );
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}