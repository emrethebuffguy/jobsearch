import {useState} from "react"
import Singlejob from "./Singlejob";
import Searchbar from "./Searchbar";
const data = require("../data.json");

const Main = () => {
  const [tagsList,setTagsList] = useState(["Frontend","Junior"])
  const [jobs,setJobs] = useState(data)
  return (
    <main>
      <h1 className="header">Job Search</h1>
      <Searchbar tagsList = {tagsList} setTagsList={setTagsList}/>
      {jobs.map((item) => {
        let tagArray = []
        tagArray = [item.level,item.role];
        tagArray = tagArray.concat(item.languages).concat(item.tools);
        
        if(tagsList!== [] && tagsList.every(element =>{return tagArray.includes(element)})){
        
        return <Singlejob tagsList={tagsList} setTagsList={setTagsList} key={item.id} {...item} />;
        }
        
      })}
    </main>
  );
};

export default Main;
