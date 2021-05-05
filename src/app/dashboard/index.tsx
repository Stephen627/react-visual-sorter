/**
 * start sorting
 * record time
 * display sort information
 */

import * as React from 'react';
import Graph, { BarItem } from '../graph';

import Options from './options';

const { useState } = React;

const Dashboard = () => {
    const [ numberOfItems, setNumberOfItems ] = useState(Math.floor(window.innerWidth / 27));

    const rawItems = new Uint8Array(numberOfItems);
    window.crypto.getRandomValues(rawItems);

    const items: BarItem[] = [];
    rawItems.forEach((item: number) => {
        const parsedItem: number = parseFloat('0.' + item.toString());
        items.push({
            id: Math.random().toString(16),
            value: Math.floor(parsedItem * 99) + 1,
        });
    });

    return <div
        className="flex flex-col w-screen h-screen overflow-hidden bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    >
        <Options
            onSorterChange={() => {}}
            onSecondsPerStepChange={() => {}}
            onNumberOfItemsChange={(numberOfItems: number) => { setNumberOfItems(numberOfItems) }}
            numberOfItems={numberOfItems}
        />
        <Graph
            items={items}
        />
    </div>
}

export default Dashboard;
