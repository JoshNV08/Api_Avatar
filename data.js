const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.json");

const readData = () => {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error al leer el archivo JSON:", error.message);
    return [];
  }
};

const writeData = (data) => {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonString, "utf8");
  } catch (error) {
    console.error("Error al escribir en el archivo JSON:", error.message);
  }
};

data = readData();

module.exports = {
  getData: () => data,
  setData: (newData) => {
    data = newData;
    writeData(data);
  },
};
