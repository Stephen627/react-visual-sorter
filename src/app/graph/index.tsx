import * as React from 'react';
import Bar from './bar';

export interface Props {
    items: any[];
    highlight?: string;
};

export interface BarItem {
    id: string;
    value: number;
};

const Graph = (props: Props) => {
    const items: JSX.Element[] = [];
    props.items.forEach((item: BarItem) => {
        const highlight = props.highlight === item.id || props.highlight === 'all' ? { 'highlight': true } : {};
        items.push(<Bar {...highlight} key={item.id} value={item.value} />);
    })

    return <div className="mt-4 flex-grow flex justify-evenly">
        {items}
    </div>
}

export default Graph;