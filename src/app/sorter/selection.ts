import Observable from "../utils/observable";
import AbstractSorter from "./abstract";
import { GetValueFunction } from "./sorter-interface";

class Selection<T> extends AbstractSorter<T> {
    name: string = 'Selection';
    description: string = '';

    sort (items: T[], getValueFunction: GetValueFunction): Observable {
        return new Observable((observable: Observable) => {

        });
    }
}

export default Selection;
