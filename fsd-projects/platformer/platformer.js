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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "black"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(150,700 ,65 ,12 , "white");
createPlatform(250,620 ,40 ,12 , "white");
createPlatform(400,500,65 ,7 , "white");
createPlatform(295,400 ,65 ,7 , "white");
createPlatform(400,295 ,300,8 , "white");
createPlatform(403,200 ,448 ,8 , "white");
createPlatform(700,350 ,52 ,7 , "white");
createPlatform(750,300 ,45 ,7 , "white");
createPlatform(465,300 ,8 ,450 , "white");
createPlatform(795,300 ,8 ,80 , "white");
createPlatform(850,200 ,4 ,375 , "white");
createPlatform(550,575 ,550 ,7 , "white");
createPlatform(469,475 ,332 ,6 , "white");
createPlatform(475 , 675 ,332 ,6 , "white");
createPlatform(900 , 675 ,300 ,6 , "white");
createPlatform(1250 , 600 ,70 ,6 , "white");
createPlatform(850 , 500 ,70 ,6 , "white");
createPlatform(1100 , 400 ,70 ,6 , "white");
createPlatform(900 , 300 ,70 ,6 , "white");
createPlatform(1050 , 200 ,70 ,6 , "white");
createPlatform(1300 , 300 ,70 ,6 , "white");
createPlatform(1100 , 400 ,70 ,6 , "white");
createPlatform(100 ,200  ,200 ,6 , "white");
createPlatform(300 , 175 ,100 ,6 , "white");
createPlatform(800 , 675 ,6 ,75 , "white");
createPlatform(900 , 675 ,6 ,75 , "white");
createPlatform(700 , 300 ,2 ,50 , "white");
createPlatform(750 , 300 ,2 ,50 , "white");
createPlatform(300 , 175 ,6 ,31 , "white");
createPlatform(400 , 175 ,6 ,31 , "white");
createPlatform(1100 , 520 ,6 ,60 , "white");
createPlatform(1320 , 600 ,6 ,143 , "white");
createPlatform(1200 , 675 ,6 ,143 , "white");
createPlatform(0 , 1 ,6 ,800 , "black");
createPlatform(1 , 0 ,1400 ,6 , "black");
createPlatform(1394 ,1 ,6 ,800 , "black");
createPlatform(1 , 1 ,100 ,100 , "yellow");
createPlatform(70, 100 ,15, 30 , "yellow");
createPlatform(1, 100 ,15, 30 , "yellow");
createPlatform(30, 100 ,15, 30 , "yellow");
createPlatform(100, 1 ,30, 15 , "yellow");
createPlatform(100, 30 ,30, 15 , "yellow")
createPlatform(100, 70 ,30, 15 , "yellow")
createPlatform(1325,700 ,68, 6 , "white")









    // TODO 3 - Create Collectables
createCollectable("diamond", 135, 175, 0.5, 0.7);
createCollectable("steve", 1250, 700, 0.5, 0.7);
createCollectable("grace", 600, 450, 0.5, 0.7);
createCollectable("max", 850, 700, 0.5, 0.7);
createCollectable("kennedi", 1350, 175, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
createCannon("top", 200, 1000);
createCannon("right", 262, 3700);
createCannon("right", 658, 3600);
createCannon("right", 458, 3600);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
