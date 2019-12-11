import React from 'react';

export default class Menu extends React.Component {

    render () {
        return (
            <div>
                <p>&#9776;</p>
                {this.props.components.map(imagens => {
                    return (
                        <p>{imagens}</p>
                    )
                })}
            </div>
        )
    }
}
