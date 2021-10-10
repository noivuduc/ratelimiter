
export default class AppConfig {
    public static readonly REDIS_HOST: string = process.env.REDIS_HOST || '127.0.0.1';
    public static readonly REDIS_PORT: number = parseInt(process.env.REDIS_PORT) || 6379;
    // 3 requests per 5 seconds
    public static readonly NUMBER_OF_UNIT: number = parseInt(process.env.NUMBER_OF_UNIT) || 5;
    public static readonly REQUEST_PER_UNIT: number = parseInt(process.env.REQUEST_PER_UNIT) || 3;
    public static readonly PORT: number = parseInt(process.env.PORT) || 3000;
}