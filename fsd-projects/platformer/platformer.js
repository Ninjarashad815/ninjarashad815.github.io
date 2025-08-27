$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "Navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(150,700 ,65 ,12 , "black");
createPlatform(250,620 ,40 ,12 , "black");
createPlatform(400,500,65 ,7 , "black");
createPlatform(295,400 ,65 ,7 , "black");
createPlatform(400,295 ,300,8 , "color");
createPlatform(403,200 ,448 ,8 , "white");
createPlatform(700,350 ,45 ,7 , "black");
createPlatform(750,300 ,45 ,7 , "color");
createPlatform(465,300 ,8 ,450 , "black");
createPlatform(795,300 ,8 ,80 , "black");
createPlatform(850,200 ,4 ,375 , "black");
createPlatform(550,575 ,550 ,7 , "black");
createPlatform(469,475 ,332 ,6 , "black");
createPlatform(500 , 750 ,332 ,6 , "black");







    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons
createCannon("top", 200, 1000);
createCannon("right", 262, 3500);
createCannon("right", 658, 3600);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
