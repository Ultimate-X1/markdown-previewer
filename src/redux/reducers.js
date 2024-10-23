import { INPUT_TEXT } from "./actions";

const initialState = {
    input: `# Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Here's some inline code: \`<div></div>\`
  
  \`\`\`javascript
  // This is a multi-line code block:
  function exampleCode() {
    console.log("Hello, world!");
  }
  \`\`\`
  
  You can also make text **bold**... whoa!  
  Or _italic_.  
  Or... wait for it... **_both!_**  
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and  
  > This is a blockquote. Pretty neat, right?
  
  And if you want to get really crazy, even tables:
  
  | Month    | Savings |
  | -------- | ------- |
  | January  | $250    |
  | February | $80     |
  | March    | $420    |
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  
  **Bolded text** is important!
  `,
  };
  

const previewReducer = (state=initialState, action) => {
    switch (action.type) {
        case INPUT_TEXT:
            return{
             ...state,
             input: action.payload    
            };      
    
        default:
            return state;
    }
}

export default previewReducer;