import { SimpleForm, Create, TextInput, required } from "react-admin";

export const SubjectCreate = () => {
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
          source="imageUrl" 
          // validate={[required()]} 
          label="Image Url"
        />
      </SimpleForm>
    </Create>
  );
};