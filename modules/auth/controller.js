
class Controller {

    constructor(json) {
        this._json = json
    }

    verifyJson() {
        _sameFormat()

    }

    _sameFormat() {
        const formatJson = {
            "user": "",
            "password": ""
        }

        const moldJson = Object.keys(formatJson)
        const userJson = Object.keys(this._json)

        if (JSON.stringify(userJson) !== JSON.stringify(moldJson)) {
            return false
        }

        return true
    }

    especialCharacters(){
        
    }
}

const userJson = {
    "user": "gio",
    "password": "1432"
}

const json = new Controller(userJson)

console.log(json.verifyJson())