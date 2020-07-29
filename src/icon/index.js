import React from 'react'
import PropTypes from 'prop-types'
import Plus from './plus'
import ArrowLeft from './arrowLeft'
import Close from './close'
import ChevronDown from './chevron-down'
import Download from './download'
import Edit from './edit'
import Filter from './filter'
import More from './more'
import Refresh from './refresh'
import Save from './save'
import User from './user'
import Power from './power'
import Gear from './gear'

function Icon(props) {
  const icons = {
    'arrow-left': ArrowLeft,
    'close': Close,
    'chevron-down': ChevronDown,
    'download': Download,
    'edit': Edit,
    'filter': Filter,
    'more': More,
    'plus': Plus,
    'refresh': Refresh,
    'save': Save,
    'user': User,
    'power': Power,
    'gear': Gear,
  }

  const IconName = icons[props.icon]

  return (
    <IconName
      className={props.className}
      height={props.iconSize}
      width={props.iconSize}
    />
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf([
    'arrow-left',
    'close',
    'chevron-down',
    'download',
    'edit',
    'filter',
    'more',
    'plus',
    'refresh',
    'save',
    'user',
    'power',
    'gear',
  ]).isRequired,
  iconSize: PropTypes.number,
}

Icon.defaultProps = {
  iconSize: 24,
}

export default Icon
