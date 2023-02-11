import { marked } from 'marked';
import './Previewer.css'

function Previewer({text}){
    marked.setOptions({
        breaks: true
    });
    
    return (
        <div className='previewWrap'>
            <div className="toolbar">Previewer</div>
            <div id="preview" 
                dangerouslySetInnerHTML={{ __html: marked(text),}}>

            </div>
      </div>
    )
}

export default Previewer;