import type { ChangeEvent } from "react";
import "./App.css";

function App() {
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const formData = new FormData();

      formData.append("csvFile", file);
      try {
        const response = await fetch("http://localhost:4000/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("CSV uploaded successfully");
        } else {
          console.error("Error uploading CSV:", response.statusText);
        }
      } catch (error) {
        console.error("Error uploading CSV:", error);
      }
    }
  };

  return (
    <>
      <input type="file" accept=".csv" onChange={handleFileChange} />
    </>
  );
}

export default App;
