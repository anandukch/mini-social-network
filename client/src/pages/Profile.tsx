import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addFriend, getProfile } from "../apis/userApi";
import { setProfile } from "../features/auth/authSlice";
import { AppDispatch, RootState } from "../store/store";
const Profile = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { friend } = useParams()
  
  const [user, setUser] = useState<any>({})
  useEffect(() => {
    getProfile().then(res => {
      setUser(res.data.data);
    }).catch(err => {
      console.log(err);
    }
    )
  }, [])

  const onClickHandler = (e: any) => {
    addFriend(user._id).then(res => {
      console.log(res);
    })
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                  <div className="mt-3">
                    <h4>{user.firstName}</h4>
                    <p className="text-muted font-size-sm">{user.email}</p>
                    {
                      friend && <button className="btn btn-primary" onClick={onClickHandler}>Follow</button>
                    }
                    
                    {/* <button className="btn btn-outline-primary">Message</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;