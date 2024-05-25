import React from 'react'

function About() {
    return (
        <>
        <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
            <div className="space-y-6">
                <p className="text-sm font-semibold md:text-base">Join our team →</p>
                <p className="text-3xl font-bold md:text-4xl">
                We&#x27;re just getting started
                </p>
                <p className="text-base text-gray-600 md:text-lg">
                Our philosophy is simple — hire a team of diverse, passionate people
                and foster a culture that empowers you to do your best work.
                </p>
                <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                Join Now
                </button>
            </div>
            <div className="md:mt-o mt-10 w-full">
                <img
                src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2340&amp;q=80"
                alt="Getting Started"
                className="rounded-lg"
                />
            </div>
            </div>
        </div>
        <hr className="mt-6" />
        </> 
    )
}

export default About
