import { SimpleForm, Create, TextInput, required } from "react-admin";

export const HeadingCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput 
          source="title" 
          validate={[required()]} 
          label="Heading"
        />
        <TextInput 
          source="levelId" 
          validate={[required()]} 
          label="Level Id"
        />  
      </SimpleForm>
    </Create>
  );
};