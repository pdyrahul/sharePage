// components/custom-editor.js
'use client' // only in App Router

import React from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';

const CustomEditor = ({data,setData}) => {
    const cloud = useCKEditorCloud( {
        version: '44.1.0',
        premium: true
    } );

    if ( cloud.status === 'error' ) {
        return <div>Error!</div>;
    }

    if ( cloud.status === 'loading' ) {
        return <div>Loading...</div>;
    }

    const {
        ClassicEditor,
        Essentials,
        Paragraph,
        Bold,
        Italic
    } = cloud.CKEditor;

    const { FormatPainter } = cloud.CKEditorPremiumFeatures;

    return (
        <CKEditor
            editor={ ClassicEditor }
            data={ data }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                setData(data);
            }}
            config={ {
                licenseKey: process.env.NEXT_PUBLIC_CKEDITOR_LICENSE_KEY,
                plugins: [ Essentials, Paragraph, Bold, Italic, FormatPainter ],
                toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter' ]
            } }
        />
    );
};

export default CustomEditor;
