import React, { Component } from "react"
import { Link } from "gatsby"
import Logo from "../../assets/images/logo.svg"
import HamburgerMenu from "react-hamburger-menu"
import styles from "./header.module.scss"

class Header extends Component {
  constructor() {
    super()
    this.state = {
      open: [false, false, false, false],
    }
  }
  handleClick(id) {
    let { open } = this.state
    this.setState({
      open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)],
    })
  }
  render() {
    let menuClass = this.state.open[3] ? styles.toggleOpen : styles.toggleClosed
    return (
      <header>
        <div className={styles.headerGrid}>
          <div className={styles.logo}>
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <nav>
            <ul className={styles.navItems + " " + menuClass}>
              <li className={styles.navItem}>
                <Link
                  to="/"
                  onClick={this.handleClick.bind(this, 3)}
                  activeClassName={styles.activeNavItem}
                >
                  Home
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/projects"
                  onClick={this.handleClick.bind(this, 3)}
                  activeClassName={styles.activeNavItem}
                >
                  Projects
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/services"
                  onClick={this.handleClick.bind(this, 3)}
                  activeClassName={styles.activeNavItem}
                >
                  Services
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/about"
                  onClick={this.handleClick.bind(this, 3)}
                  activeClassName={styles.activeNavItem}
                >
                  About
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  to="/contact"
                  onClick={this.handleClick.bind(this, 3)}
                  activeClassName={styles.activeNavItem}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className={styles.mobileNav}>
              <HamburgerMenu
                isOpen={this.state.open[3]}
                menuClicked={this.handleClick.bind(this, 3)}
                width={22}
                height={16}
                strokeWidth={3}
                rotate={0}
                color="black"
                borderRadius={2}
                animationDuration={0.75}
              />
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
