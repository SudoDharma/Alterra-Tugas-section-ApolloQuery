import styles from "./style.module.css"

import { useNavigate } from "react-router-dom"

const BackButton = () => {
    
    const navigate = useNavigate()

    return(
        <div className={styles.container}>
            <p onClick={() => navigate("/")}>Back</p>
        </div>
    )
}

export default BackButton