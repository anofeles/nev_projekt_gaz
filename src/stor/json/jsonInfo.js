// const [count, setCount] = useState(0);
const POST_ENDPOINT = 'http://api.botasi.ge/post/';
const GET_TEST_JSON = 'https://reactnative.dev/movies.json';

export class INFO {
  //   static init() {
  //     return new Promise((resolve, reject) => {});
  //   }

  static setPosts(post) {
    return fetch(POST_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "write_api_key": "WRITE_API_KEY",
        "data": [{
          "addres": post.addres,
          "fname": post.fname,
          "name": post.name,
          "prise": post.prise,
          "text": post.text
        }
        ]
      })
    })
        .then(response => response.json())
        .then(responseJson => {
          console.log('sucsess',responseJson);
          return responseJson;
        })
        .catch(error => {
          console.error('error',error);
          return error;
        })
      .done();
  }

  static getPosts() {
    return fetch(GET_TEST_JSON)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
