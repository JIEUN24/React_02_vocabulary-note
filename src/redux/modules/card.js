import {async} from "@firebase/util";
import {db} from "../../firebase";
import {collection, doc, getDoc, getDocs, addDoc, deleteDoc} from "firebase/firestore";

// Actions

const LOAD = 'card/LOAD';
const CREATE = 'card/CREATE';
const UPDATE = 'card/UPDATE';
const DELETE = 'card/DELETE';

// 초기값

const initialState = {
    list: []
};

// Action Creators

export function loadWord(word_list) {
    return {type: LOAD, word_list};
};

export function createWord(words) {
    return {type: CREATE, words};
};

export function updateWord(word_index) {
    console.log("수정할 버킷 : " + word_index)
    return { type: UPDATE, word_index };
};

export function deleteWord(word_id) {
    console.log("지울 버킷 : " + word_id)
    return { type: DELETE, word_id };
};

// Middlewares
// 로드
export const loadWordFB = () => {
    return async function (dispatch) {
        const word_data = await getDocs(collection(db, "dictionary"));
        // alert("데이터 가져왔다!")

        let word_list = [];

        word_data.forEach((val) => {
             // console.log(val.id, val.data());
            word_list.push({
                id: val.id,
                ...val.data()
            });
        });

        console.log(word_list);
        dispatch(loadWord(word_list));
    };
};

// 단어 추가
export const createWordFB = (word) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "dictionary"), word);
        // const _word = await getDoc(docRef)
        // const word1 = {id: docRef.id, ...word }
        // console.log(word1);

        dispatch(createWord(word));
        // dispatch(loadWordFB(word1));
    };
};

// 단어 삭제
export const deleteWordFB = (word_id) => {
    return async function (dispatch, getState) {
      if(!word_id){
        window.alert("아이디가 없!");
        return;
      }
      const docRef = doc(db, "dictionary", word_id);
      await deleteDoc(docRef);
  
       const _word_list = getState().card.list;
       const word_index = _word_list.findIndex((b) => {
         return b.id === word_id;
       });
  
       dispatch(deleteWord(word_index));
       dispatch(loadWordFB(word_index));
    };
};


// Reducer

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "card/LOAD": {
                return {list: action.word_list} 
            }
        // case "card/CREATE": {
        //         const new_word = [...state.list, action.words];
        //         return {list: new_word}
        //     }
        case "card/DELETE": {
            const new_word_list = state.list.filter(({ word_id }) => {
                return word_id !== action.id;
            });
            console.log(new_word_list)
            return { list: new_word_list };
        }

        // do reducer stuff
        default: return state;
    };
};