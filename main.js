import { Application, Assets } from "pixi.js";
import { addBackground } from './addBackground';
import { addWater } from './addWater';
import { addBoat } from './addBoat';

(async () => {
    const app = new Application();
    await app.init({ 
        background: '#1099bb', 
        width: 900,
        height: 500,
      });

    app.canvas.style.position = 'absolute';

    document.body.appendChild(app.canvas);
    await preload();

    addBackground(app);
    addWater(app);
    addBoat(app);
})();

async function preload(){
    const assets = [
        {alias: 'background', src: './assets/sky1.png'},
        {alias: 'boat', src: './assets/ship.png'},
        {alias: 'water', src: './assets/water.png'},
    ];

    await Assets.load(assets);
}

