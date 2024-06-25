import React from 'react'
import SideBar from '../components/layout/SideBar'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'

const UserManagement = () => {

    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            profilePhoto: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            profilePhoto: 'https://via.placeholder.com/150'
        }
       
    ];

    function handleEdit(userId) {
        // Handle edit action
        console.log(`Edit user with id: ${userId}`);
    }

    function handleDelete(userId) {
        // Handle delete action
        console.log(`Delete user with id: ${userId}`);
    }
    return (
        <div>
        <SideBar />
        <div className="bg-gray-900 h-screen p-6 text-white ml-64">
            <h1 className="text-3xl mb-6">User Management</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800 rounded-lg">
                    <thead>
                        <tr className="w-full bg-gray-700 text-gray-200">
                            <th className="p-4 text-left">Name</th>
                            <th className="p-4 text-left">Email</th>
                            <th className="p-4 text-left">Profile Photo</th>
                            <th className="p-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b border-gray-700">
                                <td className="p-4">{user.name}</td>
                                <td className="p-4">{user.email}</td>
                                <td className="p-4">
                                    <img 
                                        src={user.profilePhoto} 
                                        alt="Profile" 
                                        className="w-10 h-10 rounded-full"
                                    />
                                </td>
                                <td className="p-4 flex space-x-2">
                                    <button 
                                        className="text-blue-500 hover:text-blue-700"
                                        onClick={() => handleEdit(user.id)}
                                    >
                                        <FaEdit />
                                    </button>
                                    <button 
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => handleDelete(user.id)}
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default UserManagement
