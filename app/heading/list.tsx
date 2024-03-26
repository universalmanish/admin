import { Datagrid, List, TextField } from "react-admin";

export const HeadingList = () => {
  return (
  <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="route" />
        <TextField source="imageSrc" />
      </Datagrid>
    </List>
  );
}