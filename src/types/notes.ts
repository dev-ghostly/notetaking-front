import { block } from "./blocks"
// create type 
export type notes = {
    _id: string;
    title: string;
    blocks: block[];
    subnotes: notes[];
}