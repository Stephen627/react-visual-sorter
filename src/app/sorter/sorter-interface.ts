import Observable from "../utils/observable";
import { BarItem } from "../graph";

export interface GetValueFunction {
    (item: any): number;
}

export interface StepOutputInterface<T> {
    items: T[]; // The sorted items so far
    description: string; // A description of what happened in the last step
}

export default interface SorterInterface<T> {
    name: string;
    description: string;
    sort (items: T[], getValueFunction: GetValueFunction, delay: number): Observable;
}