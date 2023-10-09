import React from 'react';
import useJewelry from '../../hooks/useJewelry';

const AllJewelry = () => {
    const [jewelry,loading]=useJewelry();
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Category & Rating</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        jewelry.map((item)=>(
            <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
            </div>
          </div>
        </td>
        <td>
          {item.category}
          <br/>
          <span className="badge badge-ghost badge-sm">{item.rating}</span>
        </td>
        <td>$ {item.price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Edit</button>
        </th>
      </tr>
        ))
      }

    </tbody>
    
  </table>
</div>
    );
};

export default AllJewelry;