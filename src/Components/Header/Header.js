import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <header className="header">
        <FontAwesomeIcon style={{ fontSize: "10rem" }} icon={faCoins} />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
};

export default Header;
