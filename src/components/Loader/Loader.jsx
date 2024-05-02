import { Hearts } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader({ loading }) {
  return (
    <Hearts
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass={css.loading}
      visible={loading}
    />
  );
}
