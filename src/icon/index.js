import React from 'react'
import PropTypes from 'prop-types'
import ArrowLeft from './_arrow-left'
import ChevronDown from './_chevron-down'
import ChevronLeft from './_chevron-left'
import ChevronRight from './_chevron-right'
import Close from './_close'
import Download from './_download'
import Edit from './_edit'
import Filter from './_filter'
import Gear from './_gear'
import MoreVertical from './_more-vertical'
import Plus from './_plus'
import Power from './_power'
import Refresh from './_refresh'
import Save from './_save'
import Trash from './_trash'
import User from './_user'

function Icon(props) {
  const icons = {
    'arrow-left': ArrowLeft,
    'chevron-down': ChevronDown,
    'chevron-left': ChevronLeft,
    'chevron-right': ChevronRight,
    'close': Close,
    'download': Download,
    'edit': Edit,
    'filter': Filter,
    'gear': Gear,
    'more-vertical': MoreVertical,
    'plus': Plus,
    'power': Power,
    'refresh': Refresh,
    'save': Save,
    'trash': Trash,
    'user': User,
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
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'close',
    'download',
    'edit',
    'filter',
    'gear',
    'more-vertical',
    'plus',
    'power',
    'refresh',
    'save',
    'trash',
    'user',
  ]).isRequired,
  iconSize: PropTypes.number,
}

Icon.defaultProps = {
  iconSize: 24,
}

export default Icon
