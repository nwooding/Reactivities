import React from "react";
import { Tab } from "semantic-ui-react";
import ProfilePhotos from "./ProfilePhotos";
import ProfileDescription from "./ProfileDescription";
import { IProfile } from "../../app/models/profile";


  const panes = [
  { menuItem: "About", render: () => <ProfileDescription /> },
  { menuItem: "Photos", render: () => <ProfilePhotos /> },
  {
    menuItem: "Activities",
    render: () => <Tab.Pane>Activity content</Tab.Pane>,
  },
  {
    menuItem: "Followers",
    render: () => <Tab.Pane>Follower content</Tab.Pane>,
  },
  {
    menuItem: "Following",
    render: () => <Tab.Pane>Following content</Tab.Pane>,
  },
];

export const ProfileContent = () => {


  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition={"right"}
      panes={panes}
     
    />
  );
};
