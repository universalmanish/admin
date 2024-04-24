import { SimpleForm, Create, TextInput, required } from "react-admin";

export const BranchCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput 
          source="title" 
          validate={[required()]} 
          label="Subject Name"
        />
        <TextInput 
          source="route" 
          validate={[required()]} 
          label="Route"
        />
        <TextInput 
          source="image_url" 
          validate={[required()]} 
          label="Image Url"
        />
        <TextInput 
          source="subject_id" 
          validate={[required()]} 
          label="Subject Id"
        />
      </SimpleForm>
    </Create>
  );
};