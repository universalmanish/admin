import { SimpleForm, Edit, TextInput, required } from "react-admin";

export const LevelEdit = () => {
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
    </Edit>
  );
};