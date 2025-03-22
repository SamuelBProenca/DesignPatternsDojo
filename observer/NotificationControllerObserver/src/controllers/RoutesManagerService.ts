import { RoutesFactory } from "../services/routesFactory";

export class RoutesService {
    public static getUserRoute(userId : string | number) : string{
        return RoutesFactory.buildRoutes("users", {_id :  userId, pageName : "profile", queryString : ""});
    }
    public static getSearchRoute(query: string, page: number): string {
        return RoutesFactory.buildRoutes("search", { _id: "", pageName: "results", queryString: `q=${query}&page=${page}` });
    }


} 