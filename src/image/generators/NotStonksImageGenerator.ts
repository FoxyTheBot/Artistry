import Canvas, { CanvasRenderingContext2D } from 'canvas';
import path from 'path';

export default class NotStonksImageGenerator {
    private canvas: Canvas.Canvas;
    private context: CanvasRenderingContext2D;
    private readonly NOT_STONKS_IMAGE = path.resolve("assets", "notstonks.png");

    constructor() {
        this.canvas = Canvas.createCanvas(800, 600);
        this.context = this.canvas.getContext("2d");
    }

    async generateImage(text: string): Promise<Buffer> {
        const background = await Canvas.loadImage(this.NOT_STONKS_IMAGE);
        this.context.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);

        this.context.strokeStyle = '#74037b';
        this.context.strokeRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.font = '40px sans-serif';
        this.context.fillStyle = '#000000';
        this.context.fillText(text, this.canvas.width / 13.1, this.canvas.height / 14.1);

        this.context.beginPath();
        this.context.arc(125, 125, 100, 6, Math.PI * 2, true);
        this.context.closePath();
        this.context.clip();

        return this.canvas.toBuffer();
    }
}