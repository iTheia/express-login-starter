const bcrypt = require("bcrypt")

async function encryption(saltRounds, password) {
    const salt = await bcrypt.genSalt(saltRounds);

    const hash = await bcrypt.hash(password, salt);

    return hash;
}


async function existPassword(Password, user, usersDatabase) {

    let index = usersDatabase.findIndex(function (item, i) {
        return item.user === user
    });

    const match = await bcrypt.compare(Password, usersDatabase[index].hash);

    return match
}

module.exports = {
    encryption,
    existPassword
}