import styles from '../styles/global.module.css';
import { Cadastro } from './Cadastro';

export const App = () => {
    return (
        <div className={styles.container}>
            <main className={styles.cadastro}><Cadastro /></main>
        </div>
    )
}