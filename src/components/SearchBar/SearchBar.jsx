// import React from "react";
import { CiSearch } from "react-icons/ci";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";

import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, actions) => {
    const searchTerm = values.search.trim();
    if (!searchTerm) {
      toast.error("Please enter a search term!");
    } else {
      onSearch(searchTerm);
    }
    actions.resetForm();
  };

  return (
    <header className={css.headerContainer}>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form className={css.searchForm}>
          <Field
            className={css.searchInput}
            autoComplete="off"
            autoFocus
            type="text"
            name="search"
            placeholder="Search images and photos"
          />
          <button className={css.searchBtn} type="submit">
            <CiSearch />
          </button>
        </Form>
      </Formik>
    </header>
  );
}
