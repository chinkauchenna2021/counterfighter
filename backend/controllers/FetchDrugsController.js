var mysql = require("mysql");
const path = require('path')
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "counterfighter",
});

connection.connect();
const checkedDrugs = (req, res) => {
  connection.query(
    "SELECT * FROM counterfightertable",
    function (err, result, fields) {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
};

const sendDrugs = (req, res) => {
  const {
    expiryDate,
    img,
    manufactureCountry,
    nafdacReg,
    batchNo,
    name,
    prescription,
    productDate,
    uses,
    companyName,
    } = req.body;
  const imageFile = req.files.image;
  const fileImage = new Date().getTime() + imageFile.name;
    const absoluteImagePath = path.join(__dirname, "../public/images/" + fileImage);
    console.log(absoluteImagePath)
  imageFile.mv(absoluteImagePath, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("sent successfully");
  });
  const saveMeds = {
    image: fileImage,
    cname: companyName,
    drugName: name,
    drugDate: productDate,
    drugExpiry: expiryDate,
    drugCountry: manufactureCountry,
    nafdac: nafdacReg,
    batch: batchNo,
    drugUses: uses,
    prescriiption: prescription,
  };
  connection.query(
    `INSERT IGNORE INTO counterfightertable (cname,image,drugName, drugDate, drugExpiration, drugCountry, drugNafdac,batchNo, drugUses, drugPrescription) VALUES (?,?,?,?,?,?,?,?,?,?) `,
    [
      saveMeds.cname,
      saveMeds.image,
      saveMeds.drugName,
      saveMeds.drugDate,
      saveMeds.drugExpiry,
      saveMeds.drugCountry,
      saveMeds.nafdac,
      saveMeds.batch,
      saveMeds.drugUses,
      saveMeds.prescriiption,
    ],
    function (error, result, fields) {
      if (!error) {
        res.status(200).json({ msg: result });
      }
    }
  );
};


const sendQRCode = (req, res) => {
    const { batchNo, qrcode } = req.body;
  connection.query(
    "UPDATE counterfightertable SET qrcode = ? WHERE batchNo = ?",
    [qrcode, batchNo],
    function (err, result, fields) {
      res.status(200).json({ msg: "Sent to DB" });
    }
  );
};


const blobImage = (req, res) => {
    const { batchNo} = req.body;
    connection.query('SELECT qrcode FROM counterfightertable WHERE batchNo= ?', [batchNo], function (error, result, fields) { 
        res.status(200).json({ "result": result });
    })
    
}


const getAllContent = (req, res) => {
    const { batchNo } = req.body
    connection.query('SELECT * FROM counterfightertable WHERE batchNo = ?', [batchNo], function (error, result, fields) {
        if (!error) {
            res.status(200).json({"result":result})
        
        } else {
            res.status(400).json({ "result": "error response" });
    }
    }) 

}

module.exports = {
  checkedDrugs,
  sendDrugs,
  sendQRCode,
    blobImage,
  getAllContent
};
