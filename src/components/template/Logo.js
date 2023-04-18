import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { APP_NAME } from 'constants/app.constant'
import { MODE_LIGHT } from 'constants/theme.constant'

const LOGO_SRC_PATH = '/img/logo/'

const Logo = (props) => {
    const { type, mode, gutter, className, imgClass, style, logoWidth } = props

    return (
        <div
            className={classNames('logo', className, gutter)}
            style={{
                ...style,
                ...{ width: logoWidth },
            }}
        >
            <img
                className={imgClass}
                src={`${LOGO_SRC_PATH}logo-${mode}-${type}.png`}
                alt={`${APP_NAME} logo`}
            />
        </div>
    )
}

Logo.defaultProps = {
    mode: MODE_LIGHT,
    type: 'full',
    logoWidth: '250',
}

Logo.propTypes = {
    mode: PropTypes.oneOf(['light', 'dark']),
    type: PropTypes.oneOf(['full', 'streamline']),
    gutter: PropTypes.string,
    imgClass: PropTypes.string,
    logoWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Logo
