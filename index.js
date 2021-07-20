function scuberGreetingForFeet(rideDistance){
  if (rideDistance < 400) {
    return "This one is on me!";
  } else if (rideDistance > 2000 && rideDistance < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do."
  }
}


function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}


function switchOnCharmFromTip(tipAmount){
  switch(tipAmount) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default:
      return "Bye."
  }
}