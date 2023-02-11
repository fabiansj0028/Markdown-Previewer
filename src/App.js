import { useState } from 'react';
import './App.css';
import Previewer from './Previewer';

function App() {
  const [text,setText] = useState(`
  # H1
  ## H2
  \`code\`
  [title](https://www.example.com)
  **bold text**
  > blockquote
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  - First item
  - Second item
  - Third item
  ![alt text](image.jpg)
  `);

  return (
    
    <div className="App">
      <div className='editorWrap'>
        <div className='toolbar'>Editor</div>
        <textarea id="editor" onChange={(event)=>{setText(event.target.value)}} value = {text}>
        </textarea>
      </div>

    <Previewer text={text} />
      
    </div>
  );
}

export default App;
