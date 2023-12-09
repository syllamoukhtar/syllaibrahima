const express = require("express")
const fs = require("fs")

const app = express()

const PORT = 8080
const lang = process.env.LANG.slice(0, 2)

app.get("/", (_, res) => {
    const indexHTML = fs.readFileSync(__dirname + "/html/index.html", "utf-8")
    res.send(indexHTML)

})
 app.use("/css", express.static(__dirname + "/css/"))
    

app.listen(PORT, () => {
    console.log(lang)
    console.log("le serveur est lance sur le PORT " + PORT)
})

