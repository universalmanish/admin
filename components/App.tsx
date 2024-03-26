import { SubjectList } from "@/app/subjects/list";
import simpleRestProvider from "ra-data-simple-rest";
import { Admin, Resource } from "react-admin";

const dataProvider = simpleRestProvider("/api");

const App = () => {

    return (
        <Admin dataProvider={dataProvider}>
            <Resource
                name="subjects"
                list={SubjectList}
                recordRepresentation="title"
            />
        </Admin>
    )
}

export default App