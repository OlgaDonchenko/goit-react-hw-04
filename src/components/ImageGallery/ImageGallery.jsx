import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, openModal }) {
  return (
    <div>
      <ul className={css.list}>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <ImageCard imageItem={item} openImage={openModal} />
            </li>
          ))}
      </ul>
    </div>
  );
}
