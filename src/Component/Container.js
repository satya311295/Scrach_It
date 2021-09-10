import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Container extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                Its a Container
            </div>
        )
    }
}
