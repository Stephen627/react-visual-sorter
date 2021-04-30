import SorterInterface, { StepOutputInterface } from "./sorter-interface";

class Insertion implements SorterInterface {
    name: string = 'Insertion';
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

export default Insertion;
