import { Button, DatePicker } from 'antd';

function Login() {
  return (
    <div>
      <Button type="primary"> Hello </Button>
      <DatePicker onChange={date => console.log(date)} />
    </div>
  );
}

export default Login;
