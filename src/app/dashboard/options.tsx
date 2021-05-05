import * as React from 'react';
import Sorters from '../sorter';
import SorterInterface from '../sorter/sorter-interface';

const { useState } = React;

// These will need to be passed on to the dashboard
export interface Props {
    onSorterChange: Function;
    onNumberOfItemsChange: Function;
    numberOfItems: number;
    onSecondsPerStepChange: Function;
}

const Options = (props: Props) => {
    const [ theme, setTheme ] = useState(
        !('theme' in localStorage) ? 'os' : localStorage.theme
    );

    document.body.classList.remove('dark');
    document.body.classList.remove('light');
    if (theme !== 'os') {
        document.body.classList.add(theme);
        localStorage.theme = theme;
    } else {
        document.body.classList.add(
            window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        )
        localStorage.removeItem('theme');
    }

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
                <input 
                    className="dark:bg-gray-800"
                    type="number"
                    value={props.numberOfItems}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => { props.onNumberOfItemsChange(parseInt(evt.target.value)) }}
                />
            </label>
            <label className="mx-2">
                <span className="mr-2">Seconds per step</span>
                <input className="dark:bg-gray-800" type="number" value="1" />
            </label>
            <div className="mx-2 inline-block">
                <button className="mx-2">Play</button>
                <button className="mx-2">Restart</button>
            </div>
        </div>
        <div>
            <label>
                <span className="mr-2">Theme:</span>
                <select className="dark:bg-gray-800" value={theme} onChange={(evt) => { setTheme(evt.target.value); }}>
                    <option value="os">OS Theme</option>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                </select>
            </label>
        </div>
    </div>
}

export default Options;
