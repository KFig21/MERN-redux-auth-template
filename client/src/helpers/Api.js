export const url = "http://localhost:3001/api";

// protect apis section - https://www.youtube.com/watch?v=aMFClmsA9Xw
export const setHeaders = () => {
  const header = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return header;
};
