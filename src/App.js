import { useState } from 'react';
import './App.css';
import { marked } from 'marked';

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

  marked.setOptions({
    breaks: true
  })
  return (
    
    <div className="App">
      <div className='editorWrap'>
        <div className='toolbar'>Editor</div>
        <textarea id="editor" onChange={(event)=>{setText(event.target.value)}} value = {text}>
        </textarea>
      </div>

      <div className='previewWrap'>
        <toolbar className="toolbar">Previewer</toolbar>
        <div id="preview" 
            dangerouslySetInnerHTML={{ __html: marked(text),}}
        ></div>
      </div>
      
    </div>
  );
}

export default App;
