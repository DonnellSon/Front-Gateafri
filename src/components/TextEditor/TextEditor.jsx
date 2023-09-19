import React, { useEffect } from 'react';

import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

const TextEditor = ({onChange=()=>{},value=''}) => {
    const theme = 'snow';
    // const theme = 'bubble';
    
    const modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike','align', 'list', 'indent','size', 'header','link'],
      ]
    };
  
    const placeholder = 'Compose an epic...';
  
    const formats = [
        'bold', 'italic', 'underline', 'strike',
        'align', 'list', 'indent',
        'size', 'header',
        'link', 'image', 'video',
        'color', 'background',
        'clean',
      ];
  
    const { quill,quillRef } = useQuill({ theme, modules, formats, placeholder });


    useEffect(() => {
        if (quill) {
          quill.on('text-change', (delta, oldDelta, source) => {
            onChange({text:quill.getText(),html:quill.root.innerHTML})
          });
        }
      }, [quill]);
    


  return (
    <div style={{borderRadius:5}}>
      <div ref={quillRef} />
    </div>
  );
};
export default TextEditor