import styles from '../styles/clientCadastro.module.css'
import { BsFillPersonFill } from 'react-icons/bs';


export const CadastroClient = () => {
    return (
        <section className={styles.clientLogin}>

            <section className={styles.clientLeft}>
                <article className={styles.contentForms}>
                    <form>
                        <legend>REGISTRAR NOVA CONTA</legend>
                        <input type="text" className={styles.inputLogin} placeholder="Usuário"  />
                        <input type="email" className={styles.inputEmail} placeholder="Email"/>
                        <input type="password" className={styles.inputPass} placeholder="Senha"/>
                        <button type='submit'>CADASTRAR</button>
                    </form>
                </article>
            </section>

            <section className={styles.clientRight}>
                <article className={styles.contentText}>
                <h1>SEJA BEM VINDO</h1>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Nostrum maiores ab illum temporibus laboriosam nobis libero labore eligendi ea aliquid.
                    Repellat, ipsam in soluta sint fugit voluptatum molestias nostrum adipisci?
                </p>
                
                <a href="#">LOGIN</a>
                </article>
            </section>

        </section>
    )
}                        
