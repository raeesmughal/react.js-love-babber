import React, { useEffect, useState } from 'react'

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => {

                if (!response.ok) {
                    throw new Error('Network response is not ok');
                }

                return response.json()

            })
            .then((data) => {
                setData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.log('fetch error : ' + error);
                setError(error.message || 'something went wrong');
                setLoading(false);
            })

    }, [])

    if (error) {
        return (
            <div>{error}</div>
        )
    }

    return (
        <div>
            {
                loading ?
                    <h1>loading</h1> :
                    <ul>
                        {
                            data.map((post) => (
                                <li key={post.id}>{post.title}</li>
                            ))
                        }
                    </ul>
            }
        </div>
    )
}

export default DataFetcher