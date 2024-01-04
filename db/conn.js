const mongoose = require("mongoose")

async function main(){
    try{
        const databaseName = "transporte"

        await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Conectado ao banco!");
    } catch (error){
        console.log(`Erro: ${error}`)
    }
}

module.exports = main