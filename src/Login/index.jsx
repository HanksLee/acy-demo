import React,{useState,useRef,useLayoutEffect} from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToken } from "@/store/slice/user";
import { loginUser } from "@/api/user.js";
import "@/css/form.scss";
import "./index.scss";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const accountRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef()
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [formItem, setFormItem] = useState([
    {
      name:"Account",
      type: "text",
      currentValue: "",
      showErrMsg: false,
      currentRef: accountRef
    },
    {
      name:"Password",
      type: "password",
      currentValue: "",
      showErrMsg: false,
      currentRef: passwordRef
    }
  ]);

  useLayoutEffect(()=>{
    checkValues();
  },[formItem])

  const checkValues = () => {
    for(let i=0;i<formItem.length;i++){
      if(formItem[i].currentValue){
        if(i === formItem.length -1) setDisabledBtn(false)
      }else{
        if(disabledBtn === false) {
          setDisabledBtn(true);
        }
        break;
      }
    }
  }

  const setValues = (index,value) =>{
    const trimValue = value.trim();
    const newFormItem = [...formItem];
    const currentItem = newFormItem[index];
    currentItem.currentValue = trimValue;
    if(trimValue){
      currentItem.showErrMsg = false;
    }else{
      currentItem.showErrMsg = true;
    }
    setFormItem(newFormItem);
  }

  const handleLogin = async() => {
    const payload = {
      "email":accountRef.current.value.trim(),
      "password":passwordRef.current.value.trim()
    }

    const userInfo = await loginUser(payload);
    if(userInfo){
      dispatch(addToken(userInfo.token));
      history.push("/");
    }
  }

  return (
    <div>
      <p className={"login-title"}>Sign In</p>
      <div className={"form-wrap"}>
        <div className="form-container">
            <form ref={formRef}>
              {
                formItem.map((item,index)=>{
                  const { name, type, showErrMsg, currentRef } = item;
                  return(
                    <div className="form-item" key={name}>
                      <p>{name}</p>
                      <input type={type} ref={currentRef} onBlur={()=>{setValues(index,currentRef.current.value)}}/>
                      {showErrMsg && <p className={"error-msg"}>{name} is required</p>}
                    </div>
                  )
                })
              }
              <div className="form-item">
                <input type="button" value="Login" disabled={disabledBtn} onClick={()=>{handleLogin()}}/>
              </div>
            </form>
        </div>
      </div>
    </div>

  );
}

