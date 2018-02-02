import React, {Component} from "react";
import "./hello.css";
import helloJson from "./hello.json";

class Hello extends Component {
  render () {
    return (
      <div>
        <div className="hello">{helloJson.txt}</div>
        <h1>你好 世界</h1>
      </div>
    );
  }
}

export default Hello;