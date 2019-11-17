function scuberGreetingForFeet(someValue) {
  // Write your code here!
  if (someValue < 400) {
    return 'This one is on me!';
  } else if (someValue > 2000 && someValue <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  if (someValue > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case 'generous':
      // code block
      return 'Thank you so much.';
      break;
    case 'not as generous':
      // code block
      return 'Thank you.';
      break;
    default:
      // code block
      return 'Bye.';
  }
}
