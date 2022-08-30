// import { useNavigate } from "react-router-dom";
import DirectoryItem from "../directory-item/directory-item.component";
import "./meniu.scss";

const Meniu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Meniu;
