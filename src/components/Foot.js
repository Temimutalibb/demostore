

function Foot(){
    return(
    <>
    <div style ={{backgroundColor:"beige",height:'300px', width:"100%",display:"flex",flexWrap:"wrap",marginTop:"20px",textAlign:"center",justifyContent:"center",alignItems:"center"}}>
        <div style={{flex:'1', margin:"5px",  minWidth:"20%", fontSize:"20px",color: "black",padding:"10px",lineHeight:"2"}}
        className="thisfoot">
            <div>The Company</div>
            <div>Terms and condition</div>
            <div> privacy policy</div>
            <div>Our commitmnets</div>
            <div>Blog</div>
        </div>

        <div style={{flex:'1',  margin:"5px", minWidth:"20%", fontSize:"20px",color: "black",padding:"10px",lineHeight:"2" }}
        className="thisfoot">
            <div>How to order?</div>
            <div>Size guide</div>
            <div>Delivery</div>
            <div>Payment</div>
            <div>Returns & Refunds</div>
        </div>

        <div style={{flex:'1', margin:"5px", minWidth:"20%", fontSize:"20px",color: "black",padding:"10px",lineHeight:"2" }}
        className="thisfoot">
            <div>La Redoute Interieurs</div>
            <div>La Redoute Collections</div>
            <div>AM.PM</div>
            <div>Anne Weyburn</div>
        </div>
    </div>
    </>
    
    )
    }
    
    
    export default Foot;