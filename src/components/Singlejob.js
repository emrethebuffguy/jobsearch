import { useState, useEffect } from "react";
const Singlejob = ({
  logo,
  company,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
  setTagsList,
  tagsList
}) => {

  const handleClick = (object)=>{
    if(!tagsList.includes(object)){
    setTagsList([...tagsList,object])
    }
    
  }

  return (
    <div className="job-container">
      <img src={logo} alt={company} className="job-img" />
      <div className="info">
        <span className="jobs-company">{company} </span>
        <span className="job-position">{position}</span>
        <ul className="job-details">
          <li className="job-detail">{postedAt}</li>
          <li className="job-detail">{contract}</li>
          <li className="job-detail">{location}</li>
        </ul>
      </div>
      <div className="filters">
        <button onClick={()=>handleClick(role)} className="filter-btn">{role}</button>
        <button onClick={()=>handleClick(level)} className="filter-btn">{level}</button>
        {languages.map((item, index) => {
          return (
            <button onClick={()=>handleClick(item)} key={index} className="filter-btn">
              {item}
            </button>
          );
        })}
        {tools.map((item, index) => {
          return (
            <button onClick={()=>handleClick(item)} key={index} className="filter-btn">
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Singlejob;
