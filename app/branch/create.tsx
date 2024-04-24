import { SimpleForm, Create, TextInput, required } from "react-admin";

export const BranchCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput 
          source="title" 
          validate={[required()]} 
          label="Branch Name"
        />
        <TextInput 
          source="route" 
          validate={[required()]} 
          label="Route"
        />
        <TextInput 
          source="imageUrl" 
          label="Image Url"
        />
        <TextInput 
          source="subjectId" 
          validate={[required()]} 
          label="Subject Id"
        />
      </SimpleForm>
    </Create>
  );
};