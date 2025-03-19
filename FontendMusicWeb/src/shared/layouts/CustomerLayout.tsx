
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from 'react-router-dom'
import Sidebar from "../components/Sidebar";
import Player from "../../pages/customer/Player";

const CustomerLayout = () => {
    return (
        <div className="h-screen flex flex-col bg-black text-white">
            {/* Header cố định trên cùng */}
            <Header />

            {/* Nội dung chính với Sidebar */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar bên trái */}
                <Sidebar />

                {/* Nội dung chính */}
                <main className="flex-1 overflow-y-auto p-5">
                <Outlet />
                </main>
            </div>  
        </div>
    )
}

export default CustomerLayout;