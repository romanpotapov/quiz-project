import React from 'react';
import Style from './Layout.module.css';

import { MenuToggle, Drawer } from '../../components/Navigation'

export default class Layout extends React.Component {

  state = {
    isMenuOpen: false
  }

  toggleMenuHandler = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  menuCloseHandler = () => {
    this.setState({
      isMenuOpen: false
    })
  }

  render() {
    return (
      <div className={Style.Layout}>
        <Drawer
          isOpen={this.state.isMenuOpen}
          onClose={this.menuCloseHandler}
        />
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.isMenuOpen}
        />
        <main>
          {this.props.children}
          </main>
        </div>
        )
      }
}
