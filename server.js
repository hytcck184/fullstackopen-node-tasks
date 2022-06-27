const express = require("express")
const app = express()

const phonebook = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
      },
      { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
      },
      { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
      },
      { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
      }
]
app.get("/api/phonebook",(req,res)=> {
    res.json(phonebook)
})

app.get("/info", (req,res) => {
    const amount = Object.keys(phonebook).length
    const time = new Date().toDateString()
    res.send(`Phonebook has info for ${amount} people \n` `${time}`)

})

app.get("/api/phonebook/:id", (req,res) => {
    const getID = Number(req.params.id)
    const getOne = phonebook.find(elem => elem.id === getID)

    if(getOne){
        res.json(getOne)
    } else{
        res.status(400).send({
            error: {
                msg: "Bad request"
            }
        })
    }
    
})

app.listen(3000,()=> {
    console.log("Server is running on port 3000!")
})