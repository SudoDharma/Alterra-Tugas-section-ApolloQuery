import styles from "./style.module.css"

import { useQuery } from "@apollo/client";
import { GET_PENGUNJUNG } from "../../queries/pengunjung";

import Input from "../../component/Input"
import List from "../../component/List"

const Home = () => {

    const {data, loading, error} = useQuery(GET_PENGUNJUNG)

    return(
        <div className={styles.container}>
            <h1>Daftar Pengunjung</h1>
            <h3>Stasiun Gubeng</h3>
            <Input/>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <List data={data.pengunjung}/>
            )}
        </div>
    )
}

export default Home