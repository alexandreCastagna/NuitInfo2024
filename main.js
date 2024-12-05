








// const app = new PIXI.Application({
//     width: 800, // Largeur de la scène
//     height: 600, // Hauteur de la scène
//     backgroundColor: 0x1099bb, // Couleur de fond A MODIFIER
// });

// document.body.appendChild(app.view);

// // Charger les ressources
// PIXI.Loader.shared
//     .add('boat', 'assets/boat.png')
//     .add('trash', 'assets/trash.png')
//     .add('water', 'assets/water.png')
//     .add('background', 'assets/sky.png')
//     .load(setup);

// let boat;
// let waterTexture;
// let trashes = [];


// function setup() {
//     // Bateau
//     boat = new PIXI.Sprite(PIXI.Loader.shared.resources['boat'].texture);
//     boat.x = app.screen.width / 2;
//     boat.y = app.screen.height - 100;
//     boat.anchor.set(0.5);
//     app.stage.addChild(boat);

//     // Écoute les touches
//     window.addEventListener('keydown', moveBoat);

//     waterTexture = new PIXI.TilingSprite(
//         PIXI.Loader.shared.resources['water'].texture,
//         app.screen.width,
//         app.screen.height
//     );
//     app.stage.addChild(waterTexture);

//     app.ticker.add(scrollWater);

//     app.ticker.add(gameLoop);

//     setInterval(() => {
//         const trash = new PIXI.Sprite(PIXI.Loader.shared.resources['trash'].texture);
//         trash.x = Math.random() * app.screen.width;
//         trash.y = -50; // Hors de l'écran
//         trash.anchor.set(0.5);
//         app.stage.addChild(trash);
//         trashes.push(trash);
//     }, 1000); // Ajoute un déchet toutes les secondes
// }

// function moveBoat(e) {
//     if (e.key === 'ArrowLeft') boat.x -= 10; // Aller à gauche
//     if (e.key === 'ArrowRight') boat.x += 10; // Aller à droite
// }

// function scrollWater() {
//     waterTexture.tilePosition.y += 2; // Fait défiler l'eau
// }

// function gameLoop() {
//     trashes.forEach(trash => {
//         trash.y += 5; // Descend le déchet

//         // Vérifie si le bateau attrape un déchet
//         if (hitTestRectangle(boat, trash)) {
//             app.stage.removeChild(trash);
//             trashes = trashes.filter(t => t !== trash);
//             console.log('Déchet ramassé !');
//         }
//     });
// }

// // Fonction pour détecter les collisions
// function hitTestRectangle(r1, r2) {
//     const bounds1 = r1.getBounds();
//     const bounds2 = r2.getBounds();
//     return bounds1.x + bounds1.width > bounds2.x &&
//            bounds1.x < bounds2.x + bounds2.width &&
//            bounds1.y + bounds1.height > bounds2.y &&
//            bounds1.y < bounds2.y + bounds2.height;
// }

// let score = 0;
// const scoreText = new PIXI.Text('Score: 0', {
//     fontSize: 24,
//     fill: 0xffffff
// });
// scoreText.x = 10;
// scoreText.y = 10;
// app.stage.addChild(scoreText);

// function gameLoop() {
//     trashes.forEach(trash => {
//         trash.y += 5;

//         if (hitTestRectangle(boat, trash)) {
//             app.stage.removeChild(trash);
//             trashes = trashes.filter(t => t !== trash);
//             score += 10;
//             scoreText.text = `Score: ${score}`;
//         }
//     });
// }