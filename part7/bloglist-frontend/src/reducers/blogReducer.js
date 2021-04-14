import blogService from "../services/blogs";

export const initBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch({ type: "INIT_BLOGS", data: blogs });
  };
};

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_BLOG":
      return [...state, action.data];
    case "INIT_BLOGS":
      return action.data;
    default:
      return state;
  }
};

export default blogReducer;
