"use client"

import { BranchCreate } from "@/app/branch/create";
import { BranchEdit } from "@/app/branch/edit";
import { BranchList } from "@/app/branch/list";
import { LevelCreate } from "@/app/level/create";
import { LevelEdit } from "@/app/level/edit";
import { LevelList } from "@/app/level/list";

import { SubjectCreate } from "@/app/subjects/create";
import { SubjectEdit } from "@/app/subjects/edit";
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
                create={SubjectCreate}
                edit={SubjectEdit}
                recordRepresentation="title"
            />
            <Resource
                name="branch"
                list={BranchList}
                create={BranchCreate}
                edit={BranchEdit}
                recordRepresentation="title"
            />
            <Resource
                name="levels"
                list={LevelList}
                create={LevelCreate}
                edit={LevelEdit}
                recordRepresentation="title"
            />
        </Admin>
    )
}

export default App