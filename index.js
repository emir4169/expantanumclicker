// Make basic player data structure for a new fresh save file
const player = {
  dimension1: {
    unlocked: true,
    antimatterGenerationMultiplier: 1
  },
  dimension2: {
    unlocked: false,
    antimatterGenerationMultiplier: 0.5,
    matterMultiplier: 0.5,
    automaticGenerationUnlocked: false
  },
  matter_per_click: ExpantaNum(1),
  matter: ExpantaNum(0),
  antimatter: ExpantaNum(0),
  matter_per_second: ExpantaNum(0.5), // chaos
  dev: {
    divisor: 20,
    FreeDim1point5: function(){
      player.dimension2.unlocked = true;
      player.dimension2.antimatterGenerationMultiplier = 1;
      player.dimension2.matterMultiplier = 1;
      player.dimension2.automaticGenerationUnlocked = true;
      console.log("[ { WELCOME TO DEV_DIMENSION 2 } ]")
    }
  }
};
function updateUI() {
  document.getElementById("showantimatter").innerText = player.antimatter.toHyperE();
  document.getElementById("showmatter").innerText = player.matter.toHyperE();
}
function unlockDimension2() {
  if (player.antimatter.gte(5000) && player.matter.gte(5000000)) {
    player.dimension2.unlocked = true;
    player.dimension2.antimatterGenerationMultiplier = 0.5;
    player.dimension2.matterMultiplier = 0.5;
    player.dimension2.automaticGenerationUnlocked = true;
    console.log("[ { WELCOME TO DIMENSION 2 } ]")
    player.antimatter = ExpantaNum(0)
    player.matter = ExpantaNum(1)
    // Additional logic for automatic matter generation can be added here
  } else {
    console.log("[{ NOT ENOUGH RESOURCES. }]")
  }
}

// Main game loop
const mainGameLoop = setInterval(() => {
  if (player.dimension2.unlocked && player.dimension2.automaticGenerationUnlocked) {
    player.matter = player.matter.add(player.matter_per_second.times(player.dimension2.matterMultiplier));
  }
  // Check if the player has enough matter to start antimatter production in Dimension 1
  if (player.dimension1.unlocked && player.matter.gte(100)) {
    player.antimatter = player.antimatter.add(player.matter_per_second.times(player.dimension1.antimatterGenerationMultiplier));
  }

  // Check if the player has enough matter to start antimatter production in Dimension 2
  if (player.dimension2.unlocked && player.matter.gte(200) && player.dimension2.automaticGenerationUnlocked) {
    player.matter = player.matter.add(player.matter_per_second.times(player.dimension2.matterMultiplier));
  }

  // Update the UI
  updateUI();
}, 200);

// Functions for saving and loading player data
saving = {
  save: function() {
    const savingdata = {
      matter_per_click: JSON.stringify(player.matter_per_click.toJSON()),
      matter: JSON.stringify(player.matter.toJSON()),
      antimatter: JSON.stringify(player.antimatter.toJSON())
    };
    return btoa(JSON.stringify(savingdata));
  },
  load: function(savefile) {
    const playerlip = JSON.parse(atob(savefile));
    player.matter = player.matter.constructor.fromJSON(playerlip.matter);
    player.antimatter = player.antimatter.constructor.fromJSON(playerlip.antimatter);
    player.matter_per_click = player.matter_per_click.constructor.fromJSON(playerlip.matter_per_click);
  }
};

// Add event listener to the matter click button
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("clickButton").addEventListener("click", matterclick);
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("clickButton").addEventListener("click", fadeInAfterFadeOut);
});

// Function for handling matter click
function matterclick() {
  antimatterBoost = player.antimatter.div(player.dev.divisor).add(1);
  player.matter = player.matter.add(player.matter_per_click.times(antimatterBoost));
  player.matter_per_click = ExpantaNum(1);
  // document.getElementById("showmatter").innerText = player.matter.toHyperE().toString();
}
function fadeOutAfterClick() {
  const button = document.getElementById('clickButton');
  button.classList.add('fade-out-animation');
  button.disabled = true;

  setTimeout(() => {
    button.style.display = 'none';
    fadeInAfterFadeOut();
  }, 1000);
}

function fadeInAfterFadeOut() {
  const button = document.getElementById('clickButton');
  button.style.display = 'block';
  button.style.opacity = '0';
  button.disabled = false;

  setTimeout(() => {
    button.style.opacity = '1';
  }, 100);
}
// Call the loadnews function
news.begin();
console.log("{ [ Are you looking for bugs or are you cheating? ] }")