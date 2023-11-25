import logo from "../../public/logo.svg";
import lupa from "../../public/lupa.svg";
import shop from "../../public/shop.svg";

const Navbar = () => {
  return (
    <div>
      <header className="flex items-center justify-center bg-navColor w-screen h-16 flex-shrink" >
        <ul className="flex flex-col md:flex-row gap-10 items-center">
          <li className="text-slate-200 items-center">
            <a href=""><img src={logo} alt="" width={41} height={42}/></a>
          </li>

          <li className="text-slate-200">
            <a href="">Loja</a>
          </li>

          <li className="text-slate-200">
            <a href="">Mac</a>
          </li>

          <li className="text-slate-200">
            <a href="">iPin</a>
          </li>

          <li className="text-slate-200">
            <a href="">PinPhone</a>
          </li >

          <li className="text-slate-200">
            <a href="">Watch</a>
          </li>

          <li className="text-slate-200">
            <a href="">PinPods</a>
          </li>

          <li className="text-slate-200">
            <a href="">Entretenimento</a>
          </li>

          <li className="text-slate-200">
            <a href="">Suporte</a>
          </li>

          <li className="text-slate-200">
            <a href=""><img src={lupa} alt="" /></a>
          </li>

          <li className="text-slate-200">
            <a href=""><img src={shop} alt="" /></a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
