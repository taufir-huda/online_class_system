"use client"
import { EditorComposer, Editor, ToolbarPlugin, InsertDropdown,AlignDropdown, TextColorPicker} from 'verbum';
import {$getSelection, SELECTION_CHANGE_COMMAND} from 'lexical';
import {$generateHtmlFromNodes} from '@lexical/html';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';

function MyCustomAutoFocusPlugin() {
    
    useEffect(() => {
        // Focus the editor when the effect fires!
        editor.focus();
    }, [editor]);
    
    return null;
}

const NoteViewer = () => {
    const [editor] = useLexicalComposerContext();
    const loadContent = () => {
        // 'empty' editor
        const value = '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}';
      
        return value;
    }
    const initialEditorState = loadContent();
  return (
    <EditorComposer>
      <Editor hashtagsEnables={true} onChange={(editor,l)=>{ 
        // var d;
        // editor.update(()=>{
        //     d=$getSelection();
        // })
        // const htmlString = $generateHtmlFromNodes(editor,d)
        console.log(editor,l)}} initialEditorState={initialEditorState}>
        <ToolbarPlugin defaultFontSize="20px">
          <InsertDropdown enablePool={true} />
          <AlignDropdown />
          <TextColorPicker />
        </ToolbarPlugin>
      </Editor>
    </EditorComposer>
  )
};

// Placeholder

export default NoteViewer;


// import {$getRoot, $getSelection} from 'lexical';
// import {useEffect} from 'react';

// import {LexicalComposer} from '@lexical/react/LexicalComposer';
// import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
// import {ContentEditable} from '@lexical/react/LexicalContentEditable';
// import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
// import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
// import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

// const theme = {
//   // Theme styling goes here
//   // ...
// }

// // When the editor changes, you can get notified via the
// // LexicalOnChangePlugin!
// function onChange(editorState) {
//   editorState.read(() => {
//     // Read the contents of the EditorState here.
//     const root = $getRoot();
//     const selection = $getSelection();

//     console.log(root, selection, "nihi hehre uh uieh");
//   });
// }


// // Catch any errors that occur during Lexical updates and log them
// // or throw them as needed. If you don't throw them, Lexical will
// // try to recover gracefully without losing user data.
// function onError(error) {
//   console.error(error);
// }

// export default function Editor() {
//   const initialConfig = {
//     namespace: 'MyEditor',
//     theme,
//     onError,
//   };

//   return (
//     <LexicalComposer initialConfig={initialConfig}>
//       <PlainTextPlugin
//         contentEditable={<ContentEditable />}
//         placeholder={<div>Enter some text...</div>}
//         ErrorBoundary={LexicalErrorBoundary}
//       />
//       <OnChangePlugin onChange={onChange} />
//       <HistoryPlugin />
//       <MyCustomAutoFocusPlugin />
//     </LexicalComposer>
//   );
// }