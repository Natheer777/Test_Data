const db = require('../DB/Db');

class Models {
    static GetData() {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Data';
            db.query(query, [], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    }

    static AddData(Data) {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO Data (Data) VALUES (?)';
            db.query(query, [Data], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results.affectedRows > 0);  
            });
        });
    }

    static DeleteData(id) {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM Data WHERE id = ?'; 
            db.query(query, [id], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results.affectedRows > 0);  
            });
        });
    }
}

module.exports = Models;
