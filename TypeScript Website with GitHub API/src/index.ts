// console.log(
//   "Create a TypeScript Website with GitHub API & Search Functionality"
// );
const getUserName = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector("#form") as HTMLFormElement;
const main_container = document.querySelector(".main-container") as HTMLElement;

// so lets define the contract of an Object
interface UserData {
  id: number;
  login: string;
  url: string;
  location: string;
  avatar_url: string;
  // html_url: string;
  // followers: number;
  // following: number;
  // public_repos: number;
}

async function myCustomeFetchUserData<T>(
  api_url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(api_url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);
  return data;
}

// define function to show result in UI
const showResultUI = (singleUser: UserData) => {
  main_container.insertAdjacentHTML(
    "beforeend",
    `<div class="user_card">
    <img src="${singleUser.avatar_url}" alt="${
      singleUser.login
    }" width="100" height="100"/>
      <h2>${singleUser.login}</h2>
      <p>ID: ${singleUser.id}</p>
      <p>URL: <a href="${singleUser.url}" target="_blank">${
      singleUser.url
    }</a></p>
      <p>Location: ${singleUser.location || "Not specified"}</p>
    </div>`
  );
};

// define function to fetch user data from GitHub API
function fetchUserdata(api_url: string) {
  myCustomeFetchUserData<UserData[]>(api_url, {}).then((userInfo) => {
    console.log(userInfo);
    for (const singleUser of userInfo as any[]) {
      showResultUI(singleUser);
      console.log("login", singleUser.login);
    }
  });
}

// define fun call user Data from GitHub API
fetchUserdata("https://api.github.com/users");

// let perform search fun
formSubmit.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchTerm = getUserName.value.toLowerCase();
  // console.log("userTerm", userTerm);

  try {
    const url = `https://api.github.com/users`;

    const allUserData = await myCustomeFetchUserData<UserData[]>(url, {});

    const matchingUsers = allUserData.filter((user) => {
      return user.login.toLowerCase().includes(searchTerm);
    });

    // Clear previous results
    main_container.innerHTML = "";

    if (matchingUsers.length === 0) {
      main_container?.insertAdjacentHTML(
        "beforeend",
        `<h2>No users found matching "${searchTerm}"</h2>`
      );
    } else {
      for (const singleUser of matchingUsers) {
        showResultUI(singleUser);
      }
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
});
