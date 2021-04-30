
export interface StepOutputInterface {
    items: any[]; // The sorted items so far
    description: string; // A description of what happened in the last step
}

export default interface SorterInterface {
    name: string;
    description: string;
    sort (items: any[]): any[];
    step (items: any[]): StepOutputInterface;
}