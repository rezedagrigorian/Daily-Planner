import React, { Component } from 'react';
import { SearchIcon, BellIcon } from '@primer/octicons-react';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container col-md-12">
        <nav className="row navbar navbar-expand-sm navbar-light mb-4 p-0 row d-flex justify-content-between">
          <form className="col-8 col-sm-8 col-md-6 p-0">
            <div className="col-10 col-sm-6 col-md-6 d-flex wrpstyle">
              <input className="form-control rounded inptstyle" type="search" placeholder="Search" />
              <button className="btn rounded-right btnstyle shadow-none" type="submit">
                <SearchIcon size={16} />
              </button>
            </div>
          </form>
          <div className="nav px-3">
            <a className="nav-link p-2" href="/#">
              <BellIcon size={20} />
            </a>
            <div className="user-photo nav-link ml-3" />
          </div>
        </nav>
      </div>
    );
  }
}
