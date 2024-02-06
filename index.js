// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
//  let blocks = 38 - 42
  return Math.abs(someValue - 42);
}
//distanceFromHqInBlocks(blocks)
function  distanceFromHqInFeet(someValue){

 return Math.abs(someValue - 42)*264
}
function distanceTravelledInFeet(start, destination) {
  // Assuming start and destination are represented as block numbers
  const lengthOfOneBlockInFeet = 264;
  const numberOfBlocks = Math.abs(destination - start);

  const distanceInFeet = numberOfBlocks * lengthOfOneBlockInFeet;
  return distanceInFeet;
}

//const startBlock = 3;
//const destinationBlock = 8;

//const distance = distanceTravelledInFeet(startBlock, destinationBlock);
//console.log(distance);
function calculatesFarePrice(start, destination){
if (start - destination >100 ){
  return "its free"

}
}
function calculatesFarePrice(start, destination) {
  const distance = Math.abs(destination - start) * 264;

  if (distance <= 400) {
    // The first 400 feet are free
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    // Calculate the fare for a distance between 400 and 2000 feet
    const fare = (distance - 400) * 0.02;
    return fare;
  } else if (distance > 2000 && distance < 2500) {
    // Flat fare of $25 for a distance over 2000 feet and under 2500 feet
    return 25;
  } else if (distance >= 2500) {
    // Scuber does not allow rides over 2500 feet
    return 'cannot travel that far';
  }
}