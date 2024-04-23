"use client"
import { BranchList } from "@/app/branch/list";
import { HeadingList } from "@/app/heading/list";
import { LevelList } from "@/app/level/list";
import { SubHeadingList } from "@/app/subheading/list";

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
                recordRepresentation="title"
            />
            <Resource
                name="level"
                list={LevelList}
                recordRepresentation="title"
            />
            <Resource
                name="heading"
                list={HeadingList}
                recordRepresentation="title"
            />
            <Resource
                name="subheading"
                list={SubHeadingList}
                recordRepresentation="title"
            />
        </Admin>
    )
}

export default App