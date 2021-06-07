import React from 'react'
import styles from './Settings.module.css';

const Settings = () => {
  return (
  <section className={styles.settings}>
    <form action="" className={styles.settings__form}>
      <h1  className={styles.settings__title}>Ваши настройки</h1>
        <label for="input__img" className={styles.label__img}>Изображение профиля</label><input id="input__img" type="text" className={styles.input__img} placeholder='Ссылка на изображение' />
        <label for="input__username" className={styles.label__username}>Имя пользователя</label><input id="input__username" type="text" className={styles.input__username} placeholder='Username' />
        <label for="input__about" className={styles.label__about}>Информация о вас</label><textarea id="input__about" type="textarea" className={styles.input__about} placeholder='Информация о вас'></textarea>
        <label for="input__email" className={styles.label__email}>E-mail</label><input id="input__email" type="email" className={styles.input__email} placeholder='Email' />
        <label for="input__pass" className={styles.label__pass}>Новый пароль</label><input id="input__pass" type="password" className={styles.input__pass} placeholder='Пароль' />
          <button className={styles.settings__btn}>Сохранить</button>
      </form>
      <p className={styles.settings__logout}>Выйти из аккаунта</p>
    </section>
  );
}

export default Settings;