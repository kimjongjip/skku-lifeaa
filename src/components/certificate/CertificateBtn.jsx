import { useRef, useState, useEffect } from "react";
export default function CertificateBtn() {
  const [upload, setUpload] = useState(false);
  const formData = new FormData();

  const onUploadImage = (e) => {
    if (!e.target.files) {
      return;
    }

    formData.append("image", e.target.files[0]);
    setUpload(true);
    console.log(formData.has("image"));

    // axios 전송
    //   axios({
    //     method: 'POST',
    //     data: formData,
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //     .then(response => {
    //       console.log(response.data);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }, []);
  };

  const handleUpload = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  };

  const handleDelete = () => {
    formData.delete("image");
    console.log(formData.getAll);
    setUpload(false);
    console.log(formData.has("image"));
  };
  const inputRef = useRef();
  return (
    <div style={{ width: "100%" }}>
      {upload === false ? (
        <div>
          {" "}
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            ref={inputRef}
            onChange={onUploadImage}
          />
          <button
            style={{
              backgroundColor: "#F2F2F2",
              width: "100%",
              height: "15vh",
              borderRadius: "20px",
            }}
            onClick={handleUpload}
          >
            + 인증하기
          </button>
        </div>
      ) : (
        <button
          style={{
            backgroundColor: "#919191",
            width: "100%",
            height: "15vh",
            borderRadius: "20px",
          }}
          onClick={handleDelete}
        >
          다시 업로드 하기
        </button>
      )}
    </div>
  );
}
