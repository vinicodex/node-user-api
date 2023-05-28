//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = async (req, res) => {
    res.status(200).json({"message":"Get all contacts"});
};

const createContact = async (req, res) => {
    const {name, email, phone} = req.body
    if(!name || email || phone) {
        res.status(400)
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({"message":"Create contact"});
};

const updateContact = async (req, res) => {
    res.status(200).json({"message":"Create contact"});
};

const deleteContact = async (req, res) => {
    console.log(req.body)
    res.status(404).json({"message":`Delete contact for ${req.params.id}`});
};


module.exports = {getContact, createContact, updateContact, deleteContact}