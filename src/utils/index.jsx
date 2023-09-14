import axios from "axios";
import toast from "react-hot-toast";
// AUTH

// Local Storage
const USER_LOCAL_STORAGE_KEY = "CONFIG-USER";
export function saveUser(user) {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
}
export function getUser() {
  const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return user ? JSON.parse(user) : undefined;
}
export function removeUser() {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
}

export async function signIn(credentials) {
  const response = await axios
    .post("http://localhost:4000/signin", JSON.stringify(credentials), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      if (!err.response) {
        toast.error("Server Offline");
      }

      toast.error(err.response.data);
      throw new Error(err.response.data);
    });

  return response;
}
export async function signUp(credentials) {
  const response = await axios
    .post("http://localhost:4000/signup", JSON.stringify(credentials), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      toast.success("Account Created Successfully");

      return res.data;
    })
    .catch((err) => {
      toast.error(err.response.data);

      throw new Error(err.response.data);
    });

  return response;
}

// Posts
export const getPosts = async () => {
  const response = await axios
    .get("http://localhost:4000/posts", {
      headers: {
        Authorization: `Bearer ${getUser()?.accessToken}`,
      },
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err.response.status);
    });
  const data = await response.data;
  return data;
};

export const favoritePost = async (data) => {
  const response = await axios.patch(
    `http://localhost:4000/posts/${data.id}`,
    {
      likedBy: [...data.arr, data.userId],
    },
    {
      headers: {
        Authorization: `Bearer ${getUser()?.accessToken}`,
      },
    }
  );
  return response;
};

export const unfavoritePost = async (data) => {
  const response = await axios.patch(
    `http://localhost:4000/posts/${data.id}`,
    {
      likedBy: data.arr.filter((userId) => userId !== data.userId),
    },
    {
      headers: {
        Authorization: `Bearer ${getUser()?.accessToken}`,
      },
    }
  );
  return response;
};

export async function createPost(data) {
  const response = await axios
    .post(`http://localhost:4000/posts`, data, {
      headers: {
        Authorization: `Bearer ${getUser()?.accessToken}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      toast.error(err.response.data);
      throw new Error(err.response.data);
    });
  return response;
}

export const deletePostById = async (id) => {
  const response = await axios.delete(`http://localhost:4000/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${getUser()?.accessToken}`,
    },
  });
  return response;
};

// Drafts
export const getDrafts = async () => {
  const response = await axios
    .get(`http://localhost:4000/drafts/?userId=${getUser().user.id}`, {
      headers: {
        Authorization: `Bearer ${getUser()?.accessToken}`,
      },
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err.response.status);
    });
  const data = await response.data;
  return data;
};

export const getAllDrafts = async () => {
  const response = await axios.get(`http://localhost:4000/drafts`, {
    headers: {
      Authorization: `Bearer ${getUser()?.accessToken}`,
    },
  });
  const data = await response.data;
  return data;
};

export async function createDraft(data) {
  const response = await axios
    .post(`http://localhost:4000/drafts`, data, {
      headers: {
        Authorization: `Bearer ${getUser()?.accessToken}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      toast.error(err.response.data);
      throw new Error(err.response.data);
    });
  if (response.ok) {
    toast.success("Successfully created Post");
  }
  return response;
}

export const deleteDraftById = async (id) => {
  const response = await axios.delete(`http://localhost:4000/drafts/${id}`, {
    headers: {
      Authorization: `Bearer ${getUser()?.accessToken}`,
    },
  });
  return response;
};

export const updateDraft = async (data) => {
  const response = await axios.put(
    `http://localhost:4000/drafts/${data.id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${getUser()?.accessToken}`,
      },
    }
  );
  return response;
};
// Editor

export function getColor(e, set) {
  const backgroundStyle = window
    .getComputedStyle(e.target, null)
    .getPropertyValue("background-color");
  set(backgroundStyle);
}
