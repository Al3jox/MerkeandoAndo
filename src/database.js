// ================= Requerimientos ===============
const mongoose = require('mongoose');
// ================================================

// ================= DB Local ===============
URL = ('mongodb://127.0.0.1/DBMerkeandoAndo');
// ================================================

// ================= Conexión con la DB ===============
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Se ha realizado la conexión a la DB: ', db.connection.name))
.catch(error => console.log('error'));
// ================================================

// ================= Exportación de módulos ===============
module.exports = mongoose;
// ================================================