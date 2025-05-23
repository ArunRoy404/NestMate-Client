import { useEffect, useState } from 'react';
import DatabaseContext from '../Contexts/DatabaseContext/DatabaseContext';
import useAuthContext from '../CustomContexts/UseAuthContext';

const DatabaseProvider = ({ children }) => {
    const [userDB, setUserDB] = useState({})
    const { loggedUser } = useAuthContext();

    useEffect(() => {
        if (loggedUser?.displayName && loggedUser?.photoURL) {

            const userInfo = {
                firebase_uid: loggedUser?.uid,
                name: loggedUser?.displayName,
                email: loggedUser?.email,
                photoURL: loggedUser?.photoURL
            }

            findUser(loggedUser?.uid)
                .then(res => res.json())
                .then(data => {

                    if (data.length < 1) {
                        createUserDB(userInfo)
                            .then(response => response.json())
                            .then(result => {

                                if (result.insertedId) {
                                    findUser(loggedUser?.uid)
                                        .then(res => res.json())
                                        .then(data => {
                                            setUserDB(data[0])
                                        })

                                }
                            })
                    }
                    else {
                        setUserDB(data[0])
                    }
                })
        }

    }, [loggedUser])

    const createUserDB = (userInfo) => {
        return fetch('https://nest-mate-server.vercel.app/users', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
    }

    const findUser = (firebase_uid) => {
        return fetch(`https://nest-mate-server.vercel.app/users/${firebase_uid}`)
    }

    const database = {
        userDB
    }

    return (
        <DatabaseContext value={database}>
            {children}
        </DatabaseContext>
    )
};

export default DatabaseProvider;