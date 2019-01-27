import React from 'react'
import PropTypes from 'prop-types'
import GoogleAnalytics from 'react-ga'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ to, children, className }) => (
  <GatsbyLink
    to={to}
    style={{ color: 'red' }}
    className={className}
    onClick={() => {
      GoogleAnalytics.event({
        category: `Link`,
        action: `[clicked]`,
        label: to,
      })
    }}
  >
    {children}
  </GatsbyLink>
)

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
}

Link.defaultProps = {
  className: ``,
}

export default Link
