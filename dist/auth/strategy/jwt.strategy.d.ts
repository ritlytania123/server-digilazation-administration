import { ConfigService } from '@nestjs/config';
import { UserDto } from '../dto/user.dto';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<any>;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: any): Promise<UserDto>;
}
export {};
