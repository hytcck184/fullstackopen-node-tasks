const http = require("http")

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

const app = http.createServer((req,res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.write("Hello")
    res.end(JSON.stringify(phonebook))
}).listen(3000,()=> {
    console.log("Server is running on port 3000!")
})