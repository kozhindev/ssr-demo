import * as React from 'react';

import './IndexPage.scss';
import {useBem, useFetch, useSelector} from '@steroidsjs/core/hooks';
import { useMemo } from 'react';
import {getUser} from '@steroidsjs/core/reducers/auth';

export const getIndexPageFetch = () => ({
    url: '/api/v1/get-message',
})

export default function IndexPage() {
    const bem = useBem('IndexPage');

    const user = useSelector(state => getUser(state));

    const {data: receivedMessage, isLoading} = useFetch(useMemo(getIndexPageFetch, []));

    const greetingMessage = isLoading ? 'loading' : receivedMessage;

    return (
        <div className={bem.block()}>
            <div>
                Greeting message for user '{user.name}': {greetingMessage}
            </div>
            <img alt='Чюваки' src='/images/wednesdaymydudeswide.jpg' />
        </div>
    );
}
