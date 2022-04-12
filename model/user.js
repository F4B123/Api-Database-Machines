/*
 Here will be the logic to get specific data from the Machines database and if 
 necesary format it in a way that allow the MGH front end to run

*/
require('dotenv').config();
const axios = require('axios');
const databaseMachines = process.env.DATABASE;


const getFromDatabase = async(body)=>{
    const query = await axios.get(databaseMachines)
    console.log(query.data)
    return query.data
}

module.exports={
    getFromDatabase:getFromDatabase
}