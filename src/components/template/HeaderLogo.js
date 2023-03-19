import React from 'react'
import Logo from 'components/template/Logo'
import { useSelector } from 'react-redux'

const HeaderLogo = () => {
    const mode = useSelector((state) => state.mode.useSelector)

    return <Logo mode={mode} className="show :block" />
}

export default HeaderLogo
