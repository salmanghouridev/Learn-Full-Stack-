const asyncHandler = require('express-async-handler')


// @desc get all contacts
// @route GET /api/contacts
// @access Public

const getContacts = asyncHandler(async(req, res) => {
          res.status(200).json({Message: "Hi This is Contact"})
})         


// 33.46 https://www.youtube.com/watch?v=H9M02of22z4
// @desc Create New Contact
// @route Post /api/contacts
// @access Public

const createContact = async(req, res) => {
          console.log("This is request ", req.body)
          const {name, email} = req.body
          if(!name , !email){
                    return res.status(400).json({Message: "Please Enter Name and Email"})
          }
          res.status(201).json({Message: "Create Contact"})
}
// @desc getContact 1 New Contact
// @route getContact /api/contacts:id
// @access Public

const getContact = async(req, res) => {
          res.status(200).json({Message: `Get Contact for ${req.params.id}`})
}
// @desc update New Contact
// @route update /api/contacts:id
// @access Public

const updateContact = async(req, res) => {
          res.status(200).json({Message: `Update Contact for ${req.params.id}`})
}
// @desc delete New Contact
// @route delete /api/contacts:id
// @access Public

const deleteContact =async(req, res) => {
          res.status(200).json({Message: `Delete Contact for ${req.params.id}`})
}
module.exports = {getContacts,getContact,createContact,updateContact,deleteContact}