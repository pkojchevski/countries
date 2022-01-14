
   
import React, { useState } from "react";
import './Search.css'
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";

import { useCountriesValues } from "../../context";
import {Country} from "../../shared/Country"

interface State {
        activeSuggestion: number,
        filteredSuggestions: string[],
        showSuggestions: boolean,
        userInput: string
}

const initState =  {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ''
}

const Search:React.FC<{ handleCountries: Function, placeholder: string, byRegion: boolean, reset: Function}> = ({ handleCountries, placeholder, byRegion, reset}) => {
  const { regions, countries } = useCountriesValues();
  const [autocomplete, setAutocomplete] = useState<State>(initState);

  const onChange = (e:any) => {
    const suggestions = byRegion ? [...regions] : [...countries.map(c => c.name)];
    const userInput = e.currentTarget.value;
    const filteredSuggestions: string[] = suggestions.filter(sugg => {
      return (
        sugg
          .toLowerCase()
          .trim()
          .indexOf(userInput.toLowerCase().trim()) > -1
      );
    });
    setAutocomplete({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  const onClick = (e : React.MouseEvent<HTMLElement>) => {
    setAutocomplete({
      ...initState,
      userInput: e.currentTarget.innerText
    });
    byRegion ? handleCountries(
      countries
        .filter((item: Country) => item.region == e.currentTarget.innerText)
    )
    : handleCountries(
      countries
        .filter((item: Country) => {
          return item.name == e.currentTarget.innerText
        })
    )
  };

  const onKeyDown = (e: any) => {
    const { activeSuggestion, filteredSuggestions } = autocomplete;
    // enter
    if (e.keyCode === 13) {
      if(userInput == "") {
        reset()
        setAutocomplete({
          ...initState
        });
      } else {
        setAutocomplete({
          ...autocomplete,
          userInput: filteredSuggestions[activeSuggestion]
        });
        handleCountries(filteredSuggestions[activeSuggestion]);
      }
    }
    // up arrow
    if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setAutocomplete({
        ...autocomplete,
        activeSuggestion: activeSuggestion - 1
      });
    }

    // down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setAutocomplete({
        ...autocomplete,
        activeSuggestion: activeSuggestion + 1
      });
    }
  };

  const {
    activeSuggestion,
    showSuggestions,
    userInput,
    filteredSuggestions
  } = autocomplete;

  let suggestionsListComponent;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className;
            if (index === activeSuggestion) {
              className = "suggestion-active";
            }

            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <em>No suggestions, you're on your own!</em>
        </div>
      );
    }
  }
  return (
    <div className="search-input">
      <InputGroup className="mb-3">
          <InputGroup.Text>
            <SearchIcon width="20px" height="20px" />
          </InputGroup.Text>
        <FormControl
          placeholder={placeholder}
          aria-label="Search"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
      </InputGroup>
      {suggestionsListComponent}
    </div>
  );
};

export default Search;
