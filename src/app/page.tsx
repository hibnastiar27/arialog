
"use client";

import { Tabs, Tab } from "@heroui/react";

const page = () => {
    return (
        <div>
            <Tabs key="danger" aria-label="Tabs About Me" color="secondary" radius="full">
                <Tab key="resume" title="Resume" />
                <Tab key="educations" title="Educations" />
                <Tab key="experiences" title="Experiences" />
            </Tabs>
        </div>
    )
}

export default page