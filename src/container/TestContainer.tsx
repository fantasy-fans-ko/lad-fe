import React, {useEffect, useState, useRef} from 'react';
import * as StompJS from '@stomp/stompjs';
import Container from './Container';

const TestContainer = () => {
    const [content, setContent] = useState({
        price: null,
        auctionId: null,
        playerId: null,
        bidderId: null,
    });
    const client : any = useRef({});

    const timerId = useRef(null);
    const time = useRef(45);

    useEffect(() => {
        connect();
        return () => disConnect();
    }, []);

    const connect = () => {
        client.current = new StompJS.Client({
            brokerURL: 'ws://localhost:8080/ws/websocket',
            connectHeaders: {
                login: 'user',
                password: 'password',
            },
            onConnect: () => {
                subscribe();
            },
            debug: function (str: any) {
                console.log(str);
            },
        })

        client.current.activate();
    }

    const subscribe = () => {
        client.current.subscribe('/topic/bidLog/history', (data: any) => {
            console.log(JSON.parse(data.body));
            setContent(JSON.parse(data.body));
            // addContent(newMessage);
        });
    }

    const handler = (message: string) => {
        if (!client.current.connected)
            return;

        // client.current.publish({
        //     destination: '/draft/start',
        // })
        client.current.publish({
            destination: '/draft/bidLog/save',
            body: JSON.stringify({
                playerId: 1,
                auctionId: 1,
                price: 20,
                bidderId: 1
            }),
        })
    }

    const disConnect = () => {
        if (client.current.connected)
            client.current.deactivate();
    }

    return (
        <>
            <div>
                <div id="menu">
                    <p>Welcome,
                    </p>
                </div>
                <div>
                    sdlkfjsldkfj
                </div>
                <Container sendMessage={handler}/>
            </div>
        </>
    )
}

export default TestContainer;
