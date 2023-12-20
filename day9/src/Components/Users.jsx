import React from 'react'

export default function Users() {
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>
                    username
                </th>
                <th>
                    password
                </th>
                <th>
                    Edit
                </th>
                <th>
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    VICKY
                </td>
                <td>
                    123
                </td>
                <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    
    </>
  )
}
