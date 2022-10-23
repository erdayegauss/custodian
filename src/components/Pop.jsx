import React, { useState } from 'react';
import { MdCenterFocusStrong, MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import avatar from '../data/avatar.jpg';
import { BLOCK_TAGS } from '@syncfusion/ej2-react-richtexteditor';


const Pop = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings, activeMenu, setActiveMenu } = useStateContext();
  const [age, setAge] = React.useState('');



  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }





  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
      <div className='modal' style={{ zIndex: '1000', maxWidth: 500, position: "absolute", right: "-20%" }}>


        <div onClick={toggleModal} className="overlay"> </div>

        <div className="modal-content">
          <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
            onClick={toggleModal}
          />
        </div>
        <div >
          <img
            className="rounded-full h-24 w-24"
            src={avatar}
            alt="user-profile"
          />
          <div>
            <p className="font-semibold text-xl dark:text-gray-200"> Shuan </p>
            <p className="text-gray-500 text-sm dark:text-gray-400">  Customer   </p>
            <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> zhaoshuan01@jsfund.cn </p>
          </div>
        </div>
        <div>
          {userProfileData.map((item, index) => (
            <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className=" text-xl rounded-lg p-3 hover:bg-light-gray"
              >
                {item.icon}
              </button>

              <div>
                <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
                <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Logout"
            borderRadius="10px"
            width="full"
            onClick={toggleModal}
          />
        </div>
      </div>
      )}
    </>
  );
};

export default Pop;
