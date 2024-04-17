import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo-weather.svg"
        alt="Weather logo"
        width={100}
        height={100}
      />
    </div>
  );
};
export default Logo;
