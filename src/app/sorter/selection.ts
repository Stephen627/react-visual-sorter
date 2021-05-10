import AbstractSorter from "./abstract";
import { GetValueFunction } from "./sorter-interface";

class Selection<T> extends AbstractSorter<T> {
    name: string = 'Selection';
    description: string = '';

    sort (items: T[], getValueFunction: GetValueFunction): T[] {
        return items;
    }
}

export default Selection;
