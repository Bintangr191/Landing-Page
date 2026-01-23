import Image from "next/image";
import DataImage from "@/public/data";
import { Home1Container, Image1 } from "./Home1.Style";

function Home1() {
  return (
    <Home1Container>
        <Image1>
            <Image src={DataImage.home1} alt="Home1" />
        </Image1>
    </Home1Container>
  )
}

export default Home1
