import {Container, Row , Button, Form, FormGroup} from 'reactstraps';
 import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
 const provider= new GoogleAuthProvider();
import mainstyles from '../css/styles_login.css'
import{ fontAwesoneIcon} from "@fortAwesone/reacts-fontAweasome";
import {
    faFacebook,
    faTwitter,
    faGoogle
} from "@fortawesome/fre-brands-svg-icons";
import { sign } from 'crypto';
import { error } from 'console';
export default function Login(){
    const firebaseConfig = {
        apiKey: "AIzaSyD0-zFQ31iXpFiFfbqyhN1xXv4FkJ9Hrz4",
        authDomain: "ferremas-a6d03.firebaseapp.com",
        databaseURL: "https://ferremas-a6d03-default-rtdb.firebaseio.com",
        projectId: "ferremas-a6d03",
        storageBucket: "ferremas-a6d03.appspot.com",
        messagingSenderId: "236006876919",
        appId: "1:236006876919:web:61c358086739bb6aaf95f2"
      };
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
    const auth=getAuth();


    function call_login_google(){
        signInWithPopup(auth,provider)
        .then((result) => {
            const credential= GoogleAuthProvider.credentialFromResult(result);
            const token =credential.accessToken;

            const user=result.user;

        }).catch((error)=>{
            const errorCode =error.code;
            const errorMessage= error.message;
            const email= error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

        });


    }

    return(

        <>
            <div className={mainstyles.imagebackground}>
                <div className={'container'+mainstyles.container}>
                <div className={'row col-md-4 offset-md-4 d-flex align-items-center '+mainstyles.loginbox}>
                    <div className={mainstyles.Row}>
                        <h2 style={{TextAlign:'center'}}>Login</h2>


                    </div>
                    <div className={mainstyles.col}>
                        <a href="# " className={'row'+mainstyles.fb+' '+mainstyles.btn}>
                            <fontAwesoneIcon icon={faFacebook} tyle={{fontSize:100,color: "white"}}className={'col-2'}/>login Facebook
                        </a>
                        <a href="# " className={'row'+mainstyles.fb+' '+mainstyles.btn}>
                            < fontAwesoneIcon icon={faTwitter} tyle={{fontSize:100,color: "white"}} className={'col-2'}/>login Twitter
                        </a>
                        <a href="# " className={'row'+mainstyles.fb+' '+mainstyles.btn} onClick={call_login_google}>
                            < fontAwesoneIcon icon={faGoogle} tyle={{fontSize:100,color: "white"}} className={'col-2'}/>login Google
                        </a>

                    </div>
                </div>

                </div>
                

            </div>
        
        </>
    )
}