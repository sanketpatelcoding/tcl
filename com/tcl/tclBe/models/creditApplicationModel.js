const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
  },
  legalName: String,
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  faxNumber: String,

  businessType: {
    type: String,
    enum: ["PROPRIETOR", "CORPORATION", "PARTNERSHIP"],
  },
  dateOfIncorporation: Date,
  yearsInBusiness: Number,
  contactName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  billingAddress: String,
  billingCity: String,
  billingProvince: String,
  billingCountry: String,
  billingPostalCode: String,
  bank: String,
  branch: String,
  accountManager: String,
  accountNumber: String,
  bankPhoneNumber: String,
  bankFaxNumber: String,
  bankAddress: String,
  creditAmountRequested: Number,
  terms: String,
  cargoInsuranceRequired: Boolean,
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
