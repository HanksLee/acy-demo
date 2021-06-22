import React from 'react';
import Introduce from "./Introduce";
import Webinars from "./Webinars";
import Video from "./Video";
import Form from "./Form";

export default function Home() {
  return (
    <div>
        <Introduce></Introduce>
        <Webinars></Webinars>
        <Video></Video>
        <Form></Form>
    </div>
  );
}

