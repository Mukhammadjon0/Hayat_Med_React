import './guestsDocs.css';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';

import Tags from '../../assets/icons/tags.svg';
import UserPluse from '../../assets/icons/user-plus.svg';
import FileCopy from '../../assets/icons/file-copy.svg';
import Refresh from '../../assets/icons/refresh-ccw-clock.svg';
import Printer from '../../assets/icons/printer.svg';

function GuestsDocs() {
	return (
		<>
			<Header />

			<div className='logus__body'>
				<Navbar />

				<main className='expectation__main'>
					<div className='booking__top-box'>
						<div className='booking__heading-box'>
							<h4>Бронь № 502231</h4>

							<button className='booking__heading-btn'>Бронь</button>
						</div>

						<div className='booking__top-btn'>
							<button
								className='booking__heading-btn'
								style={{ backgroundColor: '#f79e98' }}>
								ЛЮКС
							</button>

							<button className='booking_top_btn'>
								<img src={Tags} alt='' />
							</button>

							<button className='booking_top_btn'>
								<img src={UserPluse} alt='' />
							</button>

							<button className='booking_top_btn'>
								<img src={FileCopy} alt='' />
							</button>

							<button className='booking_top_btn'>
								<img src={Refresh} alt='' />
							</button>

							<button className='booking_top_btn'>
								<img src={Printer} alt='' />
							</button>
						</div>
					</div>

					<div className='booking__detail-box'>
						<div
							className='d-flex justify-content-between align-items-center'
							style={{ width: '430px' }}>
							<label htmlFor='' style={{ fontSize: '14px' }}>
								ФИО гостя
							</label>
							<input
								className='booking_input_bg'
								type='text'
								value='Ким Борис'
								disabled={true}
								style={{
									width: '340px',
									padding: '4px 10px',
									background: '#f8ed8d',
									borderRadius: '4px',
									border: '1px solid rgba(0, 0, 0, 0.23)',
								}}
							/>
						</div>

						<div>
							<p
								style={{
									margin: '0',
									color: 'rgba(0, 0, 0, 0.38)',
									fontFamily: 'Roboto',
									fontSize: '12px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									letterSpacing: '0.4px',
								}}>
								Даты проживания
							</p>
							<p
								style={{
									margin: '0',
									color: 'rgba(0, 0, 0, 0.87)',
									fontFamily: 'Roboto',
									fontSize: '14px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									letterSpacing: '0.15px',
								}}>
								06-11 май 2023, заезд с 00:00, выезд до 23:59
							</p>
						</div>

						<div>
							<p
								style={{
									margin: '0',
									color: 'rgba(0, 0, 0, 0.38)',
									fontFamily: 'Roboto',
									fontSize: '12px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									letterSpacing: '0.4px',
								}}>
								Схема проживания
							</p>
							<p
								style={{
									margin: '0',
									color: 'rgba(0, 0, 0, 0.87)',
									fontFamily: 'Roboto',
									fontSize: '14px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									letterSpacing: '0.15px',
								}}>
								1 взр.
							</p>
						</div>

						<div>
							<p
								style={{
									margin: '0',
									color: 'rgba(0, 0, 0, 0.38)',
									fontFamily: 'Roboto',
									fontSize: '12px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									letterSpacing: '0.4px',
								}}>
								Тариф и скидка
							</p>
							<p
								style={{
									margin: '0',
									color: 'rgba(0, 0, 0, 0.87)',
									fontFamily: 'Roboto',
									fontSize: '14px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									letterSpacing: '0.15px',
								}}>
								ЛЮКС
							</p>
						</div>

						<div>
							<p
								style={{
									margin: '0',
									color: 'rgba(0, 0, 0, 0.38)',
									fontFamily: 'Roboto',
									fontSize: 12,
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									letterSpacing: '0.4px',
								}}>
								Тип комнаты
							</p>
							<p
								style={{
									display: 'flex',
									margin: '0',
									color: 'rgba(0, 0, 0, 0.87)',
									fontFamily: 'Roboto',
									fontSize: '14px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									letterSpacing: '0.15px',
								}}>
								<span
									style={{
										display: 'inline-block',
										width: 8,
										height: 20,
										marginRight: 10,
										borderRadius: 2,
										background: '#a4cbfa',
									}}
								/>
								СТД.К
							</p>
						</div>

						<div>
							<p
								style={{
									margin: '0',
									color: 'rgba(0, 0, 0, 0.38)',
									fontFamily: 'Roboto',
									fontSize: 12,
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									letterSpacing: '0.4px',
								}}>
								Комната
							</p>
							<p
								style={{
									margin: '0',
									color: 'rgba(0, 0, 0, 0.87)',
									fontFamily: 'Roboto',
									fontSize: '14px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									letterSpacing: '0.15px',
								}}>
								202.2
							</p>
						</div>
					</div>

					<ul className='nav nav-tabs' id='myTab' role='tablist'>
						<li className='nav-item' role='presentation'>
							<a href='/booking'>
								<button
									className='nav-link'
									id='home-tab'
									data-bs-toggle='tab'
									data-bs-target='#home-tab-pane'
									type='button'
									role='tab'
									aria-controls='home-tab-pane'
									aria-selected='true'>
									Бронь
								</button>
							</a>
						</li>
						<li className='nav-item' role='presentation'>
							<a href='/guests'>
								<button
									className='nav-link active'
									id='profile-tab'
									data-bs-toggle='tab'
									data-bs-target='#profile-tab-pane'
									type='button'
									role='tab'
									aria-controls='profile-tab-pane'
									aria-selected='false'>
									Гости
								</button>
							</a>
						</li>
						<li className='nav-item' role='presentation'>
							<a href=''>
								<button
									className='nav-link'
									id='contact-tab'
									data-bs-toggle='tab'
									data-bs-target='#contact-tab-pane'
									type='button'
									role='tab'
									aria-controls='contact-tab-pane'
									aria-selected='false'>
									Проживание 6 x 2 000 000 so’m
									{/* <span
										style={{
											color: 'rgba(0, 0, 0, 0.5)',
										}}>
										
									</span> */}
								</button>
							</a>
						</li>
					</ul>

					<div className='d-flex justify-content-between align-items-baseline'>
						<div
							className='d-flex flex-column gap-2'
							style={{ width: '32%' }}>
							<div className='d-flex justify-content-between'>
								<button className='green__btn p-2'>
									<svg
										width='22'
										height='22'
										viewBox='0 0 22 22'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M5.5 11H16.5M11 5.5V16.5'
											stroke='white'
											strokeWidth={2}
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
									Добавить
								</button>
								<button
									style={{
										borderRadius: '4px',
										border: '1px solid rgba(0, 0, 0, 0.23)',
										opacity: '0.5',
										background: '#f79e98',
										display: 'flex',
										gap: '4px',
										color: 'white',
										alignItems: 'center',
										justifyContent: 'center',
										padding: '6px 16px',
									}}>
									<svg
										width='22'
										height='22'
										viewBox='0 0 22 22'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M19.25 5.48177C16.1975 5.17927 13.1267 5.02344 10.065 5.02344C8.25 5.02344 6.435 5.1151 4.62 5.29844L2.75 5.48177'
											stroke='white'
											strokeWidth={1.5}
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M7.79199 4.55551L7.99366 3.35467C8.14033 2.48384 8.25033 1.83301 9.79949 1.83301H12.2012C13.7503 1.83301 13.8695 2.52051 14.007 3.36384L14.2087 4.55551'
											stroke='white'
											strokeWidth={1.5}
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M17.279 8.37793L16.6832 17.6088C16.5824 19.0479 16.4999 20.1663 13.9424 20.1663H8.05737C5.49987 20.1663 5.41737 19.0479 5.31654 17.6088L4.7207 8.37793'
											stroke='white'
											strokeWidth={1.5}
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M9.46875 15.125H12.5212'
											stroke='white'
											strokeWidth={1.5}
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M8.70801 11.458H13.2913'
											stroke='white'
											strokeWidth={1.5}
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
									Удалить
								</button>
								<button
									style={{
										borderRadius: '4px',
										border: '1px solid rgba(0, 0, 0, 0.23)',
										background: 'var(--background, #f5f5f5)',
										display: 'flex',
										padding: '6px 16px',
										alignItems: 'center',
										gap: '8px',
									}}>
									<svg
										width='22'
										height='22'
										viewBox='0 0 22 22'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M9.16634 18.3333C9.16634 19.3459 9.98715 20.1667 10.9997 20.1667C12.0122 20.1667 12.833 19.3459 12.833 18.3333C12.833 17.3208 12.0122 16.5 10.9997 16.5C9.98715 16.5 9.16634 17.3208 9.16634 18.3333Z'
											stroke='black'
											strokeOpacity='0.54'
											strokeWidth={1.5}
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M16.5003 18.3333C16.5003 19.3459 17.3211 20.1667 18.3337 20.1667C19.3462 20.1667 20.167 19.3459 20.167 18.3333C20.167 17.3208 19.3462 16.5 18.3337 16.5C17.3211 16.5 16.5003 17.3208 16.5003 18.3333Z'
											stroke='black'
											strokeOpacity='0.54'
											strokeWidth={1.5}
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M1.83333 18.3333C1.83333 19.3459 2.65415 20.1667 3.66667 20.1667C4.67919 20.1667 5.5 19.3459 5.5 18.3333C5.5 17.3208 4.67919 16.5 3.66667 16.5C2.65415 16.5 1.83333 17.3208 1.83333 18.3333Z'
											stroke='black'
											strokeOpacity='0.54'
											strokeWidth={1.5}
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M9.16634 3.66634C9.16634 4.67886 9.98715 5.49967 10.9997 5.49967C12.0122 5.49967 12.833 4.67886 12.833 3.66634C12.833 2.65382 12.0122 1.83301 10.9997 1.83301C9.98715 1.83301 9.16634 2.65382 9.16634 3.66634Z'
											stroke='black'
											strokeOpacity='0.54'
											strokeWidth={1.5}
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M11 5.5V16.5'
											stroke='black'
											strokeOpacity='0.54'
											strokeWidth={1.5}
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M18.333 16.4997V12.833C18.333 10.9997 17.4163 10.083 15.583 10.083H6.41634C4.58301 10.083 3.66634 10.9997 3.66634 12.833V16.4997'
											stroke='black'
											strokeOpacity='0.54'
											strokeWidth={1.5}
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
									Разделить счета
								</button>
							</div>

							{/* GUEST INFOS ============= */}

							<div className='guest__info'>
								<div className='guest__pic' />
								<div className='guest__text'>
									<div className='d-flex'>
										<div className='guest__underline'>
											<span>Ким Борис</span>
										</div>
										07.04.1997
									</div>
									<div className='d-flex gap-3'>
										<div
											className='guest__underline'
											style={{ width: '180px' }}>
											<svg
												width='22'
												height='22'
												viewBox='0 0 22 22'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M20.1388 16.8022C20.1388 17.1322 20.0655 17.4713 19.9097 17.8013C19.7538 18.1313 19.5522 18.443 19.2863 18.7363C18.8372 19.2313 18.3422 19.5888 17.783 19.818C17.233 20.0472 16.6372 20.1663 15.9955 20.1663C15.0605 20.1663 14.0613 19.9463 13.0072 19.4972C11.953 19.048 10.8988 18.443 9.85384 17.6822C8.79967 16.9122 7.80051 16.0597 6.84717 15.1155C5.90301 14.1622 5.05051 13.163 4.28967 12.118C3.53801 11.073 2.93301 10.028 2.49301 8.99217C2.05301 7.94717 1.83301 6.94801 1.83301 5.99467C1.83301 5.37134 1.94301 4.77551 2.16301 4.22551C2.38301 3.66634 2.73134 3.15301 3.21717 2.69467C3.80384 2.11717 4.44551 1.83301 5.12384 1.83301C5.38051 1.83301 5.63717 1.88801 5.86634 1.99801C6.10467 2.10801 6.31551 2.27301 6.48051 2.51134L8.60717 5.50884C8.77217 5.73801 8.89134 5.94884 8.97384 6.15051C9.05634 6.34301 9.10217 6.53551 9.10217 6.70967C9.10217 6.92967 9.03801 7.14967 8.90967 7.36051C8.79051 7.57134 8.61634 7.79134 8.39634 8.01134L7.69967 8.73551C7.59884 8.83634 7.55301 8.95551 7.55301 9.10217C7.55301 9.17551 7.56217 9.23967 7.58051 9.31301C7.60801 9.38634 7.63551 9.44134 7.65384 9.49634C7.81884 9.79884 8.10301 10.193 8.50634 10.6697C8.91884 11.1463 9.35884 11.6322 9.83551 12.118C10.3305 12.6038 10.8072 13.053 11.293 13.4655C11.7697 13.8688 12.1638 14.1438 12.4755 14.3088C12.5213 14.3272 12.5763 14.3547 12.6405 14.3822C12.7138 14.4097 12.7872 14.4188 12.8697 14.4188C13.0255 14.4188 13.1447 14.3638 13.2455 14.263L13.9422 13.5755C14.1713 13.3463 14.3913 13.1722 14.6022 13.0622C14.813 12.9338 15.0238 12.8697 15.253 12.8697C15.4272 12.8697 15.6105 12.9063 15.8122 12.9888C16.0138 13.0713 16.2247 13.1905 16.4538 13.3463L19.488 15.5005C19.7263 15.6655 19.8913 15.858 19.9922 16.0872C20.0838 16.3163 20.1388 16.5455 20.1388 16.8022Z'
													stroke='black'
													strokeOpacity='0.87'
													strokeWidth={1.5}
													strokeMiterlimit={10}
												/>
											</svg>
											+99899 999 99 99
										</div>
										<div
											className='guest__underline'
											style={{ width: '140px' }}>
											<svg
												width='22'
												height='22'
												viewBox='0 0 22 22'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M15.583 18.7913H6.41634C3.66634 18.7913 1.83301 17.4163 1.83301 14.208V7.79134C1.83301 4.58301 3.66634 3.20801 6.41634 3.20801H15.583C18.333 3.20801 20.1663 4.58301 20.1663 7.79134V14.208C20.1663 17.4163 18.333 18.7913 15.583 18.7913Z'
													stroke='black'
													strokeOpacity='0.87'
													strokeWidth={1.5}
													strokeMiterlimit={10}
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													d='M15.5837 8.25L12.7145 10.5417C11.7703 11.2933 10.2212 11.2933 9.27699 10.5417L6.41699 8.25'
													stroke='black'
													strokeOpacity='0.87'
													strokeWidth={1.5}
													strokeMiterlimit={10}
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
									</div>
									<div className='f-flex'>
										<div
											className='guest__underline'
											style={{ width: '100%' }}>
											<svg
												width='22'
												height='22'
												viewBox='0 0 22 22'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M10.9996 12.3108C12.5792 12.3108 13.8596 11.0304 13.8596 9.45082C13.8596 7.87129 12.5792 6.59082 10.9996 6.59082C9.42011 6.59082 8.13965 7.87129 8.13965 9.45082C8.13965 11.0304 9.42011 12.3108 10.9996 12.3108Z'
													stroke='black'
													strokeOpacity='0.87'
													strokeWidth={1.5}
												/>
												<path
													d='M3.31823 7.78218C5.12406 -0.156157 16.8849 -0.14699 18.6816 7.79134C19.7357 12.448 16.8391 16.3897 14.2999 18.828C12.4574 20.6063 9.5424 20.6063 7.69073 18.828C5.16073 16.3897 2.26406 12.4388 3.31823 7.78218Z'
													stroke='black'
													strokeOpacity='0.87'
													strokeWidth={1.5}
												/>
											</svg>
											УЗБЕКИСТАН; Tashkent
										</div>
									</div>
								</div>
							</div>
						</div>

						<div
							className='d-flex flex-column'
							style={{ marginLeft: '10px' }}>
							<div
								className='d-flex flex-column'
								style={{
									background: 'var(--background, #f5f5f5)',
									padding: '10px 20px',
								}}>
								<h5>Профиль</h5>
								<div className='d-flex align-items-center gap-2'>
									<div className='d-flex align-items-center w-100'>
										<input
											type='text'
											style={{
												borderRadius: '4px 0px 0px 4px',
												border:
													'1px solid var(--border, rgba(0, 0, 0, 0.23))',
												background:
													'var(--text-color-dark-mode-primary, #fff)',
												padding: '8px 12px',
												width: '450px',
												maxWidth: '592px',
											}}
										/>
										<button
											style={{
												borderRadius: '0px 4px 4px 0px',
												border:
													'1px solid var(--border, rgba(0, 0, 0, 0.23))',
												background:
													'var(--text-color-dark-mode-primary, #fff)',
												padding: '8px 12px',
											}}>
											<svg
												width='22'
												height='22'
												viewBox='0 0 22 22'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M20.1668 9.16634V13.7497C20.1668 18.333 18.3335 20.1663 13.7502 20.1663H8.25016C3.66683 20.1663 1.8335 18.333 1.8335 13.7497V8.24967C1.8335 3.66634 3.66683 1.83301 8.25016 1.83301H12.8335'
													stroke='black'
													strokeOpacity='0.87'
													strokeWidth={1.5}
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													d='M20.1668 9.16634H16.5002C13.7502 9.16634 12.8335 8.24967 12.8335 5.49967V1.83301L20.1668 9.16634Z'
													stroke='black'
													strokeOpacity='0.87'
													strokeWidth={1.5}
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</button>
									</div>
									<div className='d-flex align-items-center gap-1'>
										<button
											style={{
												borderRadius: '4px',
												border:
													'1px solid var(--border, rgba(0, 0, 0, 0.23))',
												background: 'var(--white, #fff)',
												padding: '10px 16px',
											}}>
											Создать
										</button>
										<button
											style={{
												borderRadius: '4px',
												border:
													'1px solid var(--border, rgba(0, 0, 0, 0.23))',
												background: 'var(--white, #fff)',
												padding: '10px 16px',
											}}>
											Привязать
										</button>
										<button
											style={{
												borderRadius: '4px',
												border:
													'1px solid var(--border, rgba(0, 0, 0, 0.23))',
												background: 'var(--white, #fff)',
												padding: '10px 16px',
											}}>
											Отвязать
										</button>
										<button
											style={{
												borderRadius: '4px',
												border:
													'1px solid var(--border, rgba(0, 0, 0, 0.23))',
												background: 'var(--white, #fff)',
												padding: '10px 16px',
												whiteSpace: 'nowrap',
											}}>
											Сохранить в профиль
										</button>
									</div>
								</div>
							</div>

							<ul className='nav nav-tabs' id='myTab' role='tablist'>
								<li className='nav-item' role='presentation'>
									<a href='/guests'>
										<button
											className='nav-link p-0'
											style={{ padding: '8px 15px !important' }}
											id='home-tab'
											data-bs-toggle='tab'
											data-bs-target='#home-tab-pane'
											type='button'
											role='tab'
											aria-controls='home-tab-pane'
											aria-selected='true'>
											Общая информация
										</button>
									</a>
								</li>
								<li className='nav-item' role='presentation'>
									<a href='/guests-docs'>
										<button
											style={{ padding: '8px 15px !important' }}
											className='nav-link active'
											id='profile-tab'
											data-bs-toggle='tab'
											data-bs-target='#profile-tab-pane'
											type='button'
											role='tab'
											aria-controls='profile-tab-pane'
											aria-selected='false'>
											Документы и адреса
										</button>
									</a>
								</li>
							</ul>

							<h2
								className='mb-2'
								style={{
									padding: '0 12px',
									margin: '0',
									fontFamily: 'Roboto',
									fontSize: '15px',
									fontStyle: 'normal',
								}}>
								Документ
							</h2>

							<div
								className='d-flex justify-content-between gap-2 mb-2'
								style={{ padding: '0 12px' }}>
								<div
									className='d-flex flex-column'
									style={{ width: '200px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Документ
									</label>
									<select
										name=''
										id=''
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}>
										<option value={true} />
										<option value={true} />
									</select>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '100px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Серия
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '120px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Номер
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '200px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Код подразделения
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '200px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Дата выдачи
									</label>
									<input
										type='date'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '200px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Истекает
									</label>
									<input
										type='date'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>
							</div>

							<div
								className='d-flex justify-content-between gap-2 mb-3'
								style={{ padding: '0 12px' }}>
								<div
									className='d-flex flex-column'
									style={{ width: '20%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Дата регисграции
									</label>
									<input
										type='date'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '80%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Кем выдан
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>
							</div>

							<h2
								className='mb-2'
								style={{
									padding: '0 12px',
									margin: '0',
									fontFamily: 'Roboto',
									fontSize: '15px',
									fontStyle: 'normal',
								}}>
								Регистрационный адрес
							</h2>

							<div
								className='d-flex justify-content-between gap-2 mb-2'
								style={{ padding: '8px 12px', background: '#F8ED8D' }}>
								<div
									className='d-flex flex-column'
									style={{ width: '100%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Быстрый поиск и автозаполнение адреса
									</label>
									<select
										name=''
										id=''
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}>
										<option value={true} />
										<option value={true} />
									</select>
								</div>
							</div>

							<div
								className='d-flex justify-content-between gap-2 mb-2'
								style={{ padding: '0 12px' }}>
								<div
									className='d-flex flex-column'
									style={{ width: '200px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Гражданство
									</label>
									<select
										name=''
										id=''
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}>
										<option value={true} />
										<option value={true} />
									</select>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '200px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Страна
									</label>
									<select
										name=''
										id=''
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}>
										<option value={true} />
										<option value={true} />
									</select>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '200px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Индекс
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '200px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Область
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '200px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Район
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>
							</div>

							<div
								className='d-flex justify-content-between gap-2 mb-2'
								style={{ padding: '0 12px' }}>
								<div
									className='d-flex flex-column'
									style={{ width: '200px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Тип населенного пункта
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '200px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Название нас. пункта
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '200px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Улица
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '100px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Дом
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '100px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Корпус
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '100px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Строение
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '100px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Квартира
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>
							</div>

							<h2
								className='mb-2'
								style={{
									padding: '0 12px',
									margin: '0',
									fontFamily: 'Roboto',
									fontSize: '15px',
									fontStyle: 'normal',
								}}>
								Регистрационный адрес
							</h2>

							<div
								className='d-flex justify-content-between gap-2 mb-2'
								style={{ padding: '8px 12px', background: '#F8ED8D' }}>
								<div
									className='d-flex flex-column'
									style={{ width: '100%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Введите название населённого пункта для
										автозаполнения места рождения
									</label>
									<select
										name=''
										id=''
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}>
										<option value={true} />
										<option value={true} />
									</select>
								</div>
							</div>

							<div
								className='d-flex justify-content-between gap-2 mb-2'
								style={{ padding: '8px 12px' }}>
								<div
									className='d-flex flex-column'
									style={{ width: '250px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Страна
									</label>
									<select
										name=''
										id=''
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}>
										<option value={true} />
										<option value={true} />
									</select>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '250px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Область
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '250px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Тип населенного пункта
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>

								<div
									className='d-flex flex-column'
									style={{ width: '250px' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Название нас. пункта
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '5px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
										}}
									/>
								</div>
							</div>
						</div>
					</div>

					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							padding: '8px',
							border: '1px solid var(--light, rgba(0, 0, 0, 0.1))',
						}}>
						<div className='d-flex gap-2'>
							<button
								className='green__btn'
								style={{ padding: '8px 20px' }}>
								<svg
									width='15'
									height='14'
									viewBox='0 0 18 14'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M1 7.61111L5.92308 12.5L17 1.5'
										stroke='#fff'
										strokeWidth={2}
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
								Сохранить
							</button>
							<button
								style={{
									padding: '8px 16px',
									fontSize: '14px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									borderRadius: '4px',
									border: '1px solid rgba(0, 0, 0, 0.23)',
									background: '#f5f5f5',
								}}>
								Незаезд
							</button>
							<button
								className='green__btn'
								style={{ padding: '8px 20px' }}>
								Поселить
							</button>
							<button
								style={{
									padding: '8px 16px',
									fontSize: '14px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									borderRadius: '4px',
									border: '1px solid rgba(0, 0, 0, 0.23)',
									background: '#f5f5f5',
								}}>
								В лист ожидания
							</button>
							<button
								style={{
									padding: '8px 16px',
									fontSize: '14px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									borderRadius: '4px',
									border: '1px solid rgba(0, 0, 0, 0.23)',
									background: '#f5f5f5',
								}}>
								Аннулировать
							</button>
							<button
								style={{
									padding: '8px 16px',
									fontSize: '14px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									borderRadius: '4px',
									border: '1px solid rgba(0, 0, 0, 0.23)',
									background: '#f5f5f5',
								}}>
								Опоздание
							</button>
						</div>

						<div>
							<button
								style={{
									padding: '8px 16px',
									fontSize: '14px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '20px',
									borderRadius: '4px',
									border: '1px solid rgba(0, 0, 0, 0.23)',
									background: 'background, #f5f5f5',
								}}>
								Закрыть
							</button>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}

export default GuestsDocs;
