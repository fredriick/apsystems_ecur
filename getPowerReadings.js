// const apsystemsEcur = require("apsystems_ecur");

// async function getPowerReadings() {
//   const devices = await apsystemsEcur.getDevices();
//   const powerReadings = [];

//   for (const device of devices) {
//     const powerReading = await device.getPowerReading();
//     powerReadings.push(powerReading);
//   }

//   return powerReadings;
// }

// module.exports = getPowerReadings;


const ECUR = require("apsystems_ecur");

async function getPowerReadings() {
  const ecur = new ECUR("192.168.1.10", 8080);
  const devices = await ecur.getDevices();
  const powerReadings = [];

  for (const device of devices) {
    const powerReading = await device.getPowerReading();
    powerReadings.push(powerReading);
  }

  return powerReadings;
}

(async () => {
  const powerReadings = await getPowerReadings();

  for (const powerReading of powerReadings) {
    console.log("Current power reading for inverter", powerReading.id, "is", powerReading.power);
  }
})();
