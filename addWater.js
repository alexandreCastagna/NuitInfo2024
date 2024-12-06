import { Texture, TilingSprite } from 'pixi.js';

export function addWater(app)
{

    const texture = Texture.from('water');
    const water = new TilingSprite({
        texture,
        width: app.screen.width
    });

    app.ticker.add(function(){
        water.tilePosition.x -= 5;
    });

    app.stage.addChild(water);

    water.y = app.screen.height - water.height;

}