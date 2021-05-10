import * as React from 'react';
import Graph, { BarItem } from '../graph';
import Insertion from '../sorter/insertion';
import SorterInterface from '../sorter/sorter-interface';

import Options from './options';

const { useState } = React;
let rawItems: Uint8Array = null;

const Dashboard = () => {
    const [ numberOfItems, setNumberOfItems ] = useState<number>(Math.floor(window.innerWidth / 27));
    const [ secondsPerStep, setSecondsPerStep ] = useState<number>(1);
    const [ sorter, setSorter ] = useState<SorterInterface<BarItem>>(new Insertion());
    const [ items, setItems ] = useState<BarItem[]>([]);
    const [ restart, setRestart ] = useState<boolean>(false);

    if (restart || rawItems === null || rawItems.length !== numberOfItems) {
        rawItems = new Uint8Array(numberOfItems);
        window.crypto.getRandomValues(rawItems);

        const tmpItems: BarItem[] = [];
        rawItems.forEach((item: number) => {
            const parsedItem: number = parseFloat('0.' + item.toString());
            tmpItems.push({
                id: Math.random().toString(16),
                value: Math.floor(parsedItem * 99) + 1,
            });
        });

        setRestart(false);
        setItems(tmpItems);
    }

    return <div
        className="flex flex-col w-screen h-screen overflow-hidden bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    >
        <Options
            onSorterChange={(sorter: SorterInterface<BarItem>) => { setSorter(sorter) }}
            onSecondsPerStepChange={(secondsPerStep: number) => { setSecondsPerStep(secondsPerStep) }}
            onNumberOfItemsChange={(numberOfItems: number) => { setNumberOfItems(numberOfItems) }}
            sorter={sorter}
            numberOfItems={numberOfItems}
            secondsPerStep={secondsPerStep}
            play={() => {
                const sortedItems = sorter.sort(items, (item: BarItem) => {
                    return item.value;
                });
                setItems([ ...sortedItems ]);
            }}
            restart={() => { setRestart(true) }}
        />
        <Graph
            items={items}
        />
    </div>
}

export default Dashboard;
