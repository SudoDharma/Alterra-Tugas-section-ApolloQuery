import styles from "./style.module.css"

import { GET_PENGUNJUNG } from "../../queries/pengunjung";

import Input from "../../component/Input"
import List from "../../component/List"

const Home = () => {
    return(
        <div className={styles.container}>
            <h1>Daftar Pengunjung</h1>
            <h3>Stasiun Gubeng</h3>
            <Input/>
            <List query={GET_PENGUNJUNG}/>
        </div>
    )
}

export default Home