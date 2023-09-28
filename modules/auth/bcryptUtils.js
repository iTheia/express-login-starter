const bcrypt = require("bcrypt")

async function encryption(saltRounds, password) {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        // console.log('Salt: ', salt);
        
        const hash = await bcrypt.hash(password, salt);
        // console.log('Hash: ', hash);
        
        return hash;
    } catch (err) {
        // console.error(err.message);
        throw err;
    }
}


module.exports = encryption