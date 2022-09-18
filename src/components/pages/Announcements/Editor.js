import React from 'react';
import { DefaultEditor } from 'react-simple-wysiwyg';

function Editor() {
  const [html, setHtml] = React.useState('');
  
  function onChange(e) {
    setHtml(e.target.value);
  }

  return (
    <DefaultEditor value={html} onChange={onChange} />
  );
}

export default Editor;