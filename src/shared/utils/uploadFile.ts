import axios from 'axios';

interface UploadFile {
  file: Blob;
  signedRequest: string;
  onUploadProgress?: (percent: number) => void;
}

const uploadFile = async ({
  file,
  signedRequest,
  onUploadProgress,
}: UploadFile) =>
  axios({
    method: 'PUT',
    url: signedRequest,
    data: file,
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': file.type,
    },
    onUploadProgress: progressEvent => {
      onUploadProgress?.(
        Math.round((progressEvent.loaded * 100) / progressEvent.total),
      );
    },
  });

export default uploadFile;
