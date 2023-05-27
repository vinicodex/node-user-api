//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = get((req, res) => {
    res.status(200).json({"message":"Get all contacts"});
});


const createContact = post((req, res) => {
    res.status(201).json({"message":"Create contact"});
});

const updateContact = put((req, res) => {
    res.status(200).json({"message":"Create contact"});
});

const deleteContact = delete((req, res) => {
    res.status(404).json({"message":`Delete contact for ${req.params.id}`});
});


module.exports = {getContact, createContact, updateContact, deleteContact}