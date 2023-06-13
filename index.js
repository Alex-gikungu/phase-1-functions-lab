// Code your solution in this file!
function distanceFromHqInBlocks (block){
let subtraction= 42 ;
return Math.abs(block-subtraction);
}
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(block) {
  const distanceInFoot = 264; 
  return distanceFromHqInBlocks(block) * distanceInFoot;
}
console.log(distanceFromHqInFeet(50))


function distanceTravelledInFeet(blockOne, blockTwo) {
  const feetPerBlock = 264;
  return Math.abs(blockOne- blockTwo) * feetPerBlock;
}
console.log(distanceTravelledInFeet(38,34))

function calculatesFarePrice(blockOne, blockTwo) {
  const feetPerBlock = 264; 
  const distance = distanceTravelledInFeet(blockOne,blockTwo);
  if (distance <= 400) {
    return 0; 
  } else if (distance <= 2000) {
    const pricePerFoot = 0.02;
    const farePrice = (distance - 400) * pricePerFoot;
    return farePrice.toFixed(2);
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
console.log(calculatesFarePrice(38,34))












