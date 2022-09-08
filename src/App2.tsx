import React, {useState, useEffect, useMemo} from 'react';

interface User {
    username: string;
    age: number;
}

const App2 = () => {
    const [user, setUser] = useState<User>({username: '', age: 0});

    /*useEffect(() => {
        console.log('useEffect in action!')
        document.title = `Username: ${user.username}`;
    }, [user.username/!*, user.age*!/]);*/

    const mUser = useMemo<User>(() => ({
        username: user.username,
        age: user.age
    }), [user.username, user.age]);

    useEffect(() => {
        console.log('useEffect in action!')
        document.title = `Username: ${user.username}`;
    }, [mUser]);

    const updateUsername = () => {
        setUser((prev) => ({... prev, username: 'km'}));
    }

    return (
        <div>
            <button onClick={updateUsername}>Change username to 'km'</button>
            <h1>Username: {user.username}</h1>
            <h1>Age: {user.age}</h1>
        </div>
    );
}

export default App2;
