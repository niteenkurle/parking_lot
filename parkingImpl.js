let Car = [];
let maxSize = 0;
let availableSlot = [];
const utilFunctions = require('./helpers/utils');


let createParkingLot = async (noOfLot) => {
  try {
    maxSize = parseInt(noOfLot);
  } catch (e) {
    return "Parameter is not a number!";
  }

  for (let i = 1; i <= maxSize; i++) {
    availableSlot.push(i);
  }
  return `Created a parking lot with ${availableSlot.length} slots`;
}


let park = async (registratonNo) => {
  if (maxSize === 0) {
    return `parking lot is not initiated`;
  } else if (maxSize === Car.length) {
    return `Sorry, parking lot is full`;
  } else {
    let slot = availableSlot[0];
    Car.push({
      'slot': slot,
      'registratonNo': registratonNo
    });
    availableSlot.shift();
    return `Allocated slot number: ${slot}`
  }
}

let leave = async (slot, hour) => {
  slot = parseInt(slot);
  if (maxSize === 0) {
    return "parking lot is not initiated";
  } else if (Car.length > 0) {

    if (await utilFunctions.search( parseInt(slot), 'slot', Car)) {

      Car = await utilFunctions.remove( parseInt(slot), 'slot', Car);

      // Add a the number back into slot 
      availableSlot.push( parseInt(slot));
      availableSlot.sort();
      let remainHour = parseInt(hour) - 2;
      let totalHour = 10;
      if (parseInt(remainHour) > 0) {
        totalHour = parseInt(totalHour) + (parseInt(remainHour) * 10);
      }
      return `Registration number with slot numbmer ${slot} is free with Charge ${totalHour}`;

    } else {
      return ` Slot ${slot} is already empty `;
    }
  } else {
    return `Parking lot is empty`
  }
}

let status = async () => {
  if (maxSize === 0) {
    return "parking lot is not initiated";
  } else if (Car.length > 0) {

    console.log("Slot No.\tRegistration No.");
    Car.forEach(function (row) {
      console.log(row.slot + "\t         " + row.registratonNo);
    });

  } else {
    return `Parking lot is empty`
  }
}

module.exports = {
  createParkingLot,
  park,
  leave,
  status
}