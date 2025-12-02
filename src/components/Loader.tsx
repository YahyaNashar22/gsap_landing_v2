const Loader = ({ progress }: { progress: number }) => {
  return (
    <div className="loader flex-center absolute z-100 h-dvh w-screen overflow-hidden bg-violet-50 flex-col gap-6">
      <div className="three-body">
        <div className="three-body__dot" />
        <div className="three-body__dot" />
        <div className="three-body__dot" />
      </div>

      <div className="w-60 h-2 bg-violet-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-violet-600 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="text-violet-700 text-xl font-zentry tracking-widest">{progress}%</div>
    </div>
  );
};

export default Loader;
