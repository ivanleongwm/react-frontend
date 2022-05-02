import {BACKEND} from '../utils/utils';
import { useEffect } from 'react';
import urlcat from 'urlcat';

export default function HelloWorld() {

    const loginSuccessCheck = () => {
        const url = urlcat(BACKEND, `/hello-world/path-variable/bean`);

        fetch(url, {
            method: "GET",
            credentials: 'include',
            headers: {
            "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log("RESPONSE OF TEST FETCH",response)
                return response
            })
            .then((data) => {
                console.log("DATA OF TEST FETCH",data)
            })
            .catch((error) => console.log(error));
        };

    useEffect(() => {
        loginSuccessCheck()
    },[])

    function handleSubmit() {
        console.log("retrieve clicked")
    }

    return (
        <div><button onClick={handleSubmit}>Welcome Message</button></div>
    )
}