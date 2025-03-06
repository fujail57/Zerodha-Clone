import React from "react";

const Orders = () => {
  return (
    <div className="pt-5">
      <div className="text-center mt-5">
        {/* <img width={"150px"} src="images/book.png" alt="book logo" /> */}
        <p style={{ fontSize: "7rem" }}>
          <i className="fa-solid fa-book-open"></i>
        </p>
        <p className="my-4">You haven't placed any order today</p>
        <button className="btn btn-primary">Get started</button>
      </div>
    </div>
  );
};

export default Orders;
