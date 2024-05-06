import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallery({ items, openModal }) {
  return (
    <div>
      <ul className={css.list}>
        {Array.isArray(items) &&
          items.map((item) => (
            <li key={item.id}>
              <ImageCard imageItem={item} openImage={openModal} />
            </li>
          ))}
      </ul>
    </div>
  );
}
