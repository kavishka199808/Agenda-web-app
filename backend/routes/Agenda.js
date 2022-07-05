const router = require('express').Router();
let Agenda = require('../models/Agenda.model');


//retrive all data in database
router.route('/').get((req, res) => {
    Agenda.find()
        .then(Agenda => res.json(Agenda))
        .catch(Agenda => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const date = req.body.date;



  const newAgenda = new Agenda({
        title,
        description,
        status,
        date,
        

    });

//get data in form AND save it to database

    newAgenda.save()
        .then(() => res.json('Agenda added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Agenda.findById(req.params.id)
        .then(Agenda => res.json(Agenda))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Agenda.findByIdAndDelete(req.params.id)
        .then(() => res.json('Agenda deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Agenda.findById(req.params.id)
        .then(Agenda => {
            Agenda.title = req.body.title;
            Agenda.description = req.body.description;
            Agenda.status = req.body.status;
            Agenda.date = req.body.date;
            Agenda.save()
                .then(() => res.json('Agenda updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;