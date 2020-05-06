import { getTokenInfo, clearTokenInfo } from "../utils/token";

export const signInAsync = async (email, password) => {
  const response = await fetch(
    "https://carrythroughcovid.herokuapp.com/api/auth/sign_in",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    },
  );
  const json = await response.json();
  if (response.status === 200) {
    const { map } = response.headers;
    const tokenInfo = {
      accessToken: map["access-token"],
      client: map["client"],
      uid: map["uid"],
    };
    return {
      success: true,
      tokenInfo,
    };
  } else if (response.status === 401) {
    return {
      success: false,
      errors: json.errors,
    };
  } else {
    return {
      success: false,
      errors: ["An unknown error occurred."],
    };
  }
};

export const signOutAsync = async () => {
  const { accessToken, client, uid } = await getTokenInfo();

  const response = await fetch(
    "https://carrythroughcovid.herokuapp.com/api/auth/sign_out",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "access-token": accessToken,
        client: client,
        uid: uid,
      },
    },
  );
  if (response.status === 200) {
    await clearTokenInfo();
    return { success: true };
  } else {
    return { success: false };
  }
};

export const signUpAsync = async (email, password, name) => {
  const response = await fetch(
    "https://carrythroughcovid.herokuapp.com/api/auth",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    },
  );
  const json = await response.json();
  if (response.status === 200) {
    const { map } = response.headers;
    const tokenInfo = {
      accessToken: map["access-token"],
      client: map["client"],
      uid: map["uid"],
    };
    return {
      success: true,
      tokenInfo,
    };
  } else if (json.errors) {
    return {
      success: false,
      errors: json.errors,
    };
  } else {
    return {
      success: false,
      errors: ["An unknown error occurred."],
    };
  }
};
