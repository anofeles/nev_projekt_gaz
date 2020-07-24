// const [count, setCount] = useState(0);
const POST_ENDPOINT = 'http://kaxatest.tsu.ge/api/register';
const POST_ENDPOINT_test = 'https://postman-echo.com/post';
const GET_TEST_JSON = 'https://reactnative.dev/movies.json';

export class INFO {
  //   static init() {
  //     return new Promise((resolve, reject) => {});
  //   }

  static postData = async(post) => {
    try {
      let res = await fetch(POST_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: post,
          email: post,
          password: post,
          password_confirmation: post,
          emai: post,
        }),
      });
      res = await res.json();
      console.log(res)
    } catch (e) {
      console.error(e);
    }
  }

  static setPosts(post) {
    return fetch(POST_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: post,
          email: post,
          password: post,
          password_confirmation: post,
          emai: post,
      })
    })
        .then(response => response.json())
        .then(responseJson => {
          // console.log('sucsess',responseJson);
          return responseJson;
        })
        .catch(error => {
          // console.error('error',error);
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
