import './header.css';
import LOGO from '../../assets/icons/logo.svg';

function Header() {
	return (
		<>
			<header>
				<div className='header-left'>
					<div className='logo'>
						<a href='/'>
							<img src={LOGO} alt='logo' />
						</a>
					</div>
					<div className='header-links'>
						<div className='header-link header-link-active'>
							<a href=''>Служба приёма</a>
						</div>
						<div className='header-link'>
							<a href=''>Задачи</a>
						</div>
						<div className='header-link'>
							<a href=''>Гостиница</a>
						</div>
						<div className='header-link'>
							<a href=''>Клиенты</a>
						</div>
						<div className='header-link'>
							<a href=''>Oтчёты</a>
						</div>
					</div>
				</div>
				<div className='header-right'>
					<div className='header__search'>
						<svg
							width='16'
							height='16'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
								stroke='black'
								strokeOpacity='0.38'
								strokeWidth={1.5}
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M22 22L20 20'
								stroke='black'
								strokeOpacity='0.38'
								strokeWidth={1.5}
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<input
							type='text'
							placeholder='Быстрый поиск...'
							style={{ outline: 'none', border: 'none' }}
						/>
					</div>
					<div className='dropdown'>
						<button
							className='dropdown-toggle profile-btn'
							type='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'>
							Mухиддинов
						</button>
						<ul className='dropdown-menu'>
							<li>
								<a className='dropdown-item' href='login.html'>
									Выйти
								</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
			<script
				src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
				integrity='sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz'
				crossOrigin='anonymous'
			/>
		</>
	);
}

export default Header;
