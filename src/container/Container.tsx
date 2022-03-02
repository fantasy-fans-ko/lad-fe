import React, {useState, useCallback} from 'react';

const Container = (props: any) => {
    const [ms, setMs] = useState("");
    // const {sendMessage, ms, setMs} = props;
    const {sendMessage} = props;

    const _onChange = useCallback(
        (e) => {
            setMs(e.target.value);
        },
        []
    );

    return (
        <>
            <input
                value={ms}
                onChange={_onChange}
                name={"ms"}
                // onSubmit={() => {
                //     sendMessage();
                //     setMs("");
                // }}
            />
            <button
                type={"button"}
                onClick={() => {
                    sendMessage(ms);
                    setMs("");
                }}
            >
                전송
            </button>
            {/*/!*<button*!/*/}
            {/*/!*    type={"button"}*!/*/}
            {/*    // onClick={() => {*/}
            {/*    //     disConnect();*/}
            {/*    /!*}}*!/*/}
            {/*// >*/}
            {/*//     나가기*/}
            {/*// </button>*/}
        </>
    );
}

export default Container;