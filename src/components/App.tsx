import * as React from "react";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface IProps {
}

export default class App extends React.Component<IProps, undefined> {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p>Foo to the barz</p>
                <img src={reactLogo} height="480"/>
            </div>
        );
    }
}
