import React from 'react'

export default async function Page({ params }) {
    const { amount } = params;
    return (
        <>
            <div className="event-body">
                <div className="heading">Payment Success</div>
                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
                    <h2 className="text-2xl">Your payment successfully </h2>

                    <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
                        {amount && (
                            <span>$ {amount}</span>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}
