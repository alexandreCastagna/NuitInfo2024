import { Container, Texture, TilingSprite } from 'pixi.js';

export class Scene{
    constructor(width, height){
        this.view = new Container();

        // this.sky = Sprite.from('background');
        // this.sky.anchor.set(0, 1);
        // this.sky.width = width;
        // this.sky.height = height;

        const backgroundTexture = Texture.from('background');
        const platformTexture = Texture.from('water');

        const maxPlatformHeight = platformTexture.height;
        const platformHeight = Math.min(maxPlatformHeight, height * 0.4);

        const scale = (this.scale = platformHeight / maxPlatformHeight);

        const baseOptions = {
            tileScale: { x: scale, y: scale },
            anchor: { x: 0, y: 1 },
            applyAnchorToTexture: true,
        };

        this.background = new TilingSprite({
            texture: backgroundTexture,
            width,
            height: backgroundTexture.height * scale,
            ...baseOptions,
        });

        this.platform = new TilingSprite({
            texture: platformTexture,
            width,
            height: platformHeight,
            ...baseOptions,
        });

        this.floorHeight = platformHeight * 0.43;

        this.background.y = -this.floorHeight;

        this.view.addChild(this.sky, this.background, this.midground, this.platform);
    }
}