import React from "react";
import { Button, Space } from 'antd';

const AndDesign = () =>{

    return(
        <>
         <Space wrap>
    <Button type="primary">Click Me!</Button>
    <Button>Click Me!</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
  
        </>
    )
}

export default AndDesign