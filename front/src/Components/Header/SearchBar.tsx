import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import axios from "axios";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    //   marginLeft: theme.spacing(3),
    width: "300px",
    marginRight: "5em",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.5, 0.5, 0.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2.5)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    searchGoogle();
  };

  const searchGoogle = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_SEARCH_ENGINE_ID&q=${searchTerm}`
      );
      setResults(response.data.items);
      console.log(response.data.items, "helooooo");
    } catch (error) {
      console.error("Error searching Google:", error);
    }
  };
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJub25jZSI6ImM1SE5wX3pUNVhobHVvNGtPUDhhUEpyNEVCQ0JMWG5fQ2M4OXRSR19SVjgiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83NzdjZmVmZi04MmVmLTQ1YTktYTJiOC1iNzhhODMwMTM4ZDIvIiwiaWF0IjoxNjg2MDI4MjQ3LCJuYmYiOjE2ODYwMjgyNDcsImV4cCI6MTY4NjExNDk0NywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQVVIdU1PbmhCOHJEMVFESU10YWlmanRya3NZRFp6cVZEbDg2Ny8xTUlWTW5hajBaek9JUmNFQTlDV1Bmb0RyZ2FXb3VlSmFqQ0hFM00zVmh5YytHajEyQ2FqdG5DSGFKSDhERWVuWlJPT05VPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggRXhwbG9yZXIiLCJhcHBpZCI6ImRlOGJjOGI1LWQ5ZjktNDhiMS1hOGFkLWI3NDhkYTcyNTA2NCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS2hhdHVuIiwiZ2l2ZW5fbmFtZSI6IkphaGFuYXJhIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMTE2LjIwNi4yMjIuMjM5IiwibmFtZSI6IkphaGFuYXJhIEtoYXR1biIsIm9pZCI6IjU2Nzk4ODgzLTMwMjUtNGFmNy1iMTliLTg2Nzc5OTY5MTc3OCIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMUM4NEE4MTA1IiwicHdkX2V4cCI6IjIxMDEzIiwicHdkX3VybCI6Imh0dHBzOi8vcG9ydGFsLm1pY3Jvc29mdG9ubGluZS5jb20vQ2hhbmdlUGFzc3dvcmQuYXNweCIsInJoIjoiMC5BVk1BX181OGQtLUNxVVdpdUxlS2d3RTQwZ01BQUFBQUFBQUF3QUFBQUFBQUFBQlRBQjguIiwic2NwIjoiQWNjZXNzUmV2aWV3LlJlYWQuQWxsIEFjY2Vzc1Jldmlldy5SZWFkV3JpdGUuQWxsIEFjY2Vzc1Jldmlldy5SZWFkV3JpdGUuTWVtYmVyc2hpcCBBUElDb25uZWN0b3JzLlJlYWQuQWxsIEFQSUNvbm5lY3RvcnMuUmVhZFdyaXRlLkFsbCBDYWxlbmRhcnMuUmVhZC5TaGFyZWQgQ2hhbm5lbC5SZWFkQmFzaWMuQWxsIENoYW5uZWxTZXR0aW5ncy5SZWFkLkFsbCBDaGFubmVsU2V0dGluZ3MuUmVhZFdyaXRlLkFsbCBDdXN0b21BdXRoZW50aWNhdGlvbkV4dGVuc2lvbi5SZWFkLkFsbCBDdXN0b21BdXRoZW50aWNhdGlvbkV4dGVuc2lvbi5SZWFkV3JpdGUuQWxsIEN1c3RvbVNlY0F0dHJpYnV0ZUFzc2lnbm1lbnQuUmVhZC5BbGwgQ3VzdG9tU2VjQXR0cmlidXRlQXNzaWdubWVudC5SZWFkV3JpdGUuQWxsIEN1c3RvbVNlY0F0dHJpYnV0ZURlZmluaXRpb24uUmVhZC5BbGwgQ3VzdG9tU2VjQXR0cmlidXRlRGVmaW5pdGlvbi5SZWFkV3JpdGUuQWxsIERpcmVjdG9yeS5BY2Nlc3NBc1VzZXIuQWxsIERpcmVjdG9yeS5SZWFkLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBGaWxlcy5SZWFkIEZpbGVzLlJlYWQuQWxsIEZpbGVzLlJlYWRXcml0ZSBGaWxlcy5SZWFkV3JpdGUuQWxsIEdyb3VwLlJlYWQuQWxsIEdyb3VwLlJlYWRXcml0ZS5BbGwgSWRlbnRpdHlSaXNreVVzZXIuUmVhZC5BbGwgSWRlbnRpdHlSaXNreVVzZXIuUmVhZFdyaXRlLkFsbCBvcGVuaWQgcHJvZmlsZSBSZXBvcnRzLlJlYWQuQWxsIFNpdGVzLlJlYWQuQWxsIFNpdGVzLlJlYWRXcml0ZS5BbGwgVGVhbS5SZWFkQmFzaWMuQWxsIFRlYW1zQWN0aXZpdHkuUmVhZCBUZWFtc0FjdGl2aXR5LlNlbmQgVGVhbXNBcHAuUmVhZCBUZWFtc0FwcC5SZWFkLkFsbCBUZWFtc0FwcC5SZWFkV3JpdGUgVGVhbXNBcHAuUmVhZFdyaXRlLkFsbCBUZWFtc0FwcEluc3RhbGxhdGlvbi5SZWFkRm9yQ2hhdCBUZWFtc0FwcEluc3RhbGxhdGlvbi5SZWFkRm9yVGVhbSBUZWFtc0FwcEluc3RhbGxhdGlvbi5SZWFkRm9yVXNlciBUZWFtc0FwcEluc3RhbGxhdGlvbi5SZWFkV3JpdGVGb3JDaGF0IFRlYW1zQXBwSW5zdGFsbGF0aW9uLlJlYWRXcml0ZUZvclRlYW0gVGVhbXNBcHBJbnN0YWxsYXRpb24uUmVhZFdyaXRlRm9yVXNlciBUZWFtc0FwcEluc3RhbGxhdGlvbi5SZWFkV3JpdGVTZWxmRm9yQ2hhdCBUZWFtc0FwcEluc3RhbGxhdGlvbi5SZWFkV3JpdGVTZWxmRm9yVGVhbSBUZWFtc0FwcEluc3RhbGxhdGlvbi5SZWFkV3JpdGVTZWxmRm9yVXNlciBUZWFtU2V0dGluZ3MuUmVhZC5BbGwgVGVhbVNldHRpbmdzLlJlYWRXcml0ZS5BbGwgVGVhbXNUYWIuQ3JlYXRlIFRlYW1zVGFiLlJlYWQuQWxsIFRlYW1zVGFiLlJlYWRXcml0ZS5BbGwgVGVhbXNUYWIuUmVhZFdyaXRlRm9yQ2hhdCBUZWFtc1RhYi5SZWFkV3JpdGVGb3JUZWFtIFRlYW1zVGFiLlJlYWRXcml0ZUZvclVzZXIgVXNlci5SZWFkIFVzZXIuUmVhZC5BbGwgVXNlci5SZWFkQmFzaWMuQWxsIFVzZXIuUmVhZFdyaXRlIFVzZXIuUmVhZFdyaXRlLkFsbCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlF4bUxmUGlXQkZkS3R0STBMSGNQOVhRNS03NXBPVUVrS2NLemlHNDRDNkUiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiI3NzdjZmVmZi04MmVmLTQ1YTktYTJiOC1iNzhhODMwMTM4ZDIiLCJ1bmlxdWVfbmFtZSI6ImphaGFuYXJhLmtAdG1heC5pbiIsInVwbiI6ImphaGFuYXJhLmtAdG1heC5pbiIsInV0aSI6IldIOTZ0R3VKbVV5SjRyYkxNVVVNQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfY2MiOlsiQ1AxIl0sInhtc19zc20iOiIxIiwieG1zX3N0Ijp7InN1YiI6Ijl4SUdOQjlhblF5QnlHM3NHdmtKSDdXeGFEeFNNZWpxand4M3JEUE9xOTAifSwieG1zX3RjZHQiOjE1NDgwNDQ0NzB9.c16yftdjM9o5dveQBJEBx04rVexzTPhyW6hbMxmQvSsB7M8iZuHDBC8fD5fyLcy4FJ6ypX-eN6XZcAQNxBUW8hPX8XbbJQYf5EZFtvjYodXgpaRH-dr0M8xrWgfafGrQvV8f8iBQe5BTz2FuKadwVZQ8BTiQ1envo0eo7wM2XQvKX0DcfsAPtJuct50naxRpu9SlyeBdSj-sBfU7jSxu-rm_eWh0HGEKV9CNrZOpwf4uyNA_H95mOusNgV2JFuRj25IVy3EDo0J7ceScM7gLPbHb_LMlqjVCVaq4DN61OGvNLKbmBLLr6pJo3ipwFfELX7pGMp2OWARqEARJxH_jbQ";
  const performUnifiedSearch = (query: string) => {
    if (query.length < 3) {
      // Minimum 3 characters are required to search
      return;
    }

    //const apiUrl = `https://graph.microsoft.com/v1.0/me/drive/root/search(q='${searchQuery}')`;
    const apiUrl = `https://graph.microsoft.com/v1.0/me/drive/root/search(q='${query}')`;

    $.ajax({
      url: apiUrl,
      headers: {
        Authorization: `Bearer ${accessToken}`, // Replace accessToken with your actual access token
      },
      success: (response) => {
        // Handle the search results in the response object
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

  const handleSearch = () => {
    const query = $(".input-field").val() as string;
    performUnifiedSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon
              sx={{ color: "rgb(255 255 255 / 42%)" }}
              onClick={handleSearch}
            />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search Here"
            inputProps={{ "aria-label": "search" }}
            value={searchTerm}
            onChange={handleChange}
            // onKeyPress={performUnifiedSearch}
          />
        </Search>
      </form>
      <ul>
        {/* {results.map((result) => (
          <li key={result.cacheId}>
            <a href={result.link}>{result.title}</a>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default SearchBar;
