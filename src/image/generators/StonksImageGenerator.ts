import Canvas, { CanvasRenderingContext2D } from 'canvas';
import path from 'path';

export default class StonksImageGenerator {
    private canvas: Canvas.Canvas;
    private context: CanvasRenderingContext2D;
    private readonly STONKS_IMAGE = path.resolve("assets", "stonks.png");

    constructor() {
        this.canvas = Canvas.createCanvas(800, 600);
        this.context = this.canvas.getContext("2d");
    }

    async generateImage(text: string): Promise<Buffer> {
        // Let's clean the canvas before drawing anything

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const background = await Canvas.loadImage(this.STONKS_IMAGE);
        this.context.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);

        this.context.strokeStyle = '#74037b';
        this.context.strokeRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.font = '28px sans-serif';
        this.context.fillStyle = '#000000';
        this.context.fillText(text, this.canvas.width / 15.5, this.canvas.height / 13.5);

        return this.canvas.toBuffer();
    }
}