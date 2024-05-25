import React ,{ useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/08soniya')
    //     .then(response => response.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setdata(data)
    //     })
    // },[])
    return (
        <>
        <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-7xl py-12 md:py-24">
            <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
                <div className="flex items-center justify-center">
                <div className="px-2 md:px-12">
                    <p className="text-2xl font-bold text-gray-900 md:text-4xl">{data.name}</p>
                    <p className="mt-4 text-lg text-gray-600">
                    <b>Company:</b> {data.company}
                    </p>
                </div>
                </div>
                <img
                alt="Contact us"
                className="hidden max-h-full w-full rounded-lg object-cover lg:block"
                src={data.avatar_url}
                />
            </div>
            </div>
        </div>
        <hr className="mt-6" />
        </>
    )
}

export default Github

export const githubInfo = async() => {
    const response = await fetch('https://api.github.com/users/08soniya')
    return response.json()
}