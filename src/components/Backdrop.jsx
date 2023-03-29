const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClose}
      className="h-screen w-screen fixed top-0 bg-[#0000009c]"
    ></div>
  );
};

export default Backdrop;
