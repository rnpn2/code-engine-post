// Routes
app.get('/albums', function(req, res) {
     return res.end(JSON.stringify("Bem sucedido GET"));
});

// POST method route
app.post('/purchases', (req, res) => {
    res.json(201, "Bem sucedido POST");
})
