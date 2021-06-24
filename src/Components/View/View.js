import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../contexts/FirebaseContext";
import { PostContext } from "../../contexts/PostContext";

import "./View.css";
function View() {
  const [userdetails, setUserDetails] = useState();
  const { postview } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const { userId } = postview;
    firebase
      .firestore()
      .collection("user")
      .where("id", "==", userId)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
  }, []);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postview.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postview.price}</p>
          <span>{postview.category}</span>
          <p>{postview.name}</p>
          <span>{postview.createdAt}</span>
        </div>
        {userdetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userdetails.username}</p>
            <p>{userdetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
