import React from 'react'
import {Editor} from '@tinymce/tinymce-react'

export default function RTE() {
  return (
    <Editor 
    apiKey='8qpjwg6bcxaye5b7w0tgm0z91uaiuph21hqouf0t34402u84'
    initialValue='default value'
    init={
        {branding:false,
        height:500,
        menubar:true,
        plugins: [
            "image",
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
            "anchor",
        ],
        toolbar:
        "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
    }
    }/>
  )
}
