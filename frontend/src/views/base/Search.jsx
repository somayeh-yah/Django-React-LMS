import React from "react";
import BaseHeader from "../partials/BaseHeader";
import BaseFooter from "../partials/BaseFooter";
import { Link } from "react-router-dom";

function Search() {
  return (
    <section className="w-full">
      <div className="mt-3 mb-20  mb-lg-8 text-sub h-full">
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control lg mt-3"
            placeholder="Search Courses..."
            name=""
            id=""
          />
        </div>
      </div>
    </section>
  );
}

export default Search;
