
import Banner from "@/components/Banner";
import Carousel from "@/components/carousel";
import Progressor from "@/components/Progressor";
import Productlist from "@/components/Productlist";
import Productlist2 from "@/components/Productlist2";







export default function Home() {
  return (
    <div className=" min-h-screen bg-zinc-400" >
      {/* bg-gradient-to-tr from-violet-400 to-pink-300 */}
   
      <Carousel/>
<Progressor/>
<Productlist/>
      <Banner />
      <Productlist2/>
 
    
    </div>
  );
}
//  className="min-h-screen bg-gradient-to-tr "
