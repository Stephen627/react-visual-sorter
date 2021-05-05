import { BarItem } from "../graph";

export interface StepOutputInterface {
    items: BarItem[]; // The sorted items so far
    description: string; // A description of what happened in the last step
}

export default interface SorterInterface {
    name: string;
    description: string;
    sort (items: BarItem[]): BarItem[];
    step (items: BarItem[]): StepOutputInterface;
}