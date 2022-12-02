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
    data: file,
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': file.type,
    },
    method: 'PUT',
    onUploadProgress: progressEvent => {
      onUploadProgress?.(
        progressEvent.total
          ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
          : 0,
      );
    },
    url: signedRequest,
  });

export default uploadFile;
