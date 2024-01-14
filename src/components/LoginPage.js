import React, { useState } from 'react';
import styles from './login-style.module.css';



 function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const handleLogin = () =>{
        if(username && password){
    
        
            alert('please login')
        }
    }

    
    return(
       <>
        <form className= {styles.myForm}> 
             <div className={styles.formContainer}>
            <label>
                Username:
                <input type ="text"
                placeholder='Enter Username'
                value = {username}
                onChange = {(e) => setUsername(e.target.value)} />
           </label>
           <br/>
           <label>
               password:
               <input type ="password"
               placeholder='Enter password'
               value={password}
               onChange={(e) => setPassword(e.target.value)}/>
           </label>
           <br/>
           <button type = "button"
           onClick={handleLogin}>
            Login
           </button>
           <label>
                <input type='checkbox'
                checked = {true} />
           </label>
           <span className={styles.psw}>Sign up</span>
           </div>
           <div className= {styles.formContainer}
           style={{backgroundColor:'#f1f1f1'}}>
                       <button type="button"  className={styles.cancelbtn}>Cancel</button>
            <span className={styles.psw}>Forgot password?</span>
           </div>
        </form>
       </>
    )
}

export default LoginPage;