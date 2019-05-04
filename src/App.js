import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

const initialSource = `
# header

## subHeader
[GitHub](http://github.com)
\`inline code\`
\`\`\`js 
  let this = 'this'
\`\`\`
+ list item
> a blockquote Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus nesciunt commodi, qui dolor dolores exercitationem nam, placeat voluptas nihil, modi sunt quaerat odit? Voluptatibus ipsam quis quidem corrupti esse.
![alt text](https://images.unsplash.com/photo-1548273515-edba62b2b398?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80 "dark wilderness")

__bold Text__
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: initialSource
    };
    this.textChangeHanlder = this.textChangeHanlder.bind(this);
  }

  textChangeHanlder = event => {
    this.setState({ preview: event.target.value });
  };
  render() {
    return (
      <div className="bg-primary flex flex-row items-center vh-100">
        <textarea
          className="br2 bg-primary-dark white mh2 h-75 w-50 bn resize-none no-outline"
          placeholder={initialSource}
          onChange={this.textChangeHanlder.bind(this)}
          name=""
          id="editor"
        />
        <div
          className="previewer br2 flex flex-column items-start h-75 pa3 justify-around bg-primary-dark white mh2 w-50 overflow-auto"
          id="preview"
        >
          <ReactMarkdown
            className="w-100"
            linkTarget="blank"
            source={this.state.preview}
          />
        </div>
      </div>
    );
  }
}

export default App;
