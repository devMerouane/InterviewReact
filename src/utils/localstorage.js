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
  try {
    const space = localStorage['ditto'].length;
    console.log(space)
    const compressedData = lzwcompress.pack(data);
    localStorage.setItem(key, JSON.stringify(compressedData))
  } catch (error) {
    console.log(error)
  }
}
