/* eslint-disable react/prop-types */

import SideBarLayout from "./SideBarLayout";

function MainLayout({ children }) {
  return (
      <div className="container flex flex-row ">
          <SideBarLayout />
          {children}
    </div>
  )
}

export default MainLayout;