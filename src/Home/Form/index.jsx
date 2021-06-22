import React,{useState,useRef,useLayoutEffect} from 'react';
import { selectorWebinars } from "@/store/slice/webinars";
import { useSelector } from "react-redux";
import "@/css/form.scss";


export default function Form() {
  const topicRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const [disabledBtn, setDisabledBtn] = useState(true);
  const states = useSelector(selectorWebinars);
  const { list, currentWebinar } = states;
  const [formItem, setFormItem] = useState([
    {
      name:"Topic",
      isSelect: true,
      currentValue: currentWebinar,
      showErrMsg: false,
      currentRef: topicRef
    },
    {
      name:"First Name",
      isSelect: false,
      currentValue: "",
      showErrMsg: false,
      currentRef: firstNameRef
    },
    {
      name:"Last Name",
      isSelect: false,
      currentValue: "",
      showErrMsg: false,
      currentRef: lastNameRef
    },
    {
      name:"Email",
      isSelect: false,
      currentValue: "",
      showErrMsg: false,
      currentRef: emailRef
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
  return (
    <div className={"form-wrap"} id={"register-form"}>
      <div className="form-container">
          <p className="title">Register for a Webinar now</p>
          <p className="placeholder">Please fill in the form below and you will be contacted by one of our professional business experts.</p>
          <form>
            {
              formItem.map((item,index)=>{
                const { name, isSelect, showErrMsg, currentRef } = item;
                return(
                  <div className="form-item" key={name}>
                    <p>{name}</p>
                    {isSelect?
                    <select ref={currentRef} onChange={()=>{setValues(index,currentRef.current.value)}} defaultValue={""}>
                      <option value="">請選擇研討會名稱</option>
                      {
                        list.map((listItem,index)=>{
                          const { title } = listItem;
                          return(
                            <option value={title} key={index} selected={currentWebinar === title}>{title}</option>
                          )
                        })
                      }
                    </select>
                    :<input type="text" ref={currentRef} onBlur={()=>{setValues(index,currentRef.current.value)}}/>
                    }
                    {showErrMsg && <p className={"error-msg"}>{name} is required</p>}
                  </div>
                )
              })
            }
            <div className="form-item">
              <input type="button" value="Register" disabled={disabledBtn}/>
            </div>
          </form>
      </div>
    </div>
  );
}

