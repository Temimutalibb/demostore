import Box from "./Box";
import MainBox from "./Mainbox";

export default function Men({handleClothChange,  handleClothSave, bookMarkColor}){
   
    return(
    <>
       <MainBox>
          <Box clothName={"flat cap"}      clothPrice={ 5.10}    srcName={require("../image/menimage/man1.jpg")} />                       
          <Box clothName={"head warmer"}   clothPrice={ 40.20}   srcName={require("../image/menimage/man2.jpg")}/>
          <Box clothName={"snow cap"}      clothPrice={ 90.00}   srcName={require("../image/menimage/man3.jpg")} />
          <Box clothName={"head warmer"}   clothPrice={ 30.00}   srcName={require("../image/menimage/man4.jpg")} />
          <Box clothName={"bucket cap"}    clothPrice={200.10}   srcName={require("../image/menimage/man5.jpg")} />
          <Box clothName={"office outfit"} clothPrice={ 70.00}   srcName={require("../image/menimage/man6.jpg")} />
          <Box clothName={"jacket"}        clothPrice={ 250.50}  srcName={require("../image/menimage/man7.jpg")} />
          <Box clothName={"leather jacket"} clothPrice={ 20.25}  srcName={require("../image/menimage/man8.jpg")} />
          <Box clothName={"Ray glasses"}    clothPrice={ 1.00}   srcName={require("../image/menimage/man10.jpg")}/>
      </MainBox>
    </>     
  );
}
     
