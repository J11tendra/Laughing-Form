import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import AppContext from "../context/AppData";

const Navbar = () => {
  const { handleNavbarClick, pageData } = useContext(AppContext);
  const circles = () => {
    return pageData.map((object) => {
      return (
        <div
          className="step flex flex-js-al-cnt"
          key={object.id}
          onClick={() => handleNavbarClick(object.id)}
        >
          <span
            className={`circle flex flex-js-al-cnt ${
              object.isActive && "active"
            }`}
          >
            {object.id}
          </span>
          {useMediaQuery({ minWidth: 640 }) && (
            <h4 className="step-desc">
              {object.title}
              <span>{object.description}</span>
            </h4>
          )}
        </div>
      );
    });
  };
  return (
    <div className="form-nav flex flex-js-al-cnt">
      <div className="nav-status flex">{circles()}</div>
    </div>
  );
};

export default Navbar;
