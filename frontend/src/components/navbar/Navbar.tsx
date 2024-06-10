import { NavLink } from "react-router-dom";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-16 fixed left-0 top-0  z-[99999] bg-base-100 flex items-center px-10 justify-between">
      <h1 className="fira font-bold text-primary-content px-1 bg-primary">
        arkpage-tutor
      </h1>

      <div className="flex gap-5">
        <LinkItem title="Home" url="/" />
        <LinkItem title="Guides" url="/guide" />
      </div>
    </nav>
  );
};

const LinkItem: React.FC<{ title: string; url: string }> = ({ title, url }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "btn btn-primary btn-sm"
          : "btn btn-ghost btn-sm"
      }
    >
      {title}
    </NavLink>
  );
};
export default Navbar;
