function scuberGreetingForFeet(rideLength){
    if (rideLength > 2500) 
    {
      return ('No can do.');
    }
    else if (rideLength >= 2000)
    {
      return ('I will gladly take your thirty bucks.');
    }
    else if (rideLength <= 400)
    {
      return ('This one is on me!');
    }
}

function ternaryCheckCity(cityName){
  if (cityName === 'NYC') 
    {
      return ('Ok, sounds good.');
    }
    else 
    {
      return ('No go.');
    }
}

function switchOnCharmFromTip(tipAmount){
  switch(tipAmount) {
    case 'generous':
      return "Thank you so much." 
      break;
    case 'not as generous':
      return "Thank you."
      break;
    default:
      return "Bye." 
  }
}