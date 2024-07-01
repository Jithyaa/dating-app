import React from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Header';

const ProfileListing = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen bg-gray-800'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-8">Location</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <a href="#" className="group block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                                        alt="Earthen Bottle"
                                        className="object-cover w-full h-full group-hover:opacity-75"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Earthen Bottle</h3>
                                    <p className="mt-2 text-sm text-gray-600">$48</p>
                                </div>
                            </a>
                            <a href="#" className="group block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                                        alt="Nomad Tumbler"
                                        className="object-cover w-full h-full group-hover:opacity-75"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Nomad Tumbler</h3>
                                    <p className="mt-2 text-sm text-gray-600">$35</p>
                                </div>
                            </a>
                            <a href="#" className="group block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                                        alt="Focus Paper Refill"
                                        className="object-cover w-full h-full group-hover:opacity-75"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Focus Paper Refill</h3>
                                    <p className="mt-2 text-sm text-gray-600">$89</p>
                                </div>
                            </a>
                            <a href="#" className="group block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                                        alt="Machined Mechanical Pencil"
                                        className="object-cover w-full h-full group-hover:opacity-75"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Machined Mechanical Pencil</h3>
                                    <p className="mt-2 text-sm text-gray-600">$35</p>
                                </div>
                            </a>
                        </div>
                    </section>
                    {/* Education Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <a href="#" className="group block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                                        alt="Earthen Bottle"
                                        className="object-cover w-full h-full group-hover:opacity-75"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Earthen Bottle</h3>
                                    <p className="mt-2 text-sm text-gray-600">$48</p>
                                </div>
                            </a>
                            <a href="#" className="group block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                                        alt="Nomad Tumbler"
                                        className="object-cover w-full h-full group-hover:opacity-75"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Nomad Tumbler</h3>
                                    <p className="mt-2 text-sm text-gray-600">$35</p>
                                </div>
                            </a>
                            <a href="#" className="group block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                                        alt="Focus Paper Refill"
                                        className="object-cover w-full h-full group-hover:opacity-75"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Focus Paper Refill</h3>
                                    <p className="mt-2 text-sm text-gray-600">$89</p>
                                </div>
                            </a>
                            <a href="#" className="group block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                                        alt="Machined Mechanical Pencil"
                                        className="object-cover w-full h-full group-hover:opacity-75"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Machined Mechanical Pencil</h3>
                                    <p className="mt-2 text-sm text-gray-600">$35</p>
                                </div>
                            </a>
                            {/* Add more education items here */}
                        </div>
                    </section>
                    {/* Qualification Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-8">Qualification</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <a href="#" className="group block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                                        alt="Earthen Bottle"
                                        className="object-cover w-full h-full group-hover:opacity-75"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Earthen Bottle</h3>
                                    <p className="mt-2 text-sm text-gray-600">$48</p>
                                </div>
                            </a>
                            <a href="#" className="group block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                                        alt="Nomad Tumbler"
                                        className="object-cover w-full h-full group-hover:opacity-75"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Nomad Tumbler</h3>
                                    <p className="mt-2 text-sm text-gray-600">$35</p>
                                </div>
                            </a>
                            <a href="#" className="group block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                                        alt="Focus Paper Refill"
                                        className="object-cover w-full h-full group-hover:opacity-75"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Focus Paper Refill</h3>
                                    <p className="mt-2 text-sm text-gray-600">$89</p>
                                </div>
                            </a>
                            <a href="#" className="group block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                                        alt="Machined Mechanical Pencil"
                                        className="object-cover w-full h-full group-hover:opacity-75"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Machined Mechanical Pencil</h3>
                                    <p className="mt-2 text-sm text-gray-600">$35</p>
                                </div>
                            </a>
                        </div>
                    </section>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProfileListing;
