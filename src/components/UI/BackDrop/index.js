import React from 'react';
import Style from './styles.module.css';

const BackDrop = (props) => <div className={Style.BackDrop} onClick={props.onClick}></div>

export default BackDrop;
