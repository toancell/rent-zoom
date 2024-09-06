
const bcrypt = require('bcrypt')
const hashPassword= async (password) =>{
    const saltRound= 10
    const hashedPassword = await bcrypt.hash(password, saltRound)
    return hashedPassword

}
module.exports= hashPassword