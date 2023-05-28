const asyncHandler = require("express-async-handler")

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = asyncHandler ((req, res) => {
    res.status(200).json({"message":"Get all contacts"});
});

const createContact = asyncHandler ((req, res) => {
    const {name, email, phone} = req.body
    if(!name || email || phone) {
        res.status(400)
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({"message":"Create contact"});
});

const updateContact = asyncHandler ((req, res) => {
    res.status(200).json({"message":"Create contact"});
});

const deleteContact = asyncHandler ((req, res) => {
    console.log(req.body)
    res.status(404).json({"message":`Delete contact for ${req.params.id}`});
});


module.exports = {getContact, createContact, updateContact, deleteContact}