// import React from 'react'

const CreateOrder = () => {
    const appearenNoneForNumber = " appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";

    return (
        <div className='border border-gray-300 rounded-2xl p-4 bg-white'>
            <h1 className='text-lg font-semibold mb-2'>Create Order</h1>

            <section className="flex flex-col gap-y-4">
                <div className="flex flex-row gap-x-4 mt-4 w-full">
                    <div className="flex-1">
                        <p className="font-medium text-base mb-1">Order ID</p>
                        <input
                            type="text"
                            name="order-id"
                            placeholder="ORD-052"
                            className="p-2.5 text-sm w-full border-[1px] border-gray-300 rounded-xl" id=""
                        />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium text-base mb-1">Amount</p>
                        <input
                            type="number"
                            name="amount"
                            placeholder="Amount of Order"
                            className={"p-2.5 text-sm w-full border-[1px] border-gray-300 rounded-xl" + appearenNoneForNumber} id=""
                        />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium text-base mb-1">Address</p>
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            className="p-2.5 text-sm w-full border-[1px] border-gray-300 rounded-xl" id=""
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-y-4">
                <div className="flex flex-row gap-x-4 mt-4 w-full">
                    <div className="flex-1">
                        <p className="font-medium text-base mb-1">Customer Name</p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Customer Name"
                            className="p-2.5 text-sm w-full border-[1px] border-gray-300 rounded-xl" id=""
                        />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium text-base mb-1">Phone number</p>
                        <input
                            type="number"
                            name="phone"
                            placeholder="+91 XXXXX XXXXX"
                            className={"p-2.5  text-sm w-full border-[1px] border-gray-300 rounded-xl" + appearenNoneForNumber} id=""
                        />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium text-base mb-1">Distance in Km</p>
                        <input
                            type="number"
                            name="phone"
                            placeholder="4 Km"
                            className={"p-2.5 text-sm w-full border-[1px] border-gray-300 rounded-xl" + appearenNoneForNumber} id=""
                        />
                    </div>
                </div>
            </section>

            <section className="mt-4">
                <p className="font-medium text-base mb-2">Special Instructions (Optional)</p>
                <textarea
                    name="special instructions" id=""
                    placeholder='Instructions for order'
                    className='min-w-1/3 text-sm border border-gray-300 p-2.5 rounded-xl'>
                </textarea>
            </section>

            <button className='mt-4 border border-gray-300 rounded-xl py-2.5 px-6 text-base font-medium text-white bg-blue-500 hover:bg-blue-600 cursor-pointer transition-colors'>
                Create Order
            </button>
        </div>
    )
}

export default CreateOrder