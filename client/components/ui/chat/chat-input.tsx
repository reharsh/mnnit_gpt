import { useState } from "react";
import { Button } from "../../ui/button";
import FileUploader from "../file-uploader";
import { Input } from "../input";
import UploadImagePreview from "../upload-image-preview";
import { ChatHandler } from "./chat.interface";
import { Send } from "lucide-react";

export default function ChatInput(
  props: Pick<
    ChatHandler,
    | "isLoading"
    | "input"
    | "onFileUpload"
    | "onFileError"
    | "handleSubmit"
    | "handleInputChange"
  > & {
    multiModal?: boolean;
  }
) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (imageUrl) {
      props.handleSubmit(e, {
        data: { imageUrl: imageUrl },
      });
      setImageUrl(null);
      return;
    }
    //@ts-ignore
    props.onFileError(true);
    props.handleSubmit(e);
  };

  const onRemovePreviewImage = () => setImageUrl(null);

  const handleUploadImageFile = async (file: File) => {
    const base64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
    setImageUrl(base64);
  };

  const handleUploadFile = async (file: File) => {
    try {
      if (props.multiModal && file.type.startsWith("image/")) {
        return await handleUploadImageFile(file);
      }
      props.onFileUpload?.(file);
    } catch (error: any) {
      props.onFileError?.(error.message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-full py-4 space-y-4">
      <div className="flex w-full items-center justify-between gap-2">
        <Input
          autoFocus
          autoComplete="off"
          name="message"
          placeholder="ask moti..."
          className="flex-1 rounded-xl h-12"
          value={props.input}
          onChange={props.handleInputChange}
        />
        <Button
          variant="default"
          className=" h-12 rounded-lg bg-gradient-to-r from-blue-700 to-blue-400"
          disabled={props.isLoading}
        >
          <Send className=" md:mr-2 mr-0 h-5 w-5" />
          <div className="md:flex hidden">Send</div>
        </Button>
      </div>
    </form>
  );
}
