import React, { Component } from 'react';
import Style from './styles.module.css';

import BackDrop from '../../UI/BackDrop';

const links = [1, 2, 3];

export default class Drawer extends Component {
  renderLinks() {
    return links.map((link, item) => {
      return (
        <li key={item}>
          <a>Link {link}</a>
        </li>
      )
    })
  }
  render() {
    const  cls = [
      Style.Drawer,
      !this.props.isOpen ? `${Style.close}` : ''
    ];
    
    return (
      <>
        <nav className={cls.join(' ')}>
          <ul>
            { this.renderLinks() }
          </ul>
        </nav>
        { this.props.isOpen ? <BackDrop onClick={this.props.onClose} /> : null }
      </>
    )
  }
}
