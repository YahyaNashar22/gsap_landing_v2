interface IImageClipBoxProps {
  src: string;
  clipClass: string;
}

const ImageClipBox = ({ src, clipClass }: IImageClipBoxProps) => {
  return (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );
};

export default ImageClipBox;
