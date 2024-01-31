In this project let's build a **Movies App** by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a class component, displaying that data, using **component lifecycle** methods, **routing** concepts, **authentication**, and **authorization**, and adding responsiveness to the website.

This is an individual assessment. All work must be your own.

### Prerequisites

#### UI Prerequisites

<details>
<summary>Click to view</summary>

- What is Figma?
  - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" target="_blank">Website</a>.
- Create a Free account in Figma
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=hrHL2VLMl7g&t=37s" target="_blank">this</a> video to create a Free Figma account. Watch the video upto **00:50**.
- How to Check CSS in Figma?
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=B242nuM3y2s" target="_blank">this</a> video to check CSS in the Figma screen. Watch the video upto **02:45**.
- Export Images in Figma screen

  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=NpzL1MONwaw" target="_blank">this</a> video to export images from the Figma screen.
  - Click on the Export button to get Export options as shown in the below image.

  <div style="text-align:center;margin:10px 0px 0px 45px;width:200px;">
    <img src="https://assets.ccbp.in/frontend/react-js/figma-export-option.png" />
  </div>

- Upload your exported images from Figma to Cloudinary and get image URLs from Cloudinary. Refer <a href="https://learning.ccbp.in/projects/course?c_id=fe4c935d-3ad5-4bb8-a1a5-9b045ae70010&s_id=2f72d6fe-09a7-4c0a-b0db-196740c853a0&t_id=6535e48d-fb4e-45c4-9654-3da423c79e26" target="_blank">this</a> session for better understanding.

</details>

#### Design Files

<details>
<summary>Click to view</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/tPdVlj0p5PESmymNkHYVgk/Movies_App?node-id=0%3A1" target="_blank">here</a>.

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>
The app must have the following functionalities

- **Login Route**

  - When an invalid username and password are provided and the **Login** button is clicked, then the respective error message received from the response should be displayed
  - When a valid username and password are provided and the **Login** button is clicked, then the page should be navigated to the Home Route
  - When an _unauthenticated_ user tries to access the Home Route, Popular Route, Search Route, Account Route and Movie Item Details Route, then the page should be navigated to Login Route
  - When an _authenticated_ user tries to access the Home Route, Popular Route, Search Route, Account Route and Movie Item Details Route, then the page should be navigated to the respective route
  - When an _authenticated_ user tries to access the Login Route, then the page should be navigated to the Home Route

- **Home Route**

  - When an authenticated user opens the Home Route,

    - An HTTP Get request should be made to **Trending Now Movies API URL**, **Originals API URL** with `jwt_token` in the Cookies

      - **_Loader_** should be displayed while fetching the each data
      - After the data is successfully fetched from both the API's
        - A **random** movie title and movie poster with its details should be displayed from the **Originals Response**
        - Display the list of movies received from the Trending Now Movies Response
        - Display the list of movies received from the Originals Response
      - If any of the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed respectively
        - When the **Try Again** button is clicked, then the respective HTTP GET request should be made

    - When a **Movie** item is clicked, then the page should be navigated to the Movie Item Details Route

  - **Header**  

    - When the **Movies** logo in the header is clicked, then the page should be navigated to the Home Route
    - When the **Home** link in the Header is clicked, then the page should be navigated to the Home Route
    - When the **Popular** link in the header is clicked, then the page should be navigated to the Popular Route
    - When the **Search** icon in the header is clicked, then the page should be navigated to the Search Route
    - When the **Profile** logo in the header is clicked, then the page should be navigated to the Account Route

- **Popular Route**

  - When an authenticated user opens the Popular Route

    - An HTTP GET request should be made to **Popular Movies API URL** with `jwt_token` in the Cookies

      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
        - When the **Try Again** button is clicked, an HTTP GET request should be made to **Popular Movies API URL**

    - When a **Movie** item is clicked, then the page should be navigated to the Movie Item Details Route
    - All the header functionalities mentioned in the Home Route should work in this route accordingly

- **Movie Item details Route**

  - When an authenticated user opens the Movie Item Details Route

    - An HTTP GET request should be made to **Movie Item Details API URL** with `jwt_token` in the Cookies

      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully,
        - Movie item details received from the response should be displayed
        - Display the list of similar movies received from the response
      - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
        - When the **Try Again** button is clicked, an HTTP GET request should be made to **Movie Item Details API URL**

    - All the header functionalities mentioned in the Home Route should work in this route accordingly


