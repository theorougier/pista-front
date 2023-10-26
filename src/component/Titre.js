import LogoSVG from "../assets/logo/48aa3675-b4cb-47a2-8127-0789544698b4.svg";

export default function Titre({ children, className, id, sub_title }) {
  return (
    <>
      {!sub_title ? (
        <h1 className={"w-full flex justify-center text-center " + className}>
          {children}
        </h1>
      ) : (
        <h2 className={"w-full flex" + className}>
          {children}
        </h2>
      )}
    </>
  );
}
