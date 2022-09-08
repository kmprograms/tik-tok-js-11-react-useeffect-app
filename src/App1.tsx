import React, {useState, useEffect} from 'react';

const App1 = () => {
    const [counter1, setCounter1] = useState<number>(0);
    const [counter2, setCounter2] = useState<number>(0);

    useEffect(() => {
        console.log('Inside useEffect action')
        document.title = `Counter1: ${counter1}`
    }, [counter1]);

    return (
        <div>
            <button onClick={() => setCounter1(counter1 + 1)}>Click Me 1</button>
            <button onClick={() => setCounter2(counter2 + 1)}>Click Me 2</button>
            <p>Counter 1: {counter1}</p>
            <p>Counter 2: {counter2}</p>
        </div>
    )
}

export default App1;
