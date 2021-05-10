import * as React from 'react';
import { BarItem } from '../graph';
import Sorters from '../sorter';
import SorterInterface from '../sorter/sorter-interface';

const { useState } = React;

export interface Props {
    onSorterChange: Function;
    onNumberOfItemsChange: Function;
    onSecondsPerStepChange: Function;
    numberOfItems: number;
    secondsPerStep: number;
    play: React.MouseEventHandler<HTMLButtonElement>;
    restart: Function;
    sorter: SorterInterface<BarItem>;
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

    const options = Sorters.map((sorter: SorterInterface<BarItem>) => {
        return <option value={sorter.name} key={sorter.name}>{sorter.name}</option>;
    });

    return <div
        className="flex justify-between w-full bg-primary-400 p-3 dark:bg-primary-600"
    >
        <div>
            <label className="mx-2">
                <span className="mr-2">Sorter:</span>
                <select
                    defaultValue={props.sorter.name}
                    className="dark:bg-gray-800"
                    onChange={(evt: React.ChangeEvent<HTMLSelectElement>) => {
                        const sorter: SorterInterface<BarItem> = Sorters.find((item: SorterInterface<BarItem>) => {
                            return item.name === evt.target.value;
                        });

                        props.onSorterChange(sorter);
                    }}
                >
                    {options}
                </select>
            </label>
            <label className="mx-2">
                <span className="mr-2">Number of items</span>
                <input 
                    className="dark:bg-gray-800"
                    type="number"
                    value={props.numberOfItems}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                        const value = parseInt(evt.target.value) || 0;
                        props.onNumberOfItemsChange(value > 250 ? 250 : value);
                    }}
                />
            </label>
            <label className="mx-2">
                <span className="mr-2">Seconds per step</span>
                <input
                    className="dark:bg-gray-800"
                    type="number"
                    value={props.secondsPerStep}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => { props.onSecondsPerStepChange(parseFloat(evt.target.value)) }}
                />
            </label>
            <div className="mx-2 inline-block">
                <button className="mx-2" onClick={props.play}>Play</button>
                <button className="mx-2" onClick={() => props.restart() }>Restart</button>
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
