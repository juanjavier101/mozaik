import React, { Component, PropTypes } from 'react'


const colorMapping = {
    success: ['success', 'passed', 'ok'],
    warning: ['warning'],
    failure: ['error', 'failed', 'ko'],
}

const getColorKey = status => {
    for (let c in colorMapping) {
        if (colorMapping[c].includes(status)) return c
    }

    return 'unknown'
}

class WidgetStatusChip extends Component {
    static propTypes = {
        size:   PropTypes.number,
        status: PropTypes.string.isRequired,
    }

    static defaultProps = {
        size: 12,
    }

    static contextTypes = {
        theme: PropTypes.object.isRequired,
    }

    render() {
        const { status, size, style: _style } = this.props
        const { theme } = this.context

        const colorKey = getColorKey(status)

        const style = {
            display:      'block',
            borderRadius: '50%',
            height:       size,
            width:        size,
            background:   theme.colors[colorKey],
            ..._style,
        }

        return <span style={style} />
    }
}


export default WidgetStatusChip
