import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [edgeImage, setEdgeImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedKernel, setSelectedKernel] = useState('');
  const [selectedLowThreshold, setSelectedLowThreshold] = useState('');
  const [selectedHighThreshold, setSelectedHighThreshold] = useState('');

  // Hàm xử lý khi người dùng nhấp vào nút tải xuống
  const handleDownload = () => {
    if (edgeImage) {
      // Tạo một liên kết tạm thời để tải xuống ảnh
      const link = document.createElement('a');
      link.href = edgeImage;
      link.download = 'edge_image.jpg';
      link.click();
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setOriginalImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('selectedKernel', selectedKernel);
    formData.append('selectedLowThreshold', selectedLowThreshold);
    formData.append('selectedHighThreshold', selectedHighThreshold);
    setLoading(true); // Bắt đầu hiển thị loading
    axios.post('http://localhost:8000/edge-detection', formData, { responseType: 'blob' })
      .then(response => {
        const imageBlob = new Blob([response.data], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(imageBlob);
        setEdgeImage(imageUrl);
        setLoading(false); // Kết thúc hiển thị loading
      })
      .catch(error => {
        console.error(error);
        setLoading(false); // Kết thúc hiển thị loading
      });
  };

  return (
    <div>
      <div className='banner'>
        <h1>Canny Edge Detector</h1>
      </div>

      <div className='container'>
        <table className='options'>
          <td className='td-left'><h3>Options:</h3></td>

          <td className='td-right'>
            <tr>
              <td><p>Kernel size:</p></td>
              <td>
                <input
                  type="number"
                  value={selectedKernel}
                  onChange={event => setSelectedKernel(event.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td><p>Low threshold:</p></td>
              <td>
                <input
                  type="number"
                  value={selectedLowThreshold}
                  onChange={event => setSelectedLowThreshold(event.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td><p>High threshold:</p></td>
              <td>
                <input
                  type="number"
                  value={selectedHighThreshold}
                  onChange={event => setSelectedHighThreshold(event.target.value)}
                />
              </td>
            </tr>
          </td>

        </table>

      </div>

      <div className='container'>
        <table>
          <tr>
            <th><input className='custom-button' type="file" onChange={handleFileChange} /></th>
            <th><button className='custom-button' onClick={handleUpload}>Detect Edge</button></th>
          </tr>

          <tr>
            <td>
              {originalImage && (
                <div>

                  <div className='image-container'>
                    <img src={originalImage} alt="Original Image" />
                    <h2>Original Image</h2>
                  </div>
                </div>
              )}
            </td>

            <td>
              {loading ? (
                <div>
                  <div className='loading-spinner' />
                  <h3>Processing, please wait...</h3>
                </div>
              ) : (
                edgeImage && (
                  <div>
                    <div className='image-container'>
                      <img src={edgeImage} alt="Edge Image" />
                      <div>
                        <h2>Edge Image</h2>
                        <button className='custom-button' onClick={handleDownload}>Download</button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </td>
          </tr>
        </table>
      </div>

    </div >
  );
}

export default App;