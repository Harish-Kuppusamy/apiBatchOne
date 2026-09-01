import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const Base_Api = "https://jsonplaceholder.typicode.com/users/1"

  const getAllUsers = async () => {
    try {
      const result = await axios.get(Base_Api)
      console.log(result.data);


    } catch (error) {
      console.log(`something went wrong ${error}`);

    }
  }

  const postUser = async () => {
    try {
      const newObj = {
        "id": 1,
        "name": "Leanne ",
        "username": "Bret - 11"
      }
      const response = await axios.post(Base_Api, newObj)
      console.log(response);


    } catch (error) {
      console.log(`something went wrong ${error}`);

    }
  }



  const putUser = async () => {
    try {
      const newObj = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
      const response = await axios.put(Base_Api, newObj)
      console.log(response);


    } catch (error) {
      console.log(`something went wrong ${error}`);

    }
  }


  const deleteUser = async () => {
    try {
      const newObj = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
      const result = await axios.delete(Base_Api, newObj)
      console.log(result.data);


    } catch (error) {
      console.log(`something went wrong ${error}`);

    }
  }

  useEffect(() => {
    // getAllUsers()
    // postUser()
    // putUser()
    deleteUser()
  }, [])
  return (
    <div>
      hello
    </div>
  )
}

export default App
