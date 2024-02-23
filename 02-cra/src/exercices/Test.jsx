import { useEffect } from 'react';

function Test() {
    useEffect(() => {
        console.log('toto');

        return () => {
            
        }
    });

    return (
        <h1>Test</h1>
    );
}

export default Test;
