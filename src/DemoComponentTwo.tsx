import * as React from 'react';

export class DemoComponentTwo extends React.Component {

    public render() {
        return (
            <div style={style}>
                This is demo component TWO.
            </div>
        )
    }
}

const style = {
    backgroundColor: '#656555',
    color: '#fff',
    height: '200px',
    width: '200px',
};
