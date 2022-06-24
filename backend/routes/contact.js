const express = require('express')
const Contact = require('../models/Contact')
const router = express.Router()

//add and save contact
router.post('/addContact', async (req, res) => {
    let { name, email, age } = req.body;
    age = Number(age)
    try {
        const found = await Contact.findOne({email});
       if (found) {
        res.status(400).send(`erreur:  ${email}  already exists !`)
        alert (`${email}  already exists !`)
       }
        const contact = new Contact({
            name: name,
            email : email,
            age: age
        })
        await contact.save()
        res.status(201).send({ msg: "contact added", contact })
    } catch (error) {
        res.status(500).send("erreur d'ajout")
    }
})

router.post('/addManyContacts', async (req, res) => {
    const  [{ name, email,age }] = req.body
    try {     
        const found = await Contact.find({email});
        if (found) {
            res.status(400).send(`erreur:  ${email}  already exists !`)
           }

        const contact = await Contact.create(req.body)
        res.status(201).send({ msg: "All Contacts are Added", contact })

    } catch (error) {
        res.status(500).send("erreur d'ajout de ces contacts")

    }

})

//GetAll contacts
router.get('/allContacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).send({ msg: "list of contact ", contacts })
    } catch (error) {
        res.status(500).send("erreur d'importation")
    }
})

//remove contact
router.delete('/deleteContact/:id', async (req, res) => {
    const { id } = req.params
    try {
        await Contact.findByIdAndDelete(id, { new: true })
        res.status(200).send("removed :)")
    } catch (error) {
        res.status(500).send("contact not found")
    }
})
//update  contact 
router.put('/updateContact/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const contactUpdated = await Contact.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
        res.status(200).send({ msg: "Updated !", contactUpdated })

    } catch (error) {
        res.status(500).send("contact not found")
    }
})
//getone  contact 

router.get('/oneContact/:id', async (req, res) => {
const { id } = req.params;
  try {
    const contact = await Contact.findById(id);
    res.status(200).send({ msg: "contact found", contact });
  } catch (error) {
    res.status(500).send("Contact not found");
  }
});
module.exports = router;