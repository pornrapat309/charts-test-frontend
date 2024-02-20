import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Header() {
  return (
    <header className="flex gap-4 mt-3 ml-3">
      <Link to="/">
        <Button>Line Charts</Button>
      </Link>
      <Link to="/bar">
        <Button>Bar Charts</Button>
      </Link>
      <Link to="/pie">
        <Button>Pie Charts</Button>
      </Link>
    </header>
  );
}
