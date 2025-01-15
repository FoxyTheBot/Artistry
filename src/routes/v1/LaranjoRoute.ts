import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import ImageGenerator from "../../image/ImageGenerator";
import { GenericImageRequest } from "../../utils/GenericImageRequest";

export default class LaranjoRoute {
    private generator: ImageGenerator
    
    constructor(private server: FastifyInstance) {
        this.generator = new ImageGenerator()
        this.server.post("/v1/memes/laranjo", this.generateLaranjoImage.bind(this));
    }

    async generateLaranjoImage(req: FastifyRequest, res: FastifyReply) {
        const body = req.body as GenericImageRequest;

        if (!body.text) {
            return res.status(400).send({
                error: "Missing required parameter: text is required.",
            })
        }

        const imageBuffer = await this.generator.generateLaranjoImage(body.text);
        res.header("Content-Type", "image/png").send(imageBuffer);
    }
}