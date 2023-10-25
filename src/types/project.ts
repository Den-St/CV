import { LinkT } from "./link"

export type ProjectT = {
    id:number,
    name:string,
    links:LinkT[],
    description:string,
    technologies:{
        client:string[],
        server:string[],
    }
}