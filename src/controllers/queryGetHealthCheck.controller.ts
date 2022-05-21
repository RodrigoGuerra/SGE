import {Service} from 'typedi';
import {GqlHealthCheckType} from '@/graphql/generated/graphql';

@Service()
export class HealthCheckController {

    constructor(
    ) {}

    public getHello(): GqlHealthCheckType {
        return {status:200,message:'OK'}
    }

}