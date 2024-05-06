import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ nextPage }) {
  return (
    <button className={css.btn} onClick={nextPage}>
      Load more
    </button>
  );
}
