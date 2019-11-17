function scuberGreetingForFeet(number){
  let reply
    if (number <= 400) {
      reply = 'This one is on me!';
    }
      if (number > 2000) {
        reply = 'I will gladly take your thirty bucks.';
      }
        if (number > 2500){
          reply = 'No can do.';
        }
  return reply
}

function ternaryCheckCity(city){
  let reply
    if (city === 'NYC'){
      reply = 'Ok, sounds good.';
    }
      else {
        reply = 'No go.';
      }
  return reply
}

function switchOnCharmFromTip(comment){
  let reply
    if (comment === 'generous'){
      reply = 'Thank you so much.';
    }
      else if (comment === 'not as generous'){
        reply = 'Thank you.';
      }
        else {
          reply = 'Bye.';
        }
  return reply
}