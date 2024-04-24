import { SimpleForm, Edit, TextInput, required } from "react-admin";

export const SubHeadingEdit = () => {
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
          label="Create SubHeading"
        />
        <TextInput 
          source="headingId" 
          validate={[required()]} 
          label="Heading Id"
        />
      </SimpleForm>
    </Edit>
  );
};