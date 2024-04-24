import { SimpleForm, Create, TextInput, required } from "react-admin";

export const SubHeadingCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput 
          source="title" 
          validate={[required()]} 
          label="Sub Heading"
        />
        <TextInput 
          source="headingId" 
          validate={[required()]} 
          label="Heading Id"
        />  
      </SimpleForm>
    </Create>
  );
};