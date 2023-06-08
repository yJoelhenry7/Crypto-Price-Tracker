const express = require('express');
const app = express()
// const fetch = require('node-fetch');/
const { Sequelize, DataTypes } = require('sequelize');
const {Ticker} = require('./models');
const PORT = process.env.PORT || 3000;
const path = require("path");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const nameArray = [];
const lastArray = [];
const buyArray = [];
const sellArray = [];
const volumeArray = [];
const baseUnitArray = [];

async function fetchAndStoreData() {
    try {
      // Fetch data from the API
      const response = await fetch('https://api.wazirx.com/api/v2/tickers');
      const data = await response.json();
  
      // Store data in the database
      await Promise.all(
        Object.entries(data).slice(0, 10).map(async ([key, ticker]) => {
            const { last, buy, sell, volume, base_unit } = ticker;
            const name = key; // Use the key as the name
            const tickerRecord = await Ticker.create({ name, last, buy, sell, volume, base_unit });
          // Store the ticker record in respective arrays based on the key value
          nameArray.push(tickerRecord.name);
          lastArray.push(tickerRecord.last);
          buyArray.push(tickerRecord.buy);
          sellArray.push(tickerRecord.sell);
          volumeArray.push(tickerRecord.volume);
          baseUnitArray.push(tickerRecord.base_unit);
        })
      );
  
      console.log('Data fetched and stored successfully.');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  // Fetch and store data from the API on server startup
  fetchAndStoreData();

app.get('/', function (request, response) {
  response.render("index",{
    nameArray,lastArray,buyArray,sellArray,volumeArray,baseUnitArray
  })
})

app.listen(PORT, ()=>{
    console.log(`Server is up! and Running at port ${PORT}`)
})



 // Route to fetch data from the database
// app.get('/tickers', async (req, res) => {
//     try {
//       // Retrieve all tickers from the database
//       const tickers = await Ticker.findAll();
  
//       // Send the tickers as a response
//       res.status(200).json(tickers);
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ error: 'An error occurred while retrieving data from the database.' });
//     }
//   }); 