import {AppSyncHandler, decorate} from '@/utils/handler.util';
import {GqlHealthCheckType} from '@/graphql/generated/graphql';
import {Container} from 'typedi';
import {HealthCheckController} from '@/controllers/queryGetHealthCheck.controller';

let instance: HealthCheckController | undefined;

export const handler = decorate([AppSyncHandler],
    async (): Promise<GqlHealthCheckType> => {
        if (!instance) {
            instance = Container.get(HealthCheckController);
        }

        return instance.getHello();
    }
);