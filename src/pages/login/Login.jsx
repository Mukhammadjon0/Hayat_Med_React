import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import LoginImg from '../../assets/imgs/login-img-2.png';
import EyeIcon from '../../assets/icons/eye.svg';

function Login() {
	return (
		<div class='login'>
			<div class='login-left'>
				<div class='login-form'>
					<h1>Вход в систему Госпиталь</h1>
					<h2>Hayat Medical Center</h2>
					<form action='' class='mt-3'>
						<div class='form-floating mb-3 w-100'>
							<input
								type='email'
								class='form-control'
								id='floatingInput'
								placeholder='name@example.com'
							/>
							<label for='floatingInput'>Логин</label>
						</div>
						<div class='form-floating w-100'>
							<input
								type='password'
								class='form-control'
								id='floatingPassword'
								placeholder='Password'
							/>
							<label for='floatingPassword'>Пароль</label>
							<img id='togglePassword' src={EyeIcon} alt='icon' />
						</div>
						<div class='form-bottom'>
							<div class='form-check'>
								<input
									class='form-check-input'
									type='checkbox'
									id='gridCheck'
								/>
								<label class='form-check-label' for='gridCheck'>
									Запомните пароль
								</label>
							</div>
							<Link to={''}>Забыли пароль ?</Link>
						</div>
						<button type='submit' id='loginButton'>
							<a href='expectation.html'>Вход в систему</a>
						</button>
					</form>
				</div>
			</div>
			<div class='login-right'>
				<img src={LoginImg} alt='img' />
			</div>
		</div>
	);
}

export default Login;
