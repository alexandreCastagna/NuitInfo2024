import { Sprite } from 'pixi.js';

export async function addBoat(app)
{

   const sprite = Sprite.from('boat');
   const water = Sprite.from('water');
   sprite.y = app.screen.height - water.height+70;
   sprite.x = 100;

   sprite.height = sprite.height;
   sprite.width = sprite.width;

   app.stage.addChild(sprite);
}

function moveBoat(e) {
    if (e.key === 'ArrowLeft') boat.x -= 10; // Aller à gauche
    if (e.key === 'ArrowRight') boat.x += 10; // Aller à droite
}