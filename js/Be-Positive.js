//jshint esversion: 6
BloodType = {

  AB_POS : "AB_POS",
  AB_NEG : "AB_NEG",
  A_POS  : "A_POS",
  A_NEG  : "A_NEG",
  B_POS  : "B_POS",
  B_NEG  : "B_NEG",
  O_POS  : "O_POS",
  O_NEG  : "O_NEG"

};

BloodTransfusionRules = {

  /**

   * Set the simulation speed.
   * @type {Number} : Valid values between 1 and 200
   */
  simulation_speed : 200,

  /**
   * returns BloodType, or false to give no BloodType
   *
   * @name receive_patient
   * @param {Bank} blood_inventory
   * @param {Patient} patient
   * @returns {BloodType or false}
   *
   * Patient properties {
   *   gender : String, (MALE,FEMALE)
   *   blood_type : String (BloodType)
   * }
   *
   * Bank properties {
   *   AB_POS : Integer,
   *   AB_NEG : Integer,
   *   A_POS  : Integer,
   *   A_NEG  : Integer,
   *   B_POS  : Integer,
   *   B_NEG  : Integer,
   *   O_POS  : Integer,
   *   O_NEG  : Integer
   * }
   *
   */

  receive_patient : function (blood_inventory, patient) {

    // give a random blood type to anyone
    // very bad idea!
    let abPosRec = [BloodType.A_POS, BloodType.A_NEG, BloodType.O_NEG, BloodType.O_POS, BloodType.AB_NEG, BloodType.AB_POS, BloodType.B_NEG, BloodType.B_POS];
    let abNegRec = [BloodType.AB_NEG, BloodType.A_NEG, BloodType.B_NEG, BloodType.O_NEG];
    let aPosRec = [BloodType.A_POS, BloodType.A_NEG, BloodType.O_POS, BloodType.O_NEG];
    let aNegRec = [BloodType.A_NEG, BloodType.O_NEG];
    let bPosRec = [BloodType.B_POS, BloodType.B_NEG, BloodType.O_POS, BloodType.O_NEG];
    let bNegRec = [BloodType.B_NEG, BloodType.O_NEG];
    let oPosRec = [BloodType.O_POS, BloodType.O_NEG];
    let oNegRec = [BloodType.O_NEG];

    if (patient.blood_type === BloodType.AB_POS){
      for(let i = 0; i < abPosRec.length; i++){
        if(blood_inventory[abPosRec[i]] > 0){
          return abPosRec[i];
        }
      }
      return false;
    }

    if(patient.blood_type === BloodType.AB_NEG){
      for(let i = 0; i < abNegRec.length; i++){
        if(blood_inventory[abNegRec[i]] > 0){
          return abNegRec[i];
        }
      }
      return false;
    }

    if(patient.blood_type === BloodType.A_POS){
      for(let i = 0; i < aPosRec.length; i++){
        if(blood_inventory[aPosRec[i]] > 0){
          return aPosRec[i];
        }
      }
      return false;
    }

    if(patient.blood_type === BloodType.A_NEG){
      for(let i = 0; i < aNegRec.length; i++){
        if(blood_inventory[aNegRec[i]] > 0){
          return aNegRec[i];
        }
      }
      return false;
    }

    if(patient.blood_type === BloodType.B_POS){
      for(let i = 0; i < bPosRec.length; i++){
        if(blood_inventory[bPosRec[i]] > 0){
          return bPosRec[i];
        }
      }
      return false;
    }

    if(patient.blood_type === BloodType.B_NEG){
      for(let i = 0; i < bNegRec.length; i++){
        if(blood_inventory[bNegRec[i]] > 0){
          return bNegRec[i];
        }
      }
      return false;
    }

    if(patient.blood_type === BloodType.O_NEG){
      for(let i = 0; i < oNegRec.length; i++){
        if(blood_inventory[oNegRec[i]] > 0){
          return oNegRec[i];
        }
      }
      return false;
    }

    if(patient.blood_type === BloodType.O_POS){
      for(let i = 0; i < oPosRec.length; i++){
        if(blood_inventory[oPosRec[i]] > 0){
          return oPosRec[i];
        }
      }
      return false;
    }










     // return [
    //   BloodType.AB_POS,
    //   BloodType.AB_NEG,
    //   BloodType.A_POS,
    //   BloodType.A_NEG
    // ][Math.floor(Math.random()*4)];

  }

};