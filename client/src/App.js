import React, {useState} from 'react';

function App() {
  const [uploadFile, setUploadFile] = useState();

  const handleChangeFile = e => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    console.log(file.name);
    console.log(file.type);
    setUploadFile(file);
  };
  const handleClickButton = async () => {
    const res = await fetch("http://localhost:3001/api/url?filename=" + uploadFile.name + "&filetype=" + uploadFile.type);
    const json = await res.json();
    console.log(json.url);
    console.log(uploadFile.name);
    console.log(uploadFile.type);

    await fetch(json.url, { method: "PUT", body: uploadFile });
  };
  return (
    <div className="App">
      <p>test3</p>
      <br/>
      <input type="file" onChange={handleChangeFile} />
      <br/>
      <button onClick={handleClickButton}>upload</button>
    </div>
  );
}

export default App;
