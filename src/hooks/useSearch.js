import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import { useDispatch } from "react-redux";
import {
  clearResults,
  setError,
  setLoading,
  setResults,
} from "../reducers/searchReducer";
const { REACT_APP_API_KEY } = process.env;

const useSearch = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `https://www.superheroapi.com/api.php/${REACT_APP_API_KEY}/search/${search}`
  );

  useEffect(() => {
    if (data && !error) dispatch(setResults(data.results));
  }, [data, dispatch, error]);

  useEffect(() => {
    if (error && search && search.length > 1) dispatch(setError(error));
    if (loading && search && !error) dispatch(setLoading(true));
    if (!search) dispatch(clearResults());
  }, [loading, error, dispatch, search]);

  return {
    search,
    setSearch,
  };
};

export default useSearch;
