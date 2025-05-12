import * as React from "react";
import { insertGif } from "../taskpane";

const App = (props) => {
  const gifs = [
    "https://media4.giphy.com/media/yoJC2iZ13CCkYd3aDK/giphy.gif",
  "https://media2.giphy.com/media/xYGnFm4mVcMxYIVq3v/giphy.gif",
  "https://media2.giphy.com/media/iibH5ymW6LFvSIVyUc/giphy.gif",
  "https://media0.giphy.com/media/MJp9HJBMGVfLps9zsN/giphy.gif",
  "https://media0.giphy.com/media/2yqyPZUR4mPFyRTpYi/giphy.gif",
  "https://media0.giphy.com/media/3DmODIoUHALa9QDUp2/giphy.gif",
  "https://media3.giphy.com/media/5quxvnjc77jutz5KGR/giphy.gif",
  "https://media0.giphy.com/media/Mx936qy6jLxyjbqTiR/giphy.gif",
  "https://media0.giphy.com/media/fUQ4rhUZJYiQsas6WD/giphy.gif",
  "https://media1.giphy.com/media/tTc43DeTm2kkJTrI2G/giphy.gif",
  "https://media3.giphy.com/media/8VrtCswiLDNnO/giphy.gif",
  "https://media4.giphy.com/media/n4oKYFlAcv2AU/giphy.gif",
  "https://media2.giphy.com/media/DbV0RlRbSWYBG/giphy.gif",
  "https://media4.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif",
  ];

  // Auto-insert random GIF when taskpane opens
  React.useEffect(() => {
    const autoInsertRandomGif = async () => {
      try {
        const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
        await insertGif(randomGif);
      } catch (error) {
        console.error("Auto-insert failed:", error);
      }
    };

    autoInsertRandomGif();
  }, []);

  return (
    <div style={{ 
      padding: "20px", 
      fontFamily: "Segoe UI, sans-serif",
      textAlign: "center",
      maxWidth: "300px"
    }}>
      <h2 style={{ 
        fontSize: "18px", 
        marginBottom: "15px", 
        color: "#333",
        fontWeight: "600"
      }}>
        GIF Inserted Successfully!
      </h2>
      <p style={{
        fontSize: "14px",
        color: "#555",
        lineHeight: "1.5",
        marginBottom: "20px"
      }}>
        Instantly generate and insert perfect GIFs directly into your Outlook messages. 
        Spice up your emails with just one click!
      </p>
      <div style={{
        fontSize: "12px",
        color: "#777",
        marginTop: "20px",
        borderTop: "1px solid #eee",
        paddingTop: "15px"
      }}>
        <a href="https://iyanu-codes.vercel.app/" 
           target="_blank" 
           rel="noopener noreferrer"
           style={{
             color: "#0066cc",
             textDecoration: "none"
           }}>
          Sent with dynamic GIF signature
        </a>
      </div>
    </div>
  );
};

export default App;