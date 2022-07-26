// 1. make Login.js & import in app.js & use
// 2. make Content.js & import in app.js & use 
// 3. install "react-router-dom"  & import it
// 4. make router---> 
//  "/"-->1st page--> ye hame direct show krega brouser me
// "/content"-->this is route -->browser k is link k sath "/content" add krne pr iska content show hoga 
// 5. <Link> --> kisi bhi btn pr lga skte hai jisse hm is btn ko click krne pr ek se dusre page me chale jaye-->(go Login.js)

import React from "react";
import "./style.css";
import Login from './components/Login'
import Content from './components/Content'
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <div>
      {/* 4.make router-------- */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/content" element={<Content/>} />
        </Routes>
      </BrowserRouter>

      {/* <Login />
      <Content /> */}
    </div>
  );
}
