function scuberGreetingForFeet(someNumber){
  
  let result
  if (someNumber < 400) {
    result = 'This one is on me!';
  }
  else if (someNumber > 2000 && someNumber <= 2500) {
    result = 'I will gladly take your thirty bucks.'
  }
  else if (someNumber > 2500) {
    result = 'No can do.'
  }
  //at the end, if I want my function to return something, I need to state it:
  return result
}


function ternaryCheckCity(city){
  let result
  if (city === "NYC"){
    result= 'Ok, sounds good.'
  }
  else {
    result ='No go.'
  }
  return result
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  let result
  if (tip == "generous") {
    result ='Thank you so much.'
  }
  else if (tip == 'not as generous'){
    result = 'Thank you.'
  }
  else if (tip == 'thanks for everything'){
    result = 'Bye.'
  }
  return result
  // Write your code here!
}