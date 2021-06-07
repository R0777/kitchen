import React from 'react'
import styles from './Editor.module.css';

const Editor = () => {
  return (
    <section className={styles.editor}>
    <form action="" className={styles.editor__form}>
      <h1  className={styles.editor__title}>Новая запись</h1>
        
        <label for="input__title" className={styles.label__title}>Заголовок</label><input id="input__title" type="text" className={styles.input__username} placeholder='Название статьи' />
        <label for="input__about" className={styles.label__about}>Описание</label><input id="input__about" type="textarea" className={styles.input__about} placeholder='О чем статья' />
        <label for="input__img" className={styles.label__img}>Изображение</label><input id="input__img" type="text" className={styles.input__img} placeholder='Изображение (опционально)' />
        <label for="input__text" className={styles.label__text}>Содержание</label><textarea id="input__text" type="textarea" className={styles.input__text} placeholder='Текст статьи' ></textarea>
        
        <label for="input__teg" className={styles.label__tag}>Тэги</label><input id="input__teg" type="text" className={styles.input__tag} placeholder='Теги (через запятую)' />
          <button className={styles.editor__btn}>Опубликовать</button>
      </form>
    </section>
  );
}

export default Editor;
