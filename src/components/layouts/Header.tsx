import { useState } from "react";
import { Link } from "react-router-dom";

interface Item {
  id: number;
  text: string;
  link: string;
}

const LayoutsHeader = () => {
  const [linkItems, setlinkItems] = useState<Item[]>([
    { id: 1, text: "خانه", link: "/" },
    { id: 2, text: "پست ها", link: "/posts" },
  ]);

  return (
    <div className="bg-gray-800 lg:py-4 py-2">
      <div className="lg:container px-4">
        <ul className="flex items-center -mx-2">
          {linkItems.map((link) => {
            return (
              <li key={link.id} className="font-bold text-white mx-2">
                <Link to={link.link}> {link.text} </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LayoutsHeader;
