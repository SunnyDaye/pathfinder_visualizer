import React, {Component} from "react";
import Node from "./node/Node";

import './Visualizer.css';

export default class Visualizer extends Component {
    constructor(props){
        super(props);
        this.state= {
            nodes: [],
        };
    }

    componentDidMount(){
        const nodes = [];
        for(let row = 0; row < 15; row++){
            const currentRow = [];

            for(let col = 0; col < 50; col++){
                currentRow.push([]);
            }

            nodes.push(currentRow);
        }

        this.setState({nodes});
    }

    render(){
        const {nodes} = this.state;

        console.log(nodes);

        return (
            <div className="grid">
                {
                    nodes.map((row,rowIndx) => {
                        return <div key={rowIndx}> 
                            {row.map((node, nodeIndx) => <Node key={nodeIndx}></Node>)}
                        </div>
                    })
                }
            </div>
        );
    }
}