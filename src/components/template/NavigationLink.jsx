import { Link } from "react-router-dom";

import "../feature/Navigation.css";

export const NavigationLink = ({
  icon,
  to,
  pageNr,
  page,
  currentPage,
  setCurrentPage,
}) => {
  const handleCurrentPage = (_currentPageNumber) => {
    setCurrentPage(_currentPageNumber);
  };

  return (
    <li>
      <div className="navigation-content">
        <Link to={to} onClick={() => handleCurrentPage(pageNr)}>
          {icon}
          <p className={currentPage === pageNr ? "current-page" : null}>
            {page}
          </p>
        </Link>
      </div>{" "}
    </li>
  );
};
