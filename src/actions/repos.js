import axios from "axios";
import { setIsFetching, setRepos } from '../reducers/reposReducer';

export const getRepositories = (searchQuery = "stars:%3E1") => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`);
        dispatch(setRepos(response.data));
    }
};

