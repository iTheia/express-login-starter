const bcrypt = require("bcrypt")

async function encryption(saltRounds, password) {
    const salt = await bcrypt.genSalt(saltRounds);
    
    const hash = await bcrypt.hash(password, salt);
    
    return hash;
}


module.exports = encryption