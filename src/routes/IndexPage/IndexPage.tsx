import * as React from 'react';

import './IndexPage.scss';
import {useBem, useFetch, useSelector} from '@steroidsjs/core/hooks';
import { useMemo } from 'react';
import {getUser} from '@steroidsjs/core/reducers/auth';
import {getRouteParams} from '@steroidsjs/core/reducers/router';

export const getIndexPageFetch = match => ({
    url: `/api/v1/get-message/${match.params.personTitle}`,
})

export default function IndexPage() {
    const bem = useBem('IndexPage');

    const user = useSelector(state => getUser(state));
    const routeParams = useSelector(state => getRouteParams(state));

    const fetchConfig = () => getIndexPageFetch({params: routeParams});
    const {data: receivedMessage, isLoading} = useFetch(useMemo(fetchConfig, []));

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
