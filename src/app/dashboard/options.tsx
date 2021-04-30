/**
 * sorter
 * speed
 * number of items
 * dark mode?
 */
import * as React from 'react';
import Sorters from '../sorter';
import SorterInterface from '../sorter/sorter-interface';

const Options = () => {
    const options = Sorters.map((sorter: SorterInterface) => {
        return <option key={sorter.name}>{sorter.name}</option>;
    });

    return <div
        className="flex justify-between w-full bg-primary-400 p-3 dark:bg-primary-600"
    >
        <div>
            <label className="mx-2">
                <span className="mr-2">Sorter:</span>
                <select className="dark:bg-gray-800">
                    {options}
                </select>
            </label>
            <label className="mx-2">
                <span className="mr-2">Number of items</span>
                <input className="dark:bg-gray-800" type="number" />
            </label>
            <label className="mx-2">
                <span className="mr-2">Seconds per step</span>
                <input className="dark:bg-gray-800" type="number" />
            </label>
            <div className="mx-2 inline-block">
                <button className="mx-2">Play</button>
                <button className="mx-2">Pause</button>
                <button className="mx-2">Restart</button>
            </div>
        </div>
        <div>
            <label>
                <span className="mr-2">Theme:</span>
                <select className="dark:bg-gray-800">
                    <option>Dark</option>
                    <option>Light</option>
                </select>
            </label>
        </div>
    </div>
}

export default Options;
