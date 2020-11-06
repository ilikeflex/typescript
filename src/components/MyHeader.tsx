import React from 'react';

interface myInterface{
    name: String;
    age: Number;
}

const MyHeader: React.FunctionComponent<myInterface> = (props: myInterface) => (
<h1>Hola, Name {props.name}! Age {props.age}</h1>
);

export default MyHeader;