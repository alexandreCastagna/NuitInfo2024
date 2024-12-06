import { Sprite } from 'pixi.js';

export async function addBoat(app)
{

   const sprite = Sprite.from('boat');
   const water = Sprite.from('water');
   sprite.y = app.screen.height - water.height+70;
   sprite.x = 100;

   

   app.stage.addChild(sprite);


    // Parameters for the bobbing effect
    const amplitude = 5; // How high/low the boat moves
    const speed = 0.05; // Speed of the bobbing
    let time = 0; // Time variable to control the animation

    app.ticker.add(() => {
        time += speed; // Increment time
        sprite.y = app.screen.height - water.height + 70 + Math.sin(time) * amplitude; // Update y position
    });

    window.addEventListener('keydown', (e) => moveBoat(e, sprite));

}

function moveBoat(e, sprite) {
    if (e.key === 'ArrowLeft') sprite.x -= 10; // Aller à gauche
    if (e.key === 'ArrowRight') sprite.x += 10; // Aller à droite
}