const express = require("express")
const app = express()
app.use(express.json())
morgan = require('morgan')
app.use(morgan("tiny"))

let phonebook = [
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

app.delete("/api/phonebook/:id",(req,res)=> {
    const id = Number(req.params.id)
    phonebook = phonebook.filter(elem => elem.id !== id)
    res.status(204).end()
})


app.post("/api/phonebook", (req,res) => {
    let { name, number} = req.body

    if(!number || !name) {
        return res.status(400).send({
            error: "No content"
        })
    } else if (phonebook.some(elem => elem.name == name)) {
        return res.status(400).send({
            error: "Name must be unique"
        })
    }


    const newUser = {
        id: phonebook.length + 1,
        name: name,
        number: number
        
    }

    phonebook.push(newUser)
    res.json(phonebook)
})

app.listen(3000,()=> {
    console.log("Server is running on port 3000!")
})