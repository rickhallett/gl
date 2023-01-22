import React from "react";
import { getAllPages, UserData, usersApi } from "./api";
import { User } from "./usersData";

import "./table.css";

const noop = () => {};

export function Table() {
  const [pageData, setPageData] = React.useState<any>();
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getPage(0);
    setCurrentPage(0);
  }, []);

  const getPage = (pageNum: number) => {
    setIsLoading(true);

    usersApi(pageNum).then((data) => {
      setIsLoading(false);
      setPageData(data);
    });
  };

  const firstPage = () => {
    setCurrentPage(0);
    getPage(0);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => --prevPage);
    getPage(currentPage);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => ++prevPage);
    getPage(currentPage);
  };

  const lastPage = () => {
    const numberOfPages = Object.entries(getAllPages()).length;
    setCurrentPage(numberOfPages - 1);
    getPage(numberOfPages - 1);
  };

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Title</td>
              <td>Completed</td>
            </tr>
          </thead>
          <tbody>
            {pageData?.users.map(({ title, id, completed }: User) => (
              <tr key={title}>
                <td className="table-id">{id}</td>
                <td>{title}</td>
                <td>
                  <input
                    type={"checkbox"}
                    checked={completed}
                    onChange={noop}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={"pagination-buttons"}>
        <button disabled={isLoading} onClick={firstPage}>
          First
        </button>
        <button disabled={isLoading || currentPage === 0} onClick={prevPage}>
          {"<"}
        </button>
        <div className="pagination-buttons__number">{currentPage}</div>
        <button
          disabled={
            isLoading ||
            currentPage === Object.entries(getAllPages()).length - 1
          }
          onClick={nextPage}
        >
          {">"}
        </button>
        <button disabled={isLoading} onClick={lastPage}>
          Last
        </button>
      </div>
    </>
  );
}
