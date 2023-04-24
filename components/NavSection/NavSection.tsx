import React from "react";
import { useRouter } from "next/router";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";

export default function NavSection({ listSection }: any) {
  const router = useRouter();

  const renderListNavSection = (list: string[]) => {
    return list.map((section: string, index: number) => {
      return (
        <ListItem key={section} disablePadding>
          <ListItemButton href={section.toLowerCase()}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={section} />
          </ListItemButton>
        </ListItem>
      );
    });
  };

  return <>{renderListNavSection(listSection)}</>;
}
