import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}
const callback = action("accordion mode change event fired")
export const MenuCollapsedMode = () => <Accordion onChange={callback} collapsed={false}titleValue={"Menu"}/>;
export const UsersUnCollapsedMode = () => <Accordion onChange={callback} collapsed={true}titleValue={"Menu"}/>;

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion onChange={() => setCollapsed(!collapsed)} collapsed={collapsed} titleValue={"Menu"}/>
};

