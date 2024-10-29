import Canvas, { CanvasRenderingContext2D } from 'canvas';
import { ImageConstants } from "../../utils/ImageConstants";

export default class GirlfriendImageGenerator {
    private canvas: Canvas.Canvas;
    private context: CanvasRenderingContext2D;

    constructor() {
        this.canvas = Canvas.createCanvas(500, 510);
        this.context = this.canvas.getContext("2d");
    }

    async generateImage(avatarUrl: string): Promise<Buffer> {
        const memeBackground = await Canvas.loadImage(ImageConstants.GIRLFRIEND_IMAGE);
        const avatarImage = await Canvas.loadImage(avatarUrl);

        this.context.drawImage(memeBackground, 0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(avatarImage, 20, 170, 200, 200);

        return this.canvas.toBuffer();
    }
}