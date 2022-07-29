const Searchbar = ({tagsList,setTagsList})=>{
    return (
      <div className="search-bar">
        <div className="search-container">
          {tagsList.map((item, index) => {
            return (
              <button key={index} className="tag-btn">
                {item}
              </button>
            );
          })}
        </div>
        <button className="clear-btn" onClick={()=>{setTagsList([])}}>clear</button>
      </div>
    );
}

export default Searchbar