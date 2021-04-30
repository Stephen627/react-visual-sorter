import Selection from './selection';
import Insertion from "./insertion";
import SorterInterface from "./sorter-interface";

const sorters: SorterInterface[] = [
    new Selection(),
    new Insertion(),
];

export default sorters;
