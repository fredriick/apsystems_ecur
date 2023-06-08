const apsystemsEcur = require("apsystems_ecur");

async function getPowerReadings() {
  const devices = await apsystemsEcur.getDevices();
  const powerReadings = [];

  for (const device of devices) {
    const powerReading = await device.getPowerReading();
    powerReadings.push(powerReading);
  }

  return powerReadings;
}

module.exports = getPowerReadings;
