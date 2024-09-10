"use client";

import React, { useState } from "react";
import { InputAdornment, IconButton, TextField } from "@mui/material";
import { FcSearch } from "react-icons/fc";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      const query = searchQuery.trim().toLowerCase();

      // Map specific search queries to corresponding page routes
      const pageRoutes = {
        addition: "/AllTopics/Addition",
        algebra: "/AllTopics/Algebra",
        comparing: "/AllTopics/Comparing",
        counting: "/AllTopics/Counting",
        datagraph: "/AllTopics/DataGraph",
        division: "/AllTopics/Division",
        estimation: "/AllTopics/Estimation",
        fraction: "/AllTopics/Fraction",
        geometry: "/AllTopics/Geometry",
        integer: "/AllTopics/Integer",
        measurement: "/AllTopics/Measurement",
        mixedoperation: "/AllTopics/MixedOperation",
        money: "/AllTopics/Money",
        multiplication: "/AllTopics/Multiplication",
        numbertheory: "/AllTopics/NumberTheory",
        patterns: "/AllTopics/Patterns",
        placevalues: "/AllTopics/PlaceValues",
        ratiopropotion: "/AllTopics/Counting",
        subtraction: "/AllTopics/Subtraction",
        timer: "/AllTopics/Timer",
        testimonial: "/Testimonials",
        class1: "/classtopics/Class1Topics",
        class2: "/classtopics/Class2Topics",
        class3: "/classtopics/Class3Topics",
        class4: "/classtopics/Class4Topics",
        class5: "/classtopics/Class5Topics",
        class6: "/classtopics/Class6Topics",
        ukg: "/classtopics/UKGTopics",
        lkg: "/classtopics/ClassLKGTopics",
      };

      const searchUrl = pageRoutes[query]
        ? pageRoutes[query]
        : ` /search?q=${encodeURIComponent(searchQuery.trim())}`;

      window.location.href = searchUrl;
      setSearchQuery("");
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <TextField
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <FcSearch paddingleft="20px"/>
              </IconButton>
            </InputAdornment>
          ),
          style: {
            color: "white",
            margin: "0 10px",
            // border: "1px solid black", 
            borderRadius: "20px",
            padding: "0px 5px",
            transition: "background-color 0.3s ease",
          },
        }}
      />
    </form>
  );
};

export default SearchBar;
 

