import { SimpleForm, Edit, TextInput, required } from "react-admin";

export const SubjectEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput 
          source="id" 
          validate={[required()]} 
          label="Id"
        />
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
          validate={[required()]} 
          label="Image Url"
        />
      </SimpleForm>
    </Edit>
  );
};