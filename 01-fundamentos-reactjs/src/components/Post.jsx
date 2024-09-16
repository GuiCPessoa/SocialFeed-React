import styles from './Post.module.css'


export function Post(){
    return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar}src="https://github.com/guicpessoa.png"/>
                <div className={styles.authorInfo}>
                    <strong>Guilherme Caio</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time title="16 de Setembro às 11:50h" dateTime="2024-09-16 11:51:00">Publicado há 1h</time>

        </header>

        <div className={styles.content}>
            <p>Fala galeraa 👋 </p>
            <p>Acabei de subir mais um projeto no meu GitHub. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉 <a href="">jane.design/doctorcare</a></p>
            <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
        </div>
    </article>
    )
}