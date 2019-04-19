import Crypto from 'crypto-js';
import { useCallback, useState } from 'react';

const initialState: string[] = [];

export function useFilesToChecksums(): [string[], (files: File[]) => void] {
  const [checksums, setChecksums] = useState(initialState);

  const callback = useCallback((files: File[]) => {
    files.forEach((file: File) => {
      const reader = new FileReader();

      // reader.onabort = () => console.log('file reading was aborted');
      // reader.onerror = () => console.log('file reading has failed');

      reader.onload = () => {
        const { result } = reader;

        if (result instanceof ArrayBuffer) {
          const wordArray = Crypto.lib.WordArray.create(result);
          const checksum = Crypto.MD5(wordArray).toString();
          setChecksums((prevChecksums) => [...prevChecksums, checksum]);
        }
      };

      reader.readAsArrayBuffer(file);
    });
  }, []);

  return [checksums, callback];
}
