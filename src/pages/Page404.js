import React from "react";
import { Link } from "react-router-dom";
import { Typography, Image } from "antd";

const Page404 = () => {
  const { Title, Text } = Typography;

  return (
    <div>
      <Title>Page 404</Title>
      <Text>This page doesn't exist.</Text>
      <div>
        <Image
          width={200}
          src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
        />
      </div>
      <Link to="/">Return to Home Page</Link>
    </div>
  );
};

export default Page404;
