import * as React from 'react';
import { BarItem } from '../graph';
import Sorters from '../sorter';
import SorterInterface from '../sorter/sorter-interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faUndo, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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
    const [ theme, setTheme ] = useState<string>(
        !('theme' in localStorage) ? 'os' : localStorage.theme
    );
    const [ open, setOpen ] = useState<boolean>(false);

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

    const menuClass: string[] = [
        'fixed', 'top-0', 'bottom-0', 'left-0', 'w-3/4',
        'bg-primary-500 dark:bg-primary-700', 'flex', 'flex-row', 'flex-wrap',
        'content-start', 'max-w-sm'
    ];
    if (!open) {
        menuClass.push('hidden');
    }

    return <div
        className="w-full bg-primary-400 p-3 dark:bg-primary-600"
    >
        <div className="flex flex-row justify-between">
            <div>
                <button className="pl-2 pr-4" onClick={() => setOpen(!open)}><FontAwesomeIcon icon={faBars} /></button>
                <h1 className="inline-block">Visual Sorting Tool</h1>
            </div>
            <div className="mx-2">
                <button className="mx-2" onClick={props.play}><FontAwesomeIcon icon={faPlay} /></button>
                <button className="mx-2" onClick={() => props.restart() }><FontAwesomeIcon icon={faUndo} /></button>
            </div>
        </div>
        <div className={menuClass.join(' ')}>
            <button className="pl-2 pr-4 w-full text-right" onClick={() => setOpen(!open)}><FontAwesomeIcon icon={faTimes} /></button>
            <label className="mx-2 mb-4 w-full">
                <span className="mr-2 w-full block">Sorter:</span>
                <select
                    defaultValue={props.sorter.name}
                    className="dark:bg-gray-800 w-full"
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
            <label className="mx-2 mb-4 w-full">
                <span className="mr-2 w-full block">Number of items</span>
                <input 
                    className="dark:bg-gray-800 w-full"
                    type="number"
                    value={props.numberOfItems}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                        const value = parseInt(evt.target.value) || 0;
                        props.onNumberOfItemsChange(value > 250 ? 250 : value);
                    }}
                />
            </label>
            <label className="mx-2 mb-4 w-full">
                <span className="mr-2 w-full block">Seconds per step</span>
                <input
                    className="dark:bg-gray-800 w-full"
                    type="number"
                    value={props.secondsPerStep}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => { props.onSecondsPerStepChange(parseFloat(evt.target.value)) }}
                />
            </label>
            <label className="mx-2 mb-4 w-full">
                <span className="mr-2 w-full block">Theme:</span>
                <select className="dark:bg-gray-800 w-full" value={theme} onChange={(evt) => { setTheme(evt.target.value); }}>
                    <option value="os">OS Theme</option>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                </select>
            </label>
        </div>
    </div>
}

export default Options;
