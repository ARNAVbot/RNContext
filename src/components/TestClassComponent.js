import React from "react";
import {Text} from "react-native";

class TestClassComponent extends React.PureComponent<> {

    constructor(props) {
        super(props);
        console.log(`Props = ${JSON.stringify(props)}`)
    }

    render() {
        console.log(`rendering class component with data = ${JSON.stringify(this.props)}`);
        return (
            <Text>
                this is class component
            </Text>
        )
    }
}

export default TestClassComponent;