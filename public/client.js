  // Add a variable "pet_info" equal to a dictionary with the name (string), weight (number), and happiness (number) of your pet
  var petInfo = {
    'name' : 'Thinkpup',
    'weight' : 6,
    'happiness' : 5
  };

$(function() {
   
  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  
})

  function clickedTreatButton() {
    // Increase pet happiness
    // Increase pet weight
    petInfo['weight'] = petInfo['weight'] + 2;
    petInfo['happiness'] = petInfo['happiness'] + 1;
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedPlayButton() {
    // Increase pet happiness
    // Decrease pet weight
    petInfo['happiness'] = petInfo['happiness'] + 1;
    petInfo['weight'] = petInfo['weight'] - 1;
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedExerciseButton() {
    // Decrease pet happiness
    // Decrease pet weight
    petInfo['happiness'] = petInfo['happiness'] - 2;
    petInfo['weight'] = petInfo['weight'] - 1;
    checkAndUpdatePetInfoInHtml();
  }

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
  }
  
  function checkWeightAndHappinessBeforeUpdating() {
    // Add conditional so if weight is lower than zero, set it back to zero
    if (petInfo['weight'] < 0) {
      petInfo['weight'] = 1;
    }
    if (petInfo['happiness'] < 0) {
      petInfo['happiness'] = 1;
    }
      
  }
  
  // Updates your HTML with the current values in your pet_info dictionary
  function updatePetInfoInHtml() {
    $('.name').text(petInfo['name']);
    $('.weight').text(petInfo['weight']);
    $('.happiness').text(petInfo['happiness']);
  }
