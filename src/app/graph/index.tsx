import * as React from 'react';
import Bar from './bar';

export interface Props {
    items: any[];
};

export interface BarItem {
    id: string;
    value: number;
};

const Graph = (props: Props) => {
    const items: JSX.Element[] = [];
    props.items.forEach((item: BarItem) => {
        items.push(<Bar key={item.id} value={item.value} />);
    })

    return <div className="mt-4 flex-grow flex justify-evenly">
        {items}
    </div>
}

export default Graph;