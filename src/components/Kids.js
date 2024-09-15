import Box from "./Box";
import MainBox from "./Mainbox";

export default function Kids({handleClothChange}){
    return(
    <MainBox>
          <Box clothName={"HAT"}          clothPrice={ 5.10 }  srcName={require("../image/kidsimage/kid1.jpg")}  />
          <Box clothName={"KNEATTED CAP"} clothPrice={20.50}   srcName={require("../image/kidsimage/kid2.jpg")} />
          <Box clothName={"SNOW OUTFIT"}  clothPrice={ 40.00}  srcName={require("../image/kidsimage/kid3.jpg")} />
          <Box clothName={"ROUND HAT"}    clothPrice={ 7.00}   srcName={require("../image/kidsimage/kid4.jpg")} />
          <Box clothName={"HAT"}          clothPrice={ 10.00}  srcName={require("../image/kidsimage/kid5.jpg")} />
          <Box clothName={"VELVET"}       clothPrice={ 30.00}  srcName={require("../image/kidsimage/kid6.jpg")} />
          <Box clothName={"SEASON OUTFIT"} clothPrice={ 11.00} srcName={require("../image/kidsimage/kid7.jpg")} />
          <Box clothName={"KID FIT "}     clothPrice={ 39.00}  srcName={require("../image/kidsimage/kid8.jpg")} />
          <Box clothName={"2ND SSL WALK"} clothPrice={ 5000.00} srcName={require("../image/kidsimage/kid9.jpg")} />
          <Box clothName={"SNEAKERS"}     clothPrice={ 500.00} srcName={require("../image/kidsimage/kid10.jpg")} />
    </MainBox>
  );
}
     
