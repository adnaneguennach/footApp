import React, {useState} from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import userIcon from './assets/usericon.png'

const Navbar = ()=>{
    const [toggleSidebar, setSideBar]= useState(false)

    return(
        <>
        <div className="flex items-center justify-between w-[70vw]">
            <div className="left_sideicon">
                <i className={`bi bi-layout-sidebar-inset${toggleSidebar ? "-reverse" : ''} text-[22px] hover:cursor-pointer`} onClick={(e)=>setSideBar(prev=>!prev)}></i>
            </div>
            <div className="rightside_nav flex items-center gap-[10px]">
                <div className="usercontainer_icon flex items-center gap-[15px]">
                    <img src={userIcon} alt="" className="userImage w-[40px] h-[40px] "  />
                    <div className="detailsUserContainer">
                        <div className="username font-semibold text-[17px]">
                            ROOT
                        </div>
                        <div className="statusUser text-[14px] text-gray-500">
                            Admin
                        </div>
                    </div>
                </div>
                <i className="bi bi-box-arrow-right text-[22px] ml-5 text-[#8B0000]"></i>
            </div>
        </div>
        </>
    )
}

export default Navbar