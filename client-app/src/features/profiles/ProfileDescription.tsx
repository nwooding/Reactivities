import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Header, Tab, Grid, Button } from "semantic-ui-react";
import { RootStoreContext } from "../../app/stores/rootStore";
import ProfileEditForm from "./ProfileEditForm";
import LoadingComponent from "../../app/layout/LoadingComponent";

const ProfileDescription= () => {
  const rootStore = useContext(RootStoreContext);
  const { profile, updatingProfile, isCurrentUser } = rootStore.profileStore;
  const [editingProfile, setEditingProfile] = useState(false);

  if (!profile) {
      return <LoadingComponent content="Loading profile" />
  }
  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16}>
          <Header
            floated="left"
            icon="image"
            content={`About ${profile.displayName}`}
          />
          <Button
            floated="right"
            disabled={updatingProfile || ! isCurrentUser}
            content={!editingProfile ? "Edit Profile" : "Cancel"}
            onClick={() => setEditingProfile(!editingProfile)}
          />
        </Grid.Column>
        {!editingProfile ? (
          <Grid.Column width={16}>
            <p>{profile.bio}</p>
          </Grid.Column>
        ) : (
          <Grid.Column width={16}>
            < ProfileEditForm />
          </Grid.Column>
        )}
      </Grid>
    </Tab.Pane>
  );
};

export default observer(ProfileDescription);
