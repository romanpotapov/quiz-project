import { React } from 'react';
import Style from './styles.module.css';

const MenuToggle = (props) => {
  const cls = [
    Style.MenuToggle,
    'fa',
    props.isOpen ? `fa-times ${Style.open}` : 'fa-bars'
  ];

  return (
    <i
      className = {cls.join(' ')}
      onClick={props.onToggle}
    />
  )
}

export default MenuToggle;
