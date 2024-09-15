const Model = require('../Models/Models');

class UserController {
    static async GetData(req, res) {
        try {
            const result = await Model.GetData();
            res.status(200).json(result);  
        } catch (error) {
            console.error("Error fetching data:", error);
            res.status(500).send('Error fetching data');
        }
    }

    static async AddData(req, res) {
        const { Data } = req.body;
        try {
            if (!Data) {
                return res.status(400).send("Data is required");
            }

            const answer = await Model.AddData(Data);
            if (answer) {
                return res.status(200).send("Add successful");
            } else {
                return res.status(500).send("Add failed");
            }
        } catch (error) {
            console.error("Error adding data:", error);
            return res.status(500).send("Error adding data");
        }
    }

    static async DeleteData(req, res) {
        const { id } = req.body;  
        try {
            if (!id) {
                return res.status(400).send("ID is required");
            }

            const result = await Model.DeleteData(id);
            if (result) {
                return res.status(200).send("Delete successful");
            } else {
                return res.status(500).send("Delete failed");
            }
        } catch (error) {
            console.error("Error deleting data:", error);
            return res.status(500).send("Error deleting data");
        }
    }
}

module.exports = UserController;
