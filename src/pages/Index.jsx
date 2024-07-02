import React, { useState, useEffect } from "react";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const sampleText = "これはタイピング練習用のサンプルテキストです。正確に入力してください。";

  useEffect(() => {
    if (inputText.length === 0) {
      setStartTime(null);
      setWpm(0);
      setAccuracy(100);
      return;
    }

    if (!startTime) {
      setStartTime(Date.now());
    }

    const elapsedTime = (Date.now() - startTime) / 1000 / 60; // in minutes
    const wordsTyped = inputText.length / 5;
    setWpm(Math.round(wordsTyped / elapsedTime));

    const correctChars = inputText.split("").filter((char, index) => char === sampleText[index]).length;
    setAccuracy(Math.round((correctChars / inputText.length) * 100));
  }, [inputText, startTime]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl mb-4">タイピング練習アプリ</h1>
      <p className="mb-4">{sampleText}</p>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="border p-2 mb-4 w-full max-w-md"
        placeholder="ここに入力してください"
      />
      <div className="flex space-x-4">
        <div>速度: {wpm} WPM</div>
        <div>正確さ: {accuracy}%</div>
      </div>
    </div>
  );
};

export default Index;