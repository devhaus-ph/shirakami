import React from 'react'
import PropTypes from 'prop-types'

import Add from './add'
import Back from './back'
import Close from './close'
import Down from './down'
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
    add: Add,
    back: Back,
    close: Close,
    down: Down,
    download: Download,
    edit: Edit,
    filter: Filter,
    more: More,
    refresh: Refresh,
    save: Save,
    user: User,
    power: Power,
    gear: Gear,
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
  height: PropTypes.number,
  width: PropTypes.number,
  icon: PropTypes.oneOf([
    'add',
    'back',
    'close',
    'down',
    'download',
    'edit',
    'filter',
    'more',
    'refresh',
    'save',
    'user',
    'power',
    'gear',
  ]),
}

Icon.defaultProps = {
  iconSize: 24,
}

export default Icon
