import { useState, useEffect } from "react";

function DataFetcher() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    return (
        <div className="p-4">
            {loading ? (
                <h1 className="text-lg font-bold">Loading...</h1>
            ) : (
                <ul className="space-y-4">
                    {data.map(user => (
                        <li 
                            key={user.id} 
                            className="text-blue-600 font-semibold text-lg p-2 bg-gray-100 rounded-md shadow-sm"
                        >
                            {user.company.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default DataFetcher