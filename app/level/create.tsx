import { SimpleForm, Create, TextInput, required } from "react-admin";

export const LevelCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput 
          source="title" 
          validate={[required()]} 
          label="Level Number"
        />
        <TextInput 
          source="route" 
          validate={[required()]} 
          label="Route"
        />
        <TextInput 
          source="branchId" 
          validate={[required()]} 
          label="Branch Id"
        />
      </SimpleForm>
    </Create>
  );
};