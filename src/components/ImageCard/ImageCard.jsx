import css from "./ImageCard.module.css";

export default function ImageCard({ item, onImgClick }) {
  return (
    <img
      className={css.image}
      src={item.urls.small}
      alt={item.description}
      onClick={() =>
        onImgClick(item.urls.regular, item.urls.regular, item.description)
      }
    />
  );
}
