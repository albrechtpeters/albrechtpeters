import React from 'react'
import PropTypes from 'prop-types'
import GoogleAnalytics from 'react-ga'

const OutboundLink = ({ to, target, children, className }) => (
  <a
    href={to}
    target={target}
    className={className}
    rel="noopener"
    onClick={() => {
      GoogleAnalytics.event({
        category: `Outbound Link`,
        action: `[clicked]`,
        label: to,
      })
    }}
  >
    {children}
  </a>
)

OutboundLink.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
}

OutboundLink.defaultProps = {
  target: ``,
  className: ``,
}

export default OutboundLink