- **Search Route**

  - When an authenticated user opens the Search Route

    - When a value is provided in the search input and the button with the search icon is clicked

      - Make an HTTP GET request to the **Search Movies API URL**  with `jwt_token` in the Cookies and query parameter `search` with value as the text provided in the search input
      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, display the list of movies received from the response
      - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
        - When the **Try Again** button is clicked, an HTTP GET request should be made to **Search Movies API URL**
      - When the HTTP GET request made to the **Search Movies API URL** returns an empty list for movies then **Search no results** view should be displayed

    - When a **Movie** item is clicked, then the page should be navigated to the Movie Item Details Route
    - All the header functionalities mentioned in the Home Route should work in this route accordingly

- **Account Route**

  - When an authenticated user opens the Account Route

    - The username which was provided in the login, should be displayed
    - The password which was provided in the login, should be displayed in masked
    - When the **Logout** button is clicked, then the page should be navigated to the Login Route

  - All the header functionalities mentioned in the Home Route should work in this route accordingly


- **Not Found Route**

  - When a random path is provided as the URL, then the page should navigate to the Not Found Route

- Users should be able to view the website responsively in mobile view, tablet view as well

</details>

### Quick Tips

<details>
<summary>Click to view</summary>

- Third party packages to be used to achieve the design or functionality

  - React Slick

    - React Slick <a href="https://react-slick.neostack.com/docs/get-started" target="_blank">Documentation</a>
    - React Slick implementation <a href="https://codesandbox.io/s/react-slick-demo-iz90x?file=/src/components/ReactSlick/index.js" target="_blank">CodeSandbox</a>
    - Update the CSS accordingly to style the React Slider and arrow buttons, you can check the <a href="https://codesandbox.io/s/react-slick-demo-iz90x?file=/src/components/ReactSlick/index.css" target="_blank">CodeSandbox</a>
    - Add the below CDN links in your `public > index.html` file for CSS and Font, you can check the <a href="https://codesandbox.io/s/react-slick-demo-iz90x?file=/public/index.html" target="_blank">CodeSandbox</a> for adding below lines

    ```jsx
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    ```

  - Use date-fns format function to format the date. Refer to the documentation <a href="https://date-fns.org/v2.27.0/docs/format" target="_blank">Link</a> for the usage of format function.

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- **Note:**

  - Don't use any third-party packages other than packages mentioned in the **Quick Tips**
  - Use media queries for responsiveness. Instead of rendering the same elements twice for responsiveness.
  - For Mini Projects, You have to use normal HTML elements to style the React Components. Usage of `styled-components` (CSS in JS) to style React components are not supported in Mini Projects. Test cases won't be passed, If you use styled components.
  - Refer to the below Example for the usage of `testid` in the HTML elements.

    - Example: `<div testid="movieItem" className="movie-item"/>`.

- **Routes**

  - Render `Login` Route component when the path in URL matches `/login`
  - Render `Home` Route component when the path in URL matches `/`
  - Render `Popular` Route component when the path in URL matches `/popular`
  - Render `Movie Item Details` Route component when the path in URL matches `/movies/:id`
  - Render `Search` Route component when the path in URL matches `/search`
  - Render `Account` Route component when the path in URL matches `/account`

- Wrap the `Loader` component with an HTML container element and add the `testid` attribute value as **loader** to it

  ```jsx
  <div className="loader-container" testid="loader">
    <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
  </div>
  ```

- **Login Route**

  - The Movies App Logo image should consist of alt attribute value as `login website logo`
  - The Cookies should be set by using the key name `jwt_token`

- **Home Route**

  - The movie images in the Home Route should have the alt attribute as the value of the key `title` from each object in Trending Now Movies Response, Originals Response

- **Movie Item Details Route**

  - The movie images in the Movie Item Details Route should have the alt as the value of the key `title` from each object in similarMoviesResponse
  - The `runtime` key value received from the movie Item Details response, should be converted from minutes to hours and minutes and displayed in Movie Item Details Route
  - The censor rating of the movie in the Movie Item Details Route should be displayed as **A** if the `adult` key value received from the movie Item Details response is true. Otherwise, it should be displayed as U/A

- **Search Route**

  - When the search results return an empty list, then the No Movies image should consist of alt attribute value as `no movies`
  - When the search results return an empty list, then the text content as `Your search for {searchValue} did not find any matches.` should be displayed where searchValue is the value provided in Search Input
  - The HTML button element with search icon in the header should have the `testid` attribute value as **searchButton** to it

- **Not Found Route**

  - The Not Found image should consist of alt attribute value as `not found`

- **Header**

  - The Movies App Logo image in Header should consist of alt attribute value as `website logo`
  - The Profile image in the Header should consist of alt attribute value as `profile`
  - The Failure View image should consist of alt attribute value as `failure view`
  - `HiOutlineSearch` icon from react-icons should be used for the **Search Icon** button in Header
  - The HTML button element with search icon in the header should have the `testid` attribute value as **searchButton** to it

