import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentWebinar } from "@/store/slice/webinars";
import { selectorUser } from "@/store/slice/user";
import "./index.scss";


function computeNewDate(date){
  const oldTimeStmap = Date.parse(new Date(date));
  const newTimeStmap = oldTimeStmap + 60 * 60 * 24 * 1000 * 10;
  const newDate = new Date(newTimeStmap);
  return `${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
}

export default function Card(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const states = useSelector(selectorUser);
  const { token } = states;
  const { title, created_at, content } = props;
  const handleRegister = (title) => {
    if(token){
      const offsetTop = document.getElementById("register-form").offsetTop;
      dispatch(setCurrentWebinar(title));
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    })
    }else{
      history.push("/login");
    }
  }

  return (
    <div className={"card-wrap"}>
      <div className={"card-container"}>
        <div className={"card-info"}>
          <p className={"date"}>{created_at}</p>
          <p className={"title"}>{title}</p>
          <p className={"content"} dangerouslySetInnerHTML={{__html:content}}></p>
          <p className={"time"}>{computeNewDate(created_at)}</p>
        </div>
        <div className="card-btn" onClick={()=>{handleRegister(title)}}>
          <span>Register Now</span>
          <span>></span>
        </div>
      </div>
    </div>
  );
}

