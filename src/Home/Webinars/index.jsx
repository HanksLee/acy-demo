import React, { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectorWebinars, setWebinarsList } from "@/store/slice/webinars";
import { fetchList } from "@/api/webinars";
import "./index.scss";
import Card from "./Card";

export default function Webinars() {
  const dispatch = useDispatch();
  const states = useSelector(selectorWebinars);
  const { list } = states; 
  useLayoutEffect(()=>{
    const fetchData = async() => {
      const result = await fetchList();
      if(result){
        dispatch(setWebinarsList(result.data))
      }
    }
    fetchData();
  },[])
  return (
    <div className={"webinars-container"}>
      {
        list.map((listItem,index)=>{
          const {created_at,title,content} = listItem;
          return(
            <Card created_at={created_at} title={title} content={content} key={index} />
          )
        })
      }
    </div>
  );
}

