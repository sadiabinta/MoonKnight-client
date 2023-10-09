import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart, FaShopware, FaWallet } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {/* {role === 'admin' && ( */}
          <>
            <li>
              <Link to="/dashboard/home"><FaHome></FaHome>Admin Home</Link>
            </li>
            <li>
              <Link to="/dashboard/manageclasses">Manage Classes</Link>
            </li>
            <li>
              <Link to="/dashboard/manageusers">Manage Users</Link>
            </li>
          </>
          {/* )} */}
          {/* {role === 'instructor' && ( */}
          <>
            <li>
              <Link to="/dashboard/home"><FaHome></FaHome>Instructor Home</Link>
            </li>
            <li>
              <Link to="/dashboard/addclass">Add a Class</Link>
            </li>
            <li>
              <Link to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart>My Cart</Link>
            </li>
          </>
          {/* )} */}
          {/* {role === 'student' && ( */}
          <>
            <li>
              <Link to="/"><FaHome></FaHome>User Home</Link>
            </li>
            <li>
              <Link to="/dashboard/selectedclass">My Selected Classes</Link>
            </li>
            <li>
              <Link to="/dashboard/enrolledclasses">My Enrolled Classes</Link>
            </li>
            <li>
              <Link to="/dashboard/paymenthistory"><FaWallet></FaWallet>Payment History</Link>
            </li>
          </>
          {/* )} */}
          <div className="divider"></div>
          <li>
            <Link to="/"><FaHome></FaHome>Home</Link>
          </li>
          <li>
            <Link to="/shop"><FaShopware></FaShopware>Shop</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
