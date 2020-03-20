import React from 'react'
import PropTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'

export const List = ({ children, ...rest }) => (
    <BaseContainer as='li' {...rest}>
        {children}
    </BaseContainer>
)

List.propTypes = {
    children: PropTypes.node.isRequired
}