import { Link } from "react-router-dom";

const Item = (props) => {
  const { page } = props;
  if (page === Item) {
    return <div id="page">{page}</div>;
  } else {
    return (
      <div id="page">
        <Link to="/">   
        </Link>
        <Link to="/dashboard"></Link>
        <Link to="/crm"></Link>

        <Link to="/accounts"></Link>
        <Link to="/contacts"></Link>
        <Link to="/notes"></Link>

        {page}
      </div>
    );
  }
};

export default Item;