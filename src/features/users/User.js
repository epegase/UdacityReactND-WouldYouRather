import React from "react";
import { Avatar, Image } from "antd";

const User = ({ avatarURL }) => {
  return (
    <div>
      <Avatar
        src={
          <Image
            src={avatarURL}
            style={{
              width: 40,
              height: 40,
            }}
            alt="user avatar"
          />
        }
      />
    </div>
  );
};

export default User;
