const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a helicopter ride. When he got to :inserty:, he paused to check his campaign results, then :insertz:. Bob saw the whole thing, so he changed his registered party — the poll lines were long, :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["The Donald", "Baracka Flaka", "J.B."];
var insertY = ["Area 51", "the Pentagon", "the White House"];
var insertZ = ["ordered a drone strike to cope with his insecurities", "asked for the red phone", "blamed Russia"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    var newStory = newStory.replace(':insertx:', xItem);
    var newStory = newStory.replace(':insertx:', xItem);
    var newStory = newStory.replace(':inserty:', yItem);
    var newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone';
    const temperature = Math.round((94 - 32) * (5/9)) + ' centigrade';
    var newStory = newStory.replace('300 pounds', weight);
    var newStory = newStory.replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}