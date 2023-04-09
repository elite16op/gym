import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import OurClasses from "../components/OurClasses";
import Email from "../components/Contact";
import Register from "../auth/Register";
import { useSelector } from "react-redux/es/exports";
import disableScroll from 'disable-scroll';

type Props = {};

interface RootState {
  sign: {
    show: boolean;
  };
}

const Home = (props: Props) => {


  const visible : boolean = useSelector((state:RootState)=>state.sign.show)
  if (visible) {
    disableScroll.on();
  } else {
    disableScroll.off();
  }

  return (
    <div>
      <div className={visible?"opacity-30":""}>
        <Navbar />
        <Hero />
        <Benefits />
        <OurClasses />
        <div className="">
        <Email />
        </div>
      </div>

      {visible && <Register />}
    </div>
  );
};

export default Home;
