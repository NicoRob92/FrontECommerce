import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: [],
  chosenCategories: [],
  categoryPost: [],
  posts: [],
  cart: [],
  users: [],
  countries: [],
  filteredPostByCategory: [],
  postById: [],
  orders: [],
  reviews: [],
};

export default function Product(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case actionTypes.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case actionTypes.GET_USERS:
      return { ...state, users: action.payload };

    case actionTypes.GET_COUNTRIES:
      return { ...state, countries: action.payload };

    case actionTypes.GET_CATEGORY_POST:
      return {
        ...state,
        categoryPost: state.posts.filter(
          (post) => post.categoryId === action.payload
        ),
      };
    case actionTypes.GET_POST_BY_ID:
      return {
        ...state,
        postById: action.payload,
      };

    case actionTypes.CHOOSE_CATEGORIES:
      if (action.info === "add category") {
        return {
          ...state,
          chosenCategories: [...state.chosenCategories, action.payload],
        };
      } else if (action.info === "remove category") {
        return {
          ...state,
          chosenCategories: state.chosenCategories.filter(
            (e, i) => i !== action.index
          ),
        };
      }
      break;
    case actionTypes.RESET_CATEGORIES:
      return {
        ...state,
        chosenCategories: [],
        filteredPostByCategory: [],
      };
      case actionTypes.FILTER_POSTS_BY_CATEGORY:
      const categoriesInOrder = state.chosenCategories.sort();
      return {
        ...state,
        filteredPostByCategory: state.posts.filter((post) => {
          console.log(String(post.Categories[0].id))
          if (categoriesInOrder.toString().includes(String(post.Categories[0].id))) return true;
          else return false;
        }),
      };
    case actionTypes.SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case actionTypes.GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case actionTypes.SORT_ORDERS:
      const orders = state.orders;
      const sortedOrder =
        action.payload === "all"
          ? orders
          : state.orders.filter((e) => e.status === action.payload);
      return {
        ...state,
        orders: sortedOrder
      }
    default:
      return state;
  }
}
