import * as React from 'react';

export class DemoComponentOne extends React.Component {

    public render() {
        return (
            <div style={style}>
                This is demo component one.
            </div>
        )
    }
}

const style = {
    backgroundColor: '#ccffcc',
    height: '200px',
    width: '200px',
};
