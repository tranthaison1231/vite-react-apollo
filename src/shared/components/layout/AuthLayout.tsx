import { Col, Row, Image, Grid } from 'antd';
import { ReactNode } from 'react';
import login from '#/assets/images/login.png';
import logo from '#/assets/images/fullLogo.png';

interface Props {
  children: ReactNode;
}

function AuthLayout({ children }: Props) {
  const { md } = Grid.useBreakpoint();
  return (
    <Row className="h-screen">
      {md && (
        <Col
          lg={12}
          md={0}
          xs={0}
          className="flex h-screen justify-center bg-color-gray-10"
        >
          <Row align="middle">
            <Col>
              <Image className="w-auto" preview={false} src={login} />
            </Col>
          </Row>
        </Col>
      )}
      <Col
        lg={12}
        md={24}
        xs={24}
        className="flex h-screen flex-col px-10 py-8 leading-normal"
      >
        <Image preview={false} src={logo} className="h-14 w-auto" />
        {children}
      </Col>
    </Row>
  );
}

export default AuthLayout;
