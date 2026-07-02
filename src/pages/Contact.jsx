import React from 'react'

function Contact () {
    return (
        <div className="container max-w-6xl mx-auto flex gap-10">
            <div className="w-64 border-r pr-4 mt-10">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg text-gray-700">
                    If you have any questions or inquiries, feel free to reach out to us. We are here to assist you!
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>Email: info@company.com</li>
                    <li>Phone: +1 (123) 456-7890</li>
                    <li>Address: 123 Main Street, City, State 12345</li>
                </ul>
            </div>
        </div>  
    )
}

export default Contact