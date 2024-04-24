import { SimpleForm, Edit, TextInput, required } from "react-admin";

export const HeadingEdit = () => {
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
          label="Create Heading"
        />
        <TextInput 
          source="levelId" 
          validate={[required()]} 
          label="Level Id"
        />
      </SimpleForm>
    </Edit>
  );
};