import React, { useContext, useEffect, useState } from "react";
import { Form as FinalForm, Field } from "react-final-form";
import TextInput from "../../app/common/form/TextInput";
import { RootStoreContext } from "../../app/stores/rootStore";
import { Form, Button } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import {
  ProfileFormValues,
  IProfileFormValues,
} from "../../app/models/profile";
import TextAreaInput from "../../app/common/form/TextAreaInput";
import { combineValidators, isRequired } from "revalidate";

const validate = combineValidators({
    displayName: isRequired("Display Name")
  });

const ProfileEditForm = () => {
  const rootStore = useContext(RootStoreContext);
  const { profile, updatingProfile, loadingProfile, editProfile } = rootStore.profileStore;
  const [formProfile, setFormProfile] = useState<IProfileFormValues | null>(
    null
  );
  
  const onFinalSubmit = (values: any) => {
    editProfile(values);
  };

  useEffect(() => {
    setFormProfile(new ProfileFormValues(profile!));
  }, [profile]);

  return (
    <FinalForm
      initialValues={formProfile}
      onSubmit={onFinalSubmit}
      validate={validate}
      render={({ handleSubmit, invalid, pristine }) => (
        <Form onSubmit={handleSubmit} loading={loadingProfile}>
          <Field
            name="displayName"
            placeholder="Name"
            value={formProfile?.displayName}
            component={TextInput}
          ></Field>
          <Field
            name="bio"
            placeholder="Bio"
            value={formProfile?.bio}
            component={TextAreaInput}
          ></Field>
          <Button
            loading={updatingProfile}
            disabled={loadingProfile || invalid || pristine}
            floated="right"
            positive
            type="submit"
            content="Submit"
          />
        </Form>
      )}
    ></FinalForm>
  );
};

export default observer(ProfileEditForm);
