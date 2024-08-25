import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {faList} from "@fortawesome/free-solid-svg-icons";
export default function Filter() {
  return (
   <div className="filters">
     <div className="search-section">
      <h1 id='c'>Mục yêu thích của bạn</h1>
      <div id="search-bar">
        <FontAwesomeIcon id="icon1" icon={faMagnifyingGlass} />
        <input type="text" placeholder="Tìm kiếm" />
      </div>
    </div >
    <div  className="filter-section">
      <select id="select1">
        <option>Trạng thái</option>
      </select>
      <select id="select2">
        <option>Danh mục</option>
      </select>
      <select id="select3">
        <option>Đã thêm gần đây</option>
      </select>
      <FontAwesomeIcon id="icon2" icon={faList} />
      </div>
    </div>
  );
}
