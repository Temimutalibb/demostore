import Box from "./Box";
import MainBox from "./Mainbox";


export default function Women(){
   return(
   <>
       <MainBox>
          <Box clothName={"QUEEN NET"}      clothPrice={ 20.10}    srcName={require("../image/womenimage/fashion01.jpg")} />
          <Box clothName={"CROPPED FLAP JACKET"}   clothPrice={ 59.50}   srcName={require("../image/womenimage/fashion02.jpg")}/>
          <Box clothName={"TEXTURED PLAIN JACKET"}      clothPrice={ 40.00}   srcName={require("../image/womenimage/fashion03.jpg")} />
          <Box clothName={"CROPPED WOOL BLENDED CARDIGAN"}   clothPrice={ 20.00}   srcName={require("../image/womenimage/fashion04.jpg")} />
          <Box clothName={"SHORT TEXTURE JACKET"}    clothPrice={30.10}   srcName={require("../image/womenimage/fashion05.jpg")}/>
          <Box clothName={"TEXTURED PLAIN JACKET"} clothPrice={ 18.00}   srcName={require("../image/womenimage/fashion06.jpg")}/>
          <Box clothName={"NEAT CARAVEN"}        clothPrice={ 11.50}  srcName={require("../image/womenimage/fashion07.jpg")}/>
          <Box clothName={"2ND SSL WALK "} clothPrice={ 39.25}  srcName={require("../image/womenimage/fashion08.jpg")} />
          <Box clothName={"ARAB WOOVEN"} clothPrice={ 5000.00} srcName={require("../image/womenimage/fashion09.jpg")} /> 
       </MainBox>
    </>
    )
}