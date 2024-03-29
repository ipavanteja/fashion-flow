import "./directory.styles.scss";

// Components
import CategoryItem from "../category-item/category-item.component";

const CategoryMenu = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;
