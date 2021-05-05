import { BarItem } from "../graph";
import SorterInterface, { StepOutputInterface } from "./sorter-interface";

class Insertion implements SorterInterface {
    name: string = 'Insertion';
    description: string = '';

    sort (items: BarItem[]): BarItem[] {
        return [];
    }

    step (items: BarItem[]): StepOutputInterface {
        return {
            items: [],
            description: '',
        };
    }
}

export default Insertion;
