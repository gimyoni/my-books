import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from "./auth";
import {History} from "history";

const reducer = (history:History<unknown>) =>
    combineReducers({
        auth,
        router : connectRouter(history),
    });

export default reducer;

/* 여러개의 리듀스와 모듈들을 합칠 수 있는 파일 */
