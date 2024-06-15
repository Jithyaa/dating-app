import React from 'react'
import SideBar from '../components/layout/SideBar'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const Dashboard = () => {
    const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];
    return (
        <div>
            <SideBar />

            <main className="bg-gray-900 text-gray-400 font-sans h-screen p-6 ml-64"> {/* Add ml-64 to apply margin */}
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-white text-2xl">DASHBOARD</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-blue-600 p-6 rounded-lg shadow-lg text-white">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg">TOTAL USERS</h3>
                            <BsFillArchiveFill className="text-2xl" />
                        </div>
                        <h1 className="text-4xl">300</h1>
                    </div>
                    <div className="bg-orange-600 p-6 rounded-lg shadow-lg text-white">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg">CATEGORIES</h3>
                            <BsFillGrid3X3GapFill className="text-2xl" />
                        </div>
                        <h1 className="text-4xl">12</h1>
                    </div>
                    <div className="bg-green-600 p-6 rounded-lg shadow-lg text-white">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg">PREMIUM USERS</h3>
                            <BsPeopleFill className="text-2xl" />
                        </div>
                        <h1 className="text-4xl">33</h1>
                    </div>
                    <div className="bg-red-600 p-6 rounded-lg shadow-lg text-white">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg">ALERTS</h3>
                            <BsFillBellFill className="text-2xl" />
                        </div>
                        <h1 className="text-4xl">42</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" stroke="#ffffff" />
                                <YAxis stroke="#ffffff" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" stroke="#ffffff" />
                                <YAxis stroke="#ffffff" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </main>
           
        </div>
    )
}

export default Dashboard
