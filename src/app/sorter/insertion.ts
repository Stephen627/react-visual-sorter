import AbstractSorter from "./abstract";
import { GetValueFunction } from "./sorter-interface";

class Insertion<T> extends AbstractSorter<T> {
    public name: string = 'Insertion';
    public description: string = '';

    public sort (items: T[], getValueFunction: GetValueFunction): T[] {
        for (let i: number = 0; i <= items.length; i++) {
            for (let j: number = i - 1; j >= 0; j--) {
                const compareItem1: T = items[j];
                const compareItem2: T = items[j - 1];

                if (typeof compareItem2 === 'undefined' || (getValueFunction(compareItem1) >= getValueFunction(compareItem2))) {
                    break;
                }

                items = this.swap(items, j, j - 1);
            }
        }

        return items;
    }
}

export default Insertion;
