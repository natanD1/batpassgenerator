export default function generatePass() {
    let password: string = ''
    let characters: string = 'QWERTYUIOPASDFGHJKLÇqwertyuiopasdfghjklç123456789!@#$%&*()'
    let passwordLenght = 8

    for (let index = 0; index < passwordLenght; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }
    return password
}