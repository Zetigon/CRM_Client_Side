import React from 'react'
import {
    HiOutlineColorSwatch,
    HiOutlineDesktopComputer,
    HiOutlineTemplate,
    HiOutlineViewGridAdd,
    HiOutlineHome,
    HiViewGrid,
    HiOutlineChartSquareBar,
    HiOutlineUserGroup,
    HiOutlineCog,
    HiOutlineBookOpen,
    HiOutlineUsers,
    HiOutlineCurrencyDollar,
    HiOutlineMail,
    HiOutlineDocumentText,
    HiOutlineUserCircle

} from 'react-icons/hi'

const navigationIcon = {
    home: <HiOutlineHome />,
    singleMenu: <HiOutlineViewGridAdd />,
    collapseMenu: <HiOutlineTemplate />,
    groupSingleMenu: <HiOutlineDesktopComputer />,
    groupCollapseMenu: <HiOutlineColorSwatch />,
    dashboard:<HiViewGrid/>,
    projects:<HiOutlineChartSquareBar/>,
    userCrm:<HiOutlineUserGroup/>,
    settingIcon: <HiOutlineCog/>,
    knowledge:<HiOutlineBookOpen/>,
    peopleIcon:<HiOutlineUsers/>,
    paymentIcon: <HiOutlineCurrencyDollar/>,
    marketingIcon: <HiOutlineMail/>,
    reportIcon:<HiOutlineDocumentText/>,
    userProfileIcon: <HiOutlineUserCircle/>

}

export default navigationIcon
