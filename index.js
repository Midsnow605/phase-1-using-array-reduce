const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let initialValue = 0;
const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);