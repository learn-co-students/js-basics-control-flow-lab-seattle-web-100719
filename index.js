function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400){
    return "This one is on me!"
  }else if (feet > 2000 && feet <= 2500){
    return "I will gladly take your thirty bucks.";
  }else if (feet > 2500)
    return "No can do.";
}

function ternaryCheckCity(city){
  // Write your code here!
  let res;
  city === 'NYC' ?  res = "Ok, sounds good." : res = "No go.";
  return res;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let res;
  switch(tip){
    case 'generous': 
      res = "Thank you so much.";
      break;
    case 'not as generous':
      res = "Thank you.";
      break;
    default:
      res = "Bye.";
      break;
  }
  return res;
}