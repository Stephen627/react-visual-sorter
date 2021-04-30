import SorterInterface, { StepOutputInterface } from "./sorter-interface";

class Selection implements SorterInterface {
    name: string = 'Selection';
    description: string = '';

    sort (items: any[]): any[] {
        return [];
    }

    step (items: any[]): StepOutputInterface {
        return {
            items: [],
            description: '',
        };
    }
}

export default Selection;
