import service from './Query/serviceResolver';
import services from './Query/servicesResolver';
import { getConfigs, latestConfig } from './Query/configResolver';
import newService from './Mutation/newServiceResolver';
import updateConfig from './Mutation/updateConfigResolver';

const resolveFunctions = {
    Query: {
        service,
        services,
        getConfigs,
        latestConfig,
    },
    Mutation: {
        newService,
        updateConfig
    }
}
export default resolveFunctions