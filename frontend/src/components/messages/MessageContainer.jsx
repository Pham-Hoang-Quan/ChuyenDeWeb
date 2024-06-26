import React, { useState, useEffect } from 'react';
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { PiPhoneCall } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { BsCameraVideo } from "react-icons/bs";
import { useAuthContext } from "../../context/AuthContext";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { Col, Row } from 'antd';
import { useResponsiveContext } from '../../context/ResponsiveContext';


const MessageContainer = ({ onBackClick }) => {
   const { selectedConversation, setSelectedConversation } = useConversation();
   const [showArrow, setShowArrow] = useState(window.innerWidth <= 400);
   const { showSidebar, setShowSidebar } = useResponsiveContext();


   useEffect(() => {
       return () => setSelectedConversation(null);
   }, [setSelectedConversation]);


   useEffect(() => {
       const handleResize = () => {
           setShowArrow(window.innerWidth <= 400);
       };
       window.addEventListener('resize', handleResize);




       return () => {
           window.removeEventListener('resize', handleResize);
       };
   }, []);




   return (
       <Row style={{ height: '100vh' }}>
           {!selectedConversation && (
               <Col
                   style={{
                       backgroundImage: `url(./welcome.png)`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',
                       // backgroundColor: '#f2f8ca',
                   }}
                   span={24} > </Col>
           )}
           {selectedConversation && (
               <>
                   {/* Header */}
                   <Col span={24}>
                       <Row className='flex items-center justify-between' style={{ background: '#F7F8FC', padding: '10px' }}>
                           <Col className="flex items-center justify-between">
                               <IoIosArrowBack onClick={() => { setShowSidebar(!showSidebar); console.log(showSidebar) }} className="w-6 h-6 outline-none mr-2" />
                               <img src={selectedConversation.img} alt="Profile" className="w-8 h-8 mr-2 rounded-full" />
                               <span className='text-gray-900 font-bold'>{selectedConversation.name}</span>
                           </Col>
                           <Col className="flex items-center">
                               <BsCameraVideo className={showArrow ? "w-4 h-4 outline-none mr-5" : "w-6 h-6 outline-none mr-5"} />
                               <PiPhoneCall className={showArrow ? "w-4 h-4 outline-none mr-5" : "w-6 h-6 outline-none mr-5"} />
                               <IoIosSearch className={showArrow ? "w-4 h-4 outline-none" : "w-6 h-6 outline-none"} />
                               <div className='divider' style={{ borderLeft: '1px solid #DEE1E6', height: 15, marginLeft: '20px' }}></div> {/* Đường line dọc */}
                               <TbLayoutSidebarLeftCollapse className={showArrow ? "w-4 h-4 outline-none ml-5" : "w-6 h-6 outline-none ml-5"} />
                           </Col>
                       </Row>
                       <Row>
                           <Messages />
                       </Row>
                       <Row>
                           <MessageInput />
                       </Row>
                   </Col>
               </>
           )}
       </Row>


       // <div className='flex flex-col' >
       // {selectedConversation && (
       //     <>
       //         {/* Header */}
       //         <div className='bg-slate-500 px-4 h-16 py-2 mb-2 flex items-center justify-between' style={{ background: '#F7F8FC',}}>
       //             <div className="flex items-center justify-between">
       //                 {showArrow &&
       //                     <IoIosArrowBack onClick={onBackClick} className="w-6 h-6 outline-none mr-2" />
       //                 }
       //                 <img src={selectedConversation.img} alt="Profile" className="w-8 h-8 mr-2 rounded-full" />
       //                 <span className='text-gray-900 font-bold'>{selectedConversation.name}</span>
       //             </div>
       //             <div className="flex items-center">
       //                 <BsCameraVideo className={showArrow ? "w-4 h-4 outline-none mr-5" : "w-6 h-6 outline-none mr-5"} />
       //                 <PiPhoneCall className={showArrow ? "w-4 h-4 outline-none mr-5" : "w-6 h-6 outline-none mr-5"} />
       //                 <IoIosSearch className={showArrow ? "w-4 h-4 outline-none" : "w-6 h-6 outline-none"} />
       //                 <div className='divider' style={{ borderLeft: '1px solid #DEE1E6', height: 15, marginLeft: '20px' }}></div> {/* Đường line dọc */}
       //                 <TbLayoutSidebarLeftCollapse className={showArrow ? "w-4 h-4 outline-none ml-5" : "w-6 h-6 outline-none ml-5"} />
       //             </div>
       //         </div>
       //         <Messages />
       //         <MessageInput />
       //     </>
       // )}
       // </div>
   );
};
export default MessageContainer;

















