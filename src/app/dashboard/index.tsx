/**
 * start sorting
 * record time
 * display sort information
 */

import * as React from 'react';

import Options from './options';

const Dashboard = () => {
    return <div
        className="w-screen h-screen overflow-hidden bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    >
        <Options />
    </div>
}

export default Dashboard;
