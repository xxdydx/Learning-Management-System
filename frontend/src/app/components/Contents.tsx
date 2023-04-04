import { Link, List, ListItem } from "@mui/material";
import { useState } from "react";
import { sampleCourse } from "../data/courseinfo";

/**
 * MenuInteractiveColumn :
 * @description
 */
const Contents = () => {
  const [selected, setSelected] = useState<string>("");
  const handleClick = (id: string) => {
    setSelected(id);
  };
  return (
    <div className="w-fit hidden md:flex md: ml-4 lg:ml-6">
      <List>
        {sampleCourse.chapters.map((value) => {
          return (
            <ListItem key={value.id}>
              <Link
                href={`#${value.title}`}
                underline="none"
                className={
                  selected === value.title
                    ? "text-white font-bold"
                    : "dark:text-slate-400 text-slate-700"
                }
                onClick={() => handleClick(value.title)}
              >
                {value.title}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Contents;
