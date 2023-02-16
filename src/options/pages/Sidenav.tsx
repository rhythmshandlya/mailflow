import React, { useState } from "react";
//react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { SiApacheairflow } from "react-icons/si";
import { GiAbstract050 } from "react-icons/gi";
import "./sidebar.css";

//sidebar css from react-pro-sidebar module
import "react-pro-sidebar/dist/css/styles.css";
import Logo from "../../common/Logo";

type Props = {
  setComponent: Function;
};

function Sidenav({ setComponent }: Props) {
  //menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  const handleComponentChange = (e) => {
    setComponent(e);
  };
  //custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  /*
   *      <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
   */
  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* Icon change using menucollapse state */}
              <Logo height="30px" width="30px" />
              {!menuCollapse ? (
                <h1 className="icon_name">&nbsp; Mailflow</h1>
              ) : (
                <></>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                active={true}
                icon={<FiHome />}
                onClick={() => {
                  handleComponentChange("General");
                }}
              >
                General
              </MenuItem>
              <MenuItem
                icon={<FaList />}
                onClick={() => {
                  handleComponentChange("API");
                }}
              >
                API
              </MenuItem>
              <MenuItem
                icon={<FaRegHeart />}
                onClick={() => {
                  handleComponentChange("FAQ");
                }}
              >
                FAQ
              </MenuItem>
              <MenuItem
                icon={<BiCog />}
                onClick={() => {
                  handleComponentChange("Settings");
                }}
              >
                Settings
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
}
export default Sidenav;
