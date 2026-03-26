const Loading = () => {
  return (
    <div className="flex min-h-[300px] md:min-h-[400px] lg:min-h-[500px]  items-center justify-center bg-blue-100">
      <div className="text-center">
        <div
          className="
            mx-auto
            rounded-full
            h-16 w-16
            border-[2px] border-gray-100 border-t-blue-20
            animate-spin 
          "
        />
        <p
          className="
         text-blue-20
            text-base
            md:text-l
            lg:text-lg
          "
        >
          Đang tải...
        </p>
      </div>
    </div>
  );
};

export default Loading;
