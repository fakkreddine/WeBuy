import React from 'react'
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { set } from 'animejs';

function Comment(props) {
  let [data,setdata]=useState();
    const encodedParams = new URLSearchParams();
    encodedParams.set('name', props.props.title);
    encodedParams.set('description',  props.props.desvription);
    const options = {
        method: 'POST',
        url: 'https://product-review-generator.p.rapidapi.com/api/writer/customer-reviews',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'c3e5759522msha124db01fa94a1bp146a0bjsnfa0b55fe4ffb',
          'X-RapidAPI-Host': 'product-review-generator.p.rapidapi.com'
        },
        data: encodedParams,
      };
      let  fetch =async()=>{try {
        const response = await axios.request(options);
        console.log(response.data);
        setdata(response.data)
    } catch (error) {
        console.error(error);
    }

      }
      useEffect(()=>{
        fetch();

      },[])
    
  return (
    <div>{data  }</div>
  )
}

export default Comment