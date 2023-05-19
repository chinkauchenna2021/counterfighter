import { Sidebar, Menu, MenuItem, SubMenu , useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight , FaHome } from "react-icons/fa";

function SideBarLayout() {
    const { collapseSidebar,collapsed } = useProSidebar();
    return (
      <div className="hidden lg:flex h-screen w-fit fixed ">
        <Sidebar
          rootStyles={{
            backgroundColor: "#C9EEFF",
          }}
        >
          <div className="w-full border h-[70px] flex flex-col justify-center items-center">
            {!collapsed && (
              <div className="w-fit h-fit  text-center border-b text-[#62CDFF] text-2xl font-bold capitalize">
                counterfighter
              </div>
            )}
          </div>

          <Menu
            menuItemStyles={{
              backgroundColor: "black",
            }}
          >
            <SubMenu
              icon={<FaHome color="#62CDFF" size={20} />}       
              label="Home"
              className="h-full font--bold"
            >
              <MenuItem className="" component={<Link to="/" />}>
                <div className='text-sm font-semibold tracking-wide'>Verification</div>
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
        <main>
          <button
            onClick={() => collapseSidebar()}
            className="border w-14 flex justify-center h-8 items-center mt-2 rounded-md"
          >
            <FaArrowCircleRight size={20} color={"#62CDFF"} />
          </button>
        </main>
      </div>
    );
}

export default SideBarLayout