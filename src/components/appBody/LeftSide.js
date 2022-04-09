import React, {useState } from "react";
import "./LeftSide.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useProviderValue } from "../../context";

const LeftSide = () => {
  const [showFilter, setShowFilter] = useState(false);

  const {
    category,
    setCategory,
    sortByPrice,
    setSortByPrice,
    input,
    setInput,
    rating,
    setRating,
    setClearFilter,
  } = useProviderValue();

  return (
    <>
      <div
        className={
          showFilter
            ? "left-side-filters-btn slidePlus"
            : "left-side-filters-btn slideMinus"
        }
        onClick={() => setShowFilter(!showFilter)}
      >
        Filters{" "}
        {showFilter ? (
          <KeyboardBackspaceIcon className="left-arrow" />
        ) : (
          <EastSharpIcon className="right-arrow" />
        )}
      </div>
      <div
        className={
          showFilter
            ? "left-side-container afterClick"
            : "left-side-container default"
        }
      >
        <input
          type="text"
          className="leftSide-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="search product by name..."
        />
        <div className="category-container">
          <p>Category</p>
          <select
            className="product-category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>all products</option>
            <option>men's clothing</option>
            <option>jewelery</option>
            <option>electronics</option>
            <option>women's clothing</option>
          </select>
        </div>
        <div className="sort-price">
          <span>sort by price</span>
          <span
            className={sortByPrice === "ascending" ? "arrow-active" : ""}
            onClick={() => setSortByPrice("ascending")}
          >
            <ArrowCircleUpIcon />
          </span>
          <span
            className={sortByPrice === "descending" ? "arrow-active" : ""}
            onClick={() => setSortByPrice("descending")}
          >
            <ArrowCircleDownIcon />
          </span>
        </div>
        <div className="star-container">
          {[...Array(5)].map((_, i) => (
            <span onClick={() => setRating(i + 1)} key={i}>
              {rating > i ? (
                <StarIcon style={{ color: "goldenrod" }} />
              ) : (
                <StarOutlineIcon style={{ color: "goldenrod" }} />
              )}
            </span>
          ))}
        </div>
        <button
          onClick={() => setClearFilter(true)}
          className="clear__filter--btn"
        >
          Clear Filter
        </button>
      </div>
    </>
  );
};

export default LeftSide;
