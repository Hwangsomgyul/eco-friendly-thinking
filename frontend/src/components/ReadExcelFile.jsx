// src/components/ReadExcelFile.jsx
import { read, utils } from 'xlsx';

const ReadExcelFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = new Uint8Array(event.target.result);
        const workbook = read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0]; // 첫 번째 시트 사용
        const sheet = workbook.Sheets[sheetName];
        const json = utils.sheet_to_json(sheet);
        resolve(json);
      } catch (error) {
        reject(error);
      }
    };
    reader.readAsArrayBuffer(file);
  });
};

export default ReadExcelFile;