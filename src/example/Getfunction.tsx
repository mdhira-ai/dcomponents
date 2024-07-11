import React from "react";
import { useEffect, useState } from "react";

export function Getdata(myid: number) {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${myid}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(err => console.log(err));
    }, [myid]);

    return data;
}


export function Gethelp() {
    return "hello world"
}




