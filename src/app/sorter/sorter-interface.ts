
export interface StepOutputInterface {
    items: any[];
    description: string;
}

export default interface SorterInterface {
    description: string;
    sort (items: any[]): any[];
    step (items: any[]): StepOutputInterface;
}