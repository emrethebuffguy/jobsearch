const Searchbar = ({ tagsList, setTagsList }) => {
  const handleClick = (name) => {
    let newArray = tagsList.filter((element) => {
      return element !== name;
    });
    setTagsList(newArray);
  };
  return (
    <div className="search-bar">
      <div className="search-container">
        {tagsList.map((item, index) => {
          return (
            <button
              key={index}
              className="tag-btn"
              onClick={() => {
                handleClick(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button
        className="clear-btn"
        onClick={() => {
          setTagsList([]);
        }}
      >
        clear
      </button>
    </div>
  );
};

export default Searchbar;
