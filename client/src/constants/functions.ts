export const toBase64 = (file: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export function checkProperties(obj: any, keys: string[]) {
  for (let key of keys) {
    if (obj[key]) return true;
  }
  return false;
}
