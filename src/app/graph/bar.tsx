import * as React from 'react';

export interface Props {
    value: number;
    highlight?: boolean;
};

const Bar = (props: Props) => {
    const style = {
        height: `${props.value}%`,
        width: '25px'
    };
    const className: string[] = [
        'mt-auto'
    ];
    if (props.highlight) {
        className.push('bg-secondary-400');
        className.push('dark:bg-secondary-600');
    } else {
        className.push('bg-primary-400');
        className.push('dark:bg-primary-600');
    }

    return <span className={className.join(' ')} style={style}></span>
};

export default Bar;
