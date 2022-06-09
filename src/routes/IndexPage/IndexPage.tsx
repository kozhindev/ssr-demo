import * as React from 'react';

import './IndexPage.scss';
import {useBem, useFetch} from '@steroidsjs/core/hooks';
import { useMemo } from 'react';

export default function IndexPage() {
    const bem = useBem('IndexPage');

    const {data, isLoading} = useFetch(useMemo(() => ({
        url: '/api/v1/get-message',
    }), []));

    if (isLoading) {
        return (<div>
            Loading...
        </div>);
    }

    return (
        <div className={bem.block()}>
            Greeting message: {data}
        </div>
    );
}
