import React from "react";
import {Editor} from 'tinymce'
import { Controller } from "react-hook-form";

export default function RTE({ name = "content", control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label htmlFor={name} className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <>
            <Editor
              initialValue={defaultValue}
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'help', 'wordcount'
                ],
                toolbar:
                  'undo redo | blocks | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
              }}
              onEditorChange={onChange}
            />
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
}
