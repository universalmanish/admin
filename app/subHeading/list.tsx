import { Datagrid, List, TextField } from "react-admin";

export const SubHeadingList = () => {
  return (
  <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="headingId" />
      </Datagrid>
    </List>
  );
}