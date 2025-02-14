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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(600, 40, 200, 260);
    createPlatform(1200, 350, 70, 40, "red");
    createPlatform(1150, 450, 70, 40, "red");
    createPlatform(1200, 550, 70, 40, "red");
    createPlatform(1150, 650, 70, 40, "red");
    createPlatform(1150, 250, 70, 40, "red");

    // TODO 3 - Create Collectables
    createCollectable("steve", 1200, 150);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("grace", 400, 170, 0.5, 0.7);
    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 400);
    createCannon("right", 300, 2000);
    createCannon("top", 400, 400);
    createCannon("top", 600, 400);
    createCannon("top", 800, 400);
    createCannon("top", 1000, 400);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