- **Footer**

  - `FaGoogle` icon from react-icons should be used for the **Google Icon** button in Footer
  - `FaTwitter` icon from react-icons should be used for the **Twitter Icon** button in Footer
  - `FaInstagram` icon from react-icons should be used for the **Instagram Icon** button in Footer
  - `FaYoutube` icon from react-icons should be used for the **Youtube Icon** button in Footer

</details>

### Resources

<details>
<summary>Data fetch URLs</summary>

- **Note:** Use the below sample code snippet to make a POST request on Login using valid username and password.

  ```js
  const options = {
    method: 'POST',
    body: JSON.stringify(userDetails),
  }
  ```

**Login API**

#### API: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Description:

Returns a response based on the credentials provided

#### Sample request object:

```json
{
  "username": "rahul",
  "password": "rahul@2021"
}
```

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9. nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

**Trending Now Movies API**

#### API: `https://apis.ccbp.in/movies-app/trending-movies`

#### Method: `GET`

#### Description:

Returns a response containing the list of all movies

#### Sample Response

```json
{
  "results": [
    {
      "backdrop_path": "https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-background-v0.png",
      "id": "92c2cde7-d740-443d-8929-010b46cb0305",
      "overview": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
      "poster_path": "https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-poster.png",
      "title": "No Time to Die"
    },
    ...
  ],
  "total": 10
}
```

**Top Rated Movies API**

#### API: `https://apis.ccbp.in/movies-app/top-rated-movies`

#### Method: `GET`

#### Description:

Returns a response containing the list of all movies

#### Sample Response

```json
{
  "results": [
    {
      "backdrop_path": "https://assets.ccbp.in/frontend/react-js/movies-app/ghostbusters-afterlife-british-movie-background-v0.png",
      "id": "ef6b65e0-3fbf-4ad7-ae0e-25a478648e69",
      "overview": "Ghostbusters: Afterlife is a 2021 American supernatural comedy film directed by Jason Reitman, who co-wrote the screenplay with Gil Kenan.",
      "poster_path": "https://assets.ccbp.in/frontend/react-js/movies-app/ghostbusters-afterlife-british-movie-poster.png",
      "title": "Ghostbusters: Afterlife"
    },
    ...
  ],
  "total": 10
}
```

**Originals API**

#### API: `https://apis.ccbp.in/movies-app/originals`

#### Method: `GET`

#### Description:

Returns a response containing the list of all movies

#### Sample Response

```json
{
  "results": [
    {
      "backdrop_path": "https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-background-v0.png",
      "id": "efb33428-5527-44d0-a713-1aeef4d56968",
      "overview": "Austin's hottest DJ, Jungle Julia, sets out into the night to unwind with her two friends Shanna and Arlene. Covertly tracking their moves is Stuntman Mike, a scarred rebel leering from behind the wheel of his muscle car, revving just feet away.",
      "poster_path": "https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-poster.png",
      "title": "Death Proof"
    },
    ...
  ],
  "total": 10
}
```

**Popular Movies API**

#### API: `https://apis.ccbp.in/movies-app/popular-movies`

#### Method: `GET`

#### Description:

Returns a response containing the list of all movies

#### Sample Response

```json
{
  "results": [
    {
      "backdrop_path": "https://assets.ccbp.in/frontend/react-js/movies-app/venom-movie-background-v0.png",
      "id": "320dee56-fdb2-40cf-8df8-92b251bd781f",
      "overview": "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote.",
      "poster_path": "https://assets.ccbp.in/frontend/react-js/movies-app/venom-movie-poster.png",
      "title": "Venom"
    },
    ...
  ],
  "total": 10
}
```

**Movie Item Details API**

#### API: `https://apis.ccbp.in/movies-app/movies/{movieId}`

#### Example: `https://apis.ccbp.in/movies-app/movies/92c2cde7-d740-443d-8929-010b46cb0305`

#### Method: `GET`

#### Description:

Returns a response containing the details of the movie

#### Sample Response

