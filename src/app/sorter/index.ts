import Selection from './selection';
import Insertion from "./insertion";
import SorterInterface from "./sorter-interface";
import { BarItem } from '../graph';

const sorters: SorterInterface<BarItem>[] = [
    new Selection(),
    new Insertion(),
];

export default sorters;
