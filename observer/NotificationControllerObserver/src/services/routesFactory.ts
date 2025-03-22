import { routesURL } from "../configs/config";

type RouterParam = {
    _id : string | number,
    pageName : string, 
    queryString : string
}

export class RoutesFactory {
    private static baseURL : string = routesURL.baseURL;

    public static buildRoutes(
        userParam : string,
        routerParam? : RouterParam 
    ) : string {
        let url = `${this.baseURL}/${userParam}`;
        if(routerParam) {
            url += `/${routerParam.pageName}?/id=${routerParam._id}&${routerParam.queryString}`;
        }
        return url;
    }
    
}
