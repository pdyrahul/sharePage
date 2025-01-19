'use client';

import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import JoditEditor
const JoditEditor = dynamic(() => import('jodit-react'), {
    ssr: false
});

const Editor = ({ data, setData }) => {
    
    const editor = useRef(null);
    const contentRef = useRef(data); // Ref to hold the editor's content

    // Update the ref value when `data` changes externally
    useEffect(() => {
        contentRef.current = data;
    }, [data]);

    const handleBlur = (newContent) => {
        // Update the state only when the editor loses focus (blur event)
        setData(newContent);
        contentRef.current = newContent;
    };

    return (
        <div style={{ width: '100%' }}>
            <JoditEditor
                ref={editor}
                value={contentRef.current}
                onBlur={handleBlur} // Use onBlur for state update
                config={{
                    readonly: false,
                    height: 150,
                    toolbarSticky: false,
                    buttons: [
                        'undo', 'redo', '|',
                        'bold', 'italic', '|',
                     
                    ],
                    placeholder: 'Start typing here...',
                }}
            />
        </div>
    );
};

export default Editor;