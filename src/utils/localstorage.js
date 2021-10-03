import lzwcompress from 'lzwcompress';

export const getLocalStorage = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    const uncompressedData = lzwcompress.unpack(data);
    return uncompressedData[key];
  } catch (error) {
    console.log(error)
  }
}
export const setLocalStorage = (key, data) => {
  const compressedData = lzwcompress.pack(data);
  try {
    localStorage.setItem(key, JSON.stringify(compressedData))
  } catch (error) {
    if (error === DOMException.QUOTA_EXCEEDED_ERR) {
      for (const x in localStorage) {
        if (localStorage[x].length > compressedData.length) {
          localStorage.removeItem(x);
          localStorage.setItem(key, JSON.stringify(compressedData));
        }
      }
    }
  }
}
