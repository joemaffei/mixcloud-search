import { number, func, bool } from "prop-types";
import React from "react";
import "./Header.scss";

export function Header({ count, onSubmit, searching }) {
  return (
    <header className="Header">
      <h1 className="Header-title">Mixcloud Search</h1>
      <form onSubmit={onSubmit}>
        <div className="Header-line">
          <div>
            <input className="Header-search" id="search" placeholder="search" />
            <button className="Header-submit" type="submit">
              {searching ? "searching..." : "search"}
            </button>
          </div>
          <div className="Header-count">
            {count ? `${count} mixes found.` : null}
          </div>
        </div>
      </form>
    </header>
  );
}

Header.propTypes = {
  count: number,
  onSubmit: func,
  searching: bool
};
