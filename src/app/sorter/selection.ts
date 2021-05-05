import { BarItem } from "../graph";
import SorterInterface, { StepOutputInterface } from "./sorter-interface";

class Selection implements SorterInterface {
    name: string = 'Selection';
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

export default Selection;
