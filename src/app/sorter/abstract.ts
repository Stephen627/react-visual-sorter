import Observable from "../utils/observable";
import SorterInterface, { GetValueFunction, StepOutputInterface } from "./sorter-interface";

abstract class AbstractSorter<T> implements SorterInterface<T> {
    public abstract name: string;
    public abstract description: string;
    public abstract sort (items: T[], getValueFunction: GetValueFunction): Observable;
    
    protected swap (items: any[], i: number, j: number, inPlace: boolean = false): any[] {
        const localItems = inPlace ? items : [ ...items ];
        const tmp = localItems[i];
        localItems[i] = localItems[j];
        localItems[j] = tmp;

        return localItems;
    }
} 

export default AbstractSorter;
