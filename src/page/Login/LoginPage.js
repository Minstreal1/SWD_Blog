import React, { useState } from 'react';
import './LoginPage.css'

<title>LoginPage</title>
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Thực hiện kiểm tra đăng nhập ở đây, ví dụ: gửi dữ liệu đăng nhập đến máy chủ

    if (username === 'admin' && password === '123456') {
      // Đăng nhập thành công, điều hướng hoặc thực hiện các hành động khác
      console.log('Đăng nhập thành công');
    } else {
      // Đăng nhập thất bại, hiển thị thông báo lỗi hoặc thực hiện các hành động khác
      console.error('Đăng nhập thất bại');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <div>
        <a href="/signup">Sign Up</a> {/* Thay thế "/signup" bằng đường dẫn đến trang đăng ký */}
      <span>| </span>
        <a href="/forgot-password">Forgot Password</a> {/* Thay thế "/forgot-password" bằng đường dẫn đến trang quên mật khẩu */}
      </div>
    </div>
  );
}

export default Login;