import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

interface Iprops {
  onChangeContents: (value: string) => void
}

const ReactQuill = dynamic(async () =>await import("react-quill"), {
  ssr: false 
});

export default function WebEditor(props: Iprops) {

  return (
    <ReactQuill 
      style={{
        width: "996px",
        height: "480px",
        marginBottom: "60px",
      }}
      onChange={props.onChangeContents}
    />
  )
}