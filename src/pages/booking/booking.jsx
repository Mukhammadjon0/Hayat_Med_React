import './booking.css';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';

import Tags from '../../assets/icons/tags.svg';
import UserPluse from '../../assets/icons/user-plus.svg';
import FileCopy from '../../assets/icons/file-copy.svg';
import Refresh from '../../assets/icons/refresh-ccw-clock.svg';
import Printer from '../../assets/icons/printer.svg';

function Booking() {
	return (
		<>
			{/* HEADER */}
			<Header />

			<div className='logus__body'>
				<Navbar />

				{/* == MAIN SIDE ============= */}
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
									className='nav-link active'
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
									className='nav-link'
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

					<div className='d-flex justify-content-between mb-3'>
						<div className='booking__guest-box' style={{ width: '55%' }}>
							<h5
								style={{
									marginBottom: '10px',
									fontSize: '16px',
									fontWeight: '400',
								}}>
								Информация о госте
							</h5>

							<div
								className='d-flex justify-content-between'
								style={{
									padding: '10px',
									background: '#f5f5f5',
								}}>
								<div
									className='d-flex flex-column'
									style={{ width: '45%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Телефон
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '8px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
											borderRadius: '4px',
										}}
									/>
								</div>
								<div
									className='d-flex flex-column'
									style={{ width: '45%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Email
									</label>
									<input
										type='text'
										style={{
											width: '100%',
											padding: '8px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
											borderRadius: '4px',
										}}
									/>
								</div>
							</div>
						</div>

						<div className='booking__guest-box' style={{ width: '40%' }}>
							<h5
								style={{
									marginBottom: '10px',
									fontSize: '16px',
									fontWeight: '400',
								}}>
								Корпоративный клиент
							</h5>

							<div
								className='d-flex justify-content-between'
								style={{
									padding: '10px',
									background: '#f5f5f5',
								}}>
								<div
									className='d-flex flex-column'
									style={{ width: '45%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Компания
									</label>
									<input
										type='text'
										value='№300001 - Физлицо'
										style={{
											width: '100%',
											padding: '8px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
											borderRadius: '4px',
										}}
									/>
								</div>
								<div
									className='d-flex flex-column'
									style={{ width: '45%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Менеджер
									</label>
									<select
										name=''
										id=''
										style={{
											width: '100%',
											padding: '8px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
											borderRadius: '4px',
										}}>
										<option value={true}>Мухиддинов Ж К.</option>
										<option value={true} />
									</select>
								</div>
							</div>
						</div>
					</div>

					<div className='d-flex justify-content-between'>
						<div className='booking__guest-box' style={{ width: '55%' }}>
							<h5
								style={{
									marginBottom: '10px',
									fontSize: '16px',
									fontWeight: '400',
								}}>
								Маркетинговая информация
							</h5>

							<div
								className='d-flex justify-content-between'
								style={{
									padding: '10px',
									background: '#f5f5f5',
								}}>
								<div
									className='d-flex flex-column'
									style={{ width: '24%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Сегмент рынка
									</label>
									<select
										name=''
										id=''
										style={{
											width: '100%',
											padding: 4,
											fontSize: '14px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
											borderRadius: '4px',
										}}>
										<option value={true}>ОСН - Основной</option>
										<option value={true} />
									</select>
								</div>
								<div
									className='d-flex flex-column'
									style={{ width: '24%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Источник
									</label>
									<select
										name=''
										id=''
										style={{
											width: '100%',
											padding: '4px',
											fontSize: '14px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
											borderRadius: '4px',
										}}>
										<option value={true}>РЕКОМ - Рекомендации</option>
										<option value={true} />
									</select>
								</div>
								<div
									className='d-flex flex-column'
									style={{ width: '24%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Трек-код
									</label>
									<select
										name=''
										id=''
										style={{
											width: '100%',
											padding: '4px',
											fontSize: '14px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
											borderRadius: '4px',
										}}>
										<option value={true}>НВ - Новый врач</option>
										<option value={true} />
									</select>
								</div>
								<div
									className='d-flex flex-column'
									style={{ width: '24%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										ГЕО
									</label>
									<select
										name=''
										id=''
										style={{
											width: '100%',
											padding: '4px',
											fontSize: '14px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
											borderRadius: '4px',
										}}>
										<option value={true}>ТАШ - Ташкент</option>
										<option value={true} />
									</select>
								</div>
							</div>
						</div>

						<div className='booking__guest-box' style={{ width: '40%' }}>
							<h5
								style={{
									marginBottom: '10px',
									fontSize: '16px',
									fontWeight: '400',
								}}>
								Гарантия
							</h5>

							<div
								className='d-flex justify-content-between'
								style={{
									padding: '10px',
									background: '#f5f5f5',
								}}>
								<div
									className='d-flex flex-column'
									style={{ width: '32%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Гарантия
									</label>
									<select
										name=''
										id=''
										style={{
											width: '100%',
											padding: '4px',
											fontSize: '14px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
											borderRadius: '4px',
										}}>
										<option value={true}>
											ЗАЕЗД - Оплата при поселении
										</option>
										<option value={true} />
									</select>
								</div>
								<div
									className='d-flex flex-column'
									style={{ width: '32%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Сумма
									</label>
									<input
										type='number'
										style={{
											width: '100%',
											padding: '4px',
											fontSize: '14px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
											borderRadius: '4px',
										}}
									/>
								</div>
								<div
									className='d-flex flex-column'
									style={{ width: '32%' }}>
									<label
										htmlFor=''
										style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
										Внести до
									</label>
									<input
										type='date'
										style={{
											width: '100%',
											padding: '4px',
											fontSize: '14px',
											border: '1px solid rgba(0, 0, 0, 0.23)',
											borderRadius: '4px',
										}}
									/>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div
							className='d-flex flex-column'
							style={{ width: '100%', marginBottom: '20px' }}>
							<label htmlFor='' style={{ color: 'rgba(0, 0, 0, 0.54)' }}>
								Комментарии
							</label>
							<textarea
								style={{
									display: 'block',
									width: '100%',
									height: '300px',
								}}
							/>
						</div>
					</div>

					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							padding: "8px",
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

			{/* script ============= */}
			<script
				src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
				integrity='sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz'
				crossOrigin='anonymous'
			/>
		</>
	);
}

export default Booking;
