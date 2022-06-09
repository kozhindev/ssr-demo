import * as React from 'react';

import './IndexPage.scss';
import {useBem, useFetch} from '@steroidsjs/core/hooks';
import { useMemo } from 'react';

export default function IndexPage() {
    const bem = useBem('IndexPage');

    const {data: receivedMessage, isLoading} = useFetch(useMemo(() => ({
        url: '/api/v1/get-message',
    }), []));

    const greetingMessage = isLoading ? 'загружаем' : receivedMessage;

    return (
        <div className={bem.block()}>
            <div>
                Greeting message: {greetingMessage}
            </div>
            <img alt='Чюваки' src='/images/wednesdaymydudeswide.jpg' />
        </div>
    );
}
