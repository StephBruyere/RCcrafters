import axios from "axios";
 
export default {
  //*****************/
  // Go get all Jets /
  //*****************/
  getJets: function() {
    return axios.get("/api/jets");
  },
  //*********************/
  // Go get all Non-Jets /
  //*********************/
  getNonJets: function() {
    return axios.get("/api/nonjets");
  },
  //**********************************/
  // Gets the plane with the given id /
  //**********************************/
  getPlane: function(id) {
    return axios.get("/api/singleproduct/" + id);
  },
  //***********************************/
  // Saves the contact to the database /
  //***********************************/
  saveContact: function(contactData) {
    return axios.post("/api/contact", contactData);
  }
};
