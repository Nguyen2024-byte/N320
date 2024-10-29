//Reference variables
const storyRef = document.getElementById("story");
// Variable to track the story's progress.
const storyProgress = [];

// Add a function to add segments of story choices.
function addStory() {
  const nameValue = storyRef.value;

  storyProgress.push({});

  showstory();
}

// TO list the choices made by the users and the story's progress.
function showStory() {
  storyRef.innerHTML = "";

  storyProgress.forEach(function () {
    storyRef.innerHTML += `<lil></lil>`;
  });
}

// Function to restart the story.
function restartStory() {
  storyProgress.splice(0, storyProgress.length);

  showStory();
}

function beginStory() {
  let beginStory = confirm(
    ` Welcome to your story. Every choices you make will lead you to a different ending. Choose wisely. Or it might be your last... Proceed?`
  );

  // Confirm to begin the story.
  if (beginStory) {
    document.getElementById("story").innerHTML +=
      "You heard a noise outside. What do you do?";
    const noiseAction = prompt(`You heard a noise outside. What do you do?
        \n (Enter the number of your choice)
        \n 1. Look out window
        \n 2. Leave bedroom`);
    // \n is used to make a line break

    if (noiseAction === "1") {
      document.getElementById("story").innerHTML +=
        "You begin to walk to the window.";
      // If the choice is to walk to the window.
      const lookedOutside = confirm(
        `The window burst open. Do you continue to look outside?`
      );

      // \n is used to make a line break

      if (lookedOutside) {
        document.getElementById("story").innerHTML +=
          "You peek out the window and see a shadow figure approaching your front door. Did you remember to lock it !?";

        const doorLock = confirm(`Did you remember to lock it?!`);
        //Next IF-Else
        if (doorLock) {
          document.getElementBId("story").innerHTML +=
            "You remembered to lock the front door, so the figure left your house. You are safe. THE END!";
          // Next if statement
        } else {
          document.getElementBId("story").innerHTML +=
            "You frantically ran down to lock the front door. But it was too late. The dark figure has entered the house! And they've got a knife!";

          const WeaponsChoice = prompt(
            `You frantically ran down to lock the front door. 
            \n But it was too late. The dark figure has \n entered the house! And they've got a knife!
            
            \n Luckily for you, you see a nearby table 
            \n with a variety of weapons to use.
            \n Which do you choose?
            \n (Enter the number of your choice)
            \n 1. Banana
            \n 2. Sword
            \n 3. Gun`
          );

          if (WeaponsChoice === "1") {
            document.getElementById("story").innerHTML +=
              "You choose the banana? It's nutritious. But not exactly helpful in a fight. Oh well. You died. So sad. THE END.";
          } else if (WeaponsChoice === "2") {
            document.getElementById("story").innerHTML +=
              "You choose the sword! The intruder realizes he doesn't stand a chance, dropped his knife, and ran for his life. THE END.";
          } else if (WeaponsChoice === "3") {
            document.getElementById("story").innerHTML +=
              "You take the gun and you shot the intruder in the leg. Then you call 911, and the police came to take the intruder away. THE END.";
          } else {
            document.getElementById("story").innerHTML +=
              "Invalid response. You can't seem to make up your mind of what weapon to choose, so you're defenseless as the intruder kills you. THE END.";
          }
          // next if statement
        }

        // Next if statement
      } else {
        document.getElementBId("story").innerHTML +=
          "You force the window shut again and lock it. Now you have an uneasy feeling.";
        // next if statement
        const knockOnWindow = confirm(
          `You suddenly hear something tapping on the window. Do you still want to check it?`
        );

        if (knockOnWindow) {
          document.getElementBId("story").innerHTML +=
            "You carefully peek through the curtains to see a pair of red eyes staring into your souls. You try to shut the curtains tight, but too late! The ghost enters your room and...";

          const ghostBuster = prompt(`It's a ghost!
                \n What do you do?
                \n (Enter the number of your choice)
                \n 1. Give it a hug?
                \n 2. Suck it up with a vacumm cleaner!`);
          if (ghostBuster === "1") {
            document.getElementById("story").innerHTML +=
              "You think the ghost is friendly, so you decide to give it a hug. Big mistake. It possess you. THE END.";
          } else if (ghostBuster === "2") {
            document.getElementById("story").innerHTML +=
              "I'm a Luigi! Number one! It's just a floating sheet with eyeballs. You take the vaccumn cleaner and suck the ghost up. THE END.";
          } else {
            document.getElementById("story").innerHTML +=
              "Invalid response. You must type either 1 or 2. Which one to defeat the ghost?";
          }
        } else {
          document.getElementBId("story").innerHTML +=
            "You'd rather not want to look outside and see what's tapping on the window. You decide to hide under the bed and pray for THE END.";
        }
      }
      // Next if statement
    } else if (noiseAction === "2") {
      document.getElementById("story").innerHTML +=
        "You open the bedroom door.";
      // next if statement
      const peekFromDoor = confirm(
        `You peek from your bedroom door to see a shadow moving across the halls. Do you still want to check it?`
      );

      if (peekFromDoor) {
        document.getElementById("story").innerHTML +=
          "You step out into the halls to investigate the shadow. You turn look around until you stand face-to-face...a vampire!";

        const VampireAttack = prompt(
          `Pop quiz hot shot: You're standing 
            \n face-to-face with a bloodthirsty
            \n vampire. What do you do?
            \n (Enter the number of your choice.)
            \n 1. Call Buffy the Vampire Slayer!
            \n 2. Use garlic!
            \n 3. Use a wooden stake!`
        );

        if (VampireAttack === "1") {
          document.getElementById("story").innerHTML +=
            "You try to call Buffy the Vampire Slayer...but the vampire smashed your phone, and you are helpless as the vampire attacks you. You realize...it's THE END.";
        } else if (VampireAttack === "2") {
          document.getElementById("story").innerHTML +=
            "You picked up a garlic and you threw it at the vampire. The vampire breaks out into rash and it ran out of the nearest window, flying off into the night. THE END!";
        } else if (VampireAttack === "3") {
          document.getElementById("story").innerHTML +=
            "You frantically picked up your brother's wooden baseball bat and quickly sharpened the handle into a sharp point. Then you use it to stab the vampire in the heart and killed it. THE END!";
        } else {
          document.getElementById("story").innerHTML +=
            "You couldn't make up your mind and the vampire pounced on you and sucked out all your blood. And then you become another vampire. THE END.";
        }
      } else {
        document.getElementById("story").innerHTML +=
          "You simply triple-locked your bedroom door and decide to wait it out through the night. THE END.";
      }
    } else {
      document.getElementById("story").innerHTML +=
        "Invalid response. Please choose either 1 or 2.";
      // next if statement
    }
    // Choose not to start the story.
  } else {
    document.getElementBId("story").innerHTML +=
      "Then you'll never know how the story goes. THE END.";
    // next if statement
  }
}