```json
{
  "movie_details": {
    "adult": false,
    "backdrop_path": "https://assets.ccbp.in/frontend/react-js/movies-app/venom-let-there-be-carnage-movie-background-v0.png",
    "budget": "11 Crores",
    "genres": [
      {
        "id": "af2384dc-494b-48a7-a94d-91e6b279f20b",
        "name": "Science Fiction"
      },
      {
        "id": "16106068-2d4e-438f-8a9a-fa0b91e4246a",
        "name": "Action"
      },
      {
        "id": "0c29016b-ff7f-4d67-8f95-f8681bc7ff1c",
        "name": "Adventure"
      }
    ],
    "id": "51b4602f-b0f2-4c81-98e0-a2a409b13926",
    "overview": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
    "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    "release_date": "2021-09-30",
    "runtime": 97,
    "similar_movies": [
      {
        "backdrop_path": "https://assets.ccbp.in/frontend/react-js/movies-app/dune-movie-background-v0.png",
        "id": "c6ef2389-078a-4117-b2dd-1dee027e5e8e",
        "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
        "poster_path": "https://assets.ccbp.in/frontend/react-js/movies-app/dune-movie-poster.png",
        "title": "Dune"
      },
      {
        "backdrop_path": "https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-background-v0.png",
        "id": "92c2cde7-d740-443d-8929-010b46cb0305",
        "overview": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
        "poster_path": "https://assets.ccbp.in/frontend/react-js/movies-app/no-time-to-die-movie-poster.png",
        "title": "No Time to Die"
      },
      {
        "backdrop_path": "https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-background-v0.png",
        "id": "046084e1-a782-4086-b723-f98c5c57ebc0",
        "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
        "poster_path": "https://assets.ccbp.in/frontend/react-js/movies-app/shang-chi-and-the-legend-of-the-ten-rings-movie-poster.png",
        "title": "Shang-Chi and the Legend of the Ten Rings"
      },
      {
        "backdrop_path": "https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-background-v0.png",
        "id": "efb33428-5527-44d0-a713-1aeef4d56968",
        "overview": "Austin's hottest DJ, Jungle Julia, sets out into the night to unwind with her two friends Shanna and Arlene. Covertly tracking their moves is Stuntman Mike, a scarred rebel leering from behind the wheel of his muscle car, revving just feet away.",
        "poster_path": "https://assets.ccbp.in/frontend/react-js/movies-app/grindhouse-movie-poster.png",
        "title": "Death Proof"
      }
    ],
    "spoken_languages": [
      {
        "id": "4bc5f2cf-04d6-4064-bd0d-fc927fda507d",
        "english_name": "English"
      }
    ],
    "title": "Venom: Let There Be Carnage",
    "vote_average": 6.8,
    "vote_count": 1514
  }
}
```

**Search Movies API**

#### API: `https://apis.ccbp.in/movies-app/movies-search?search={searchText}`

#### Example: `https://apis.ccbp.in/movies-app/movies-search?search=Venom`

#### Method: `GET`

#### Description:

Returns a response containing the list of movies and their movie names should includes the given searchText

#### Sample Response

```json
{
  "results": [
    {
      "backdrop_path": "https://assets.ccbp.in/frontend/react-js/movies-app/venom-let-there-be-carnage-movie-background-v0.png",
      "id": "51b4602f-b0f2-4c81-98e0-a2a409b13926",
      "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      "poster_path": "https://assets.ccbp.in/frontend/react-js/movies-app/venom-let-there-be-carnage-movie-poster.png",
      "title": "Venom: Let There Be Carnage"
    },
    ...
  ],
  "total": 10
}
```

</details>

### User Credentials

<details>
<summary>Click to view user credentials</summary>

<br/>

**You can use any one of the following credentials**

```text
  username: aakash
  password: sky@007
```

```text
  username: agastya
  password: myth#789
```

```text
  username: advika
  password: world@5
```

```text
  username: binita
  password: modest*6
```

```text
  username: chetan
  password: vigor$life
```

```text
  username: deepak
  password: lightstar@1
```

```text
  username: harshad
  password: joy@85
```

```text
  username: kapil
  password: moon$008
```

```text
 username: rahul
 password: rahul@2021
```

```text
  username: shravya
  password: musical#stone
```

```text
  username: saira
  password: princess@9
```

<br/>
</details>

### Stretch Goals

If you complete the main features of the project you can try out the below features as well.

**Note:** Just a reminder the additional functionality is just extra practice using the tools we have learned. These are not required. If you do not reach the stretch goals, don't worry.

<details>
<summary>Additional Functionality to be added</summary>

- Home Route
  - An HTTP Get request should be made to **Top Rated Movies API URL** as well
    - **_Loader_** should be displayed while fetching the data
    - After the data is successfully fetched from the API
      - Display the list of movies received from the top rated movies response
    - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
      - When the **Try Again** button is clicked, then the HTTP GET request should be made to **Top Rated Movies API URL**
- Users can browse popular movies & searched movies using pagination buttons.
</details>

### Project Submission Instructions

- For Mini Projects, you can submit the test cases at your own pace. But we suggest you to submit the code to know the percentage of completion through test cases and that score will be considered for your interviews.

- Also it's important to publish your code frequently using `Step - 4` in the Instructions tab.

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
