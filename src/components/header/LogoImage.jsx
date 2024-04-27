import Logo from "/logo.svg";
export default function LogoImage() {
  return (
    <a href="./index.html">
      <img className="h-9" src={Logo} alt="Weather App" />
    </a>
  );
}
