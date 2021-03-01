import React from 'react';
import {  CodeSandboxOutlined } from "@ant-design/icons";




const Header = props => {

    return(
        <div className='quiz-header' >
                <CodeSandboxOutlined style={{ fontSize: '50px', color: '#08c' }}  />
                <div className='heading'> Hotel Friendly </div>
        </div>
    )

}

export default Header;